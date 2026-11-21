# Project 01 — Algorithm Analysis

**Confidence:** VERIFIED (`backend/app/optimization/`)

## Player Skill Score

**Formula** (`backend/app/main.py:_build_skill_breakdown()`):

```
skill_score = 0.40 × current_rank_score
            + 0.20 × current_star_score
            + 0.25 × highest_rank_score
            + 0.15 × highest_star_score
```

Weights configurable via env vars. Raw scores derived from rank normalization (rank names mapped to numeric values).

## Role Flexibility Score

**Formula** (`backend/app/main.py:_build_role_breakdown()`):

```
normalized_comfort = (comfort / 5.0) × 100
role_flexibility = 0.70 × normalized_primary_comfort
                 + 0.30 × normalized_secondary_comfort
```

## Team Fairness Score

**Formula** (`backend/app/optimization/team_optimizer.py:_score_teams_multi_objective()`):

```
Skill Balance  = max(0, 100 - skill_deviation × 3)
Rank Balance   = max(0, 100 - rank_std × 5)
Role Balance   = (lanes_covered / 5) × 100

Team Fairness  = 0.40 × Role Balance
               + 0.20 × Rank Balance
               + 0.40 × Skill Balance
```

## Team Formation Algorithm

**Approach:** Randomized heuristic with local search (NOT brute force, NOT exact optimization).

**Location:** `backend/app/optimization/team_optimizer.py:TeamOptimizer.optimize()`

**Steps:**
1. **Role scarcity analysis** — `RoleDemandAnalyzer` identifies shortage roles
2. **Phase 1 (Coverage):** Assign players to teams missing their primary/secondary lane, processing rare roles first
3. **Phase 2 (Fill):** Assign remaining players using skill-balance penalty
4. **Hard constraint:** Every team must have exactly 5 players covering all 5 lanes
5. **Randomized search:** Up to `max_iterations` (50) candidate generations
6. **Candidate scoring:** `min_fairness - fairness_std × 3.0 - skill_std × 20.0`
7. **Early termination:** When `min_fairness ≥ 90` and `fairness_std < 3.0` and `skill_std < 2.0`
8. **Local search:** Swap players between teams to improve role completeness → rank balance → skill balance
9. **Fallback:** Role-aware snake draft → fill missing roles → lane preference permutation optimization

## Computational Complexity

| Phase | Complexity | Notes |
|-------|-----------|-------|
| Participant selection | O(n log n) | Sorting by flexibility, rank, skill |
| Phase 1 coverage | O(roles × players × teams) | Lane-by-lane assignment |
| Phase 2 fill | O(players × teams × roles) | Skill-balance greedy |
| Randomized search | O(iterations × teams × players²) | Candidate generation + evaluation |
| Local search | O(100 × teams × players²) | Bounded swap iterations |

**Overall:** Heuristic, polynomial time. Suitable for competition-scale (tens to low hundreds of participants).

## Reproducibility

- Seeded RNG via `random.Random(seed)` (default seed = 42)
- Same seed + same participant set = same team output
- Seed configurable via `AdminGenerateTeamRequest.random_seed`

## Edge Cases

- **Count not divisible by 5:** `ParticipantSelector` selects optimal subset (lane-diversity first), marks rest ELIMINATED
- **No valid candidate:** Fallback to snake draft + role filling
- **All teams missing a lane:** Candidate rejected (hard constraint)
- **No qualified participants:** HTTP 400 error
