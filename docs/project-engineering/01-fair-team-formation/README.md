# Project 01 — Fair Team Formation System

**Repository:** `/Users/user/ml-fair-team-formation/` (VERIFIED)
**Status:** Complete, production-ready
**Confidence:** VERIFIED (directly confirmed by source code, README, and test files)

## Overview

A web-based competition management platform that automatically forms balanced Mobile Legends teams using player-skill scoring, rank normalization, role flexibility, participant selection, and team-fairness evaluation. Built as a monorepo with a FastAPI backend, Next.js 14 frontend, and PostgreSQL/SQLite database.

**Period:** July 2026 – August 2026
**Organization:** Infranexia (Telkom Indonesia)
**Location:** Mataram, Indonesia

## Technology Stack (VERIFIED from source)

| Layer | Technology | Evidence |
|-------|-----------|----------|
| Backend | Python 3.12, FastAPI | `backend/requirements.txt`, `backend/app/main.py` |
| Frontend | Next.js 14, React, TypeScript | `frontend/package.json`, `frontend/src/app/` |
| Styling | Tailwind CSS | `frontend/tailwind.config.js` |
| Database | PostgreSQL (prod), SQLite (dev) | `backend/app/config/settings.py` (`DATABASE_URL`) |
| ORM | SQLAlchemy (async) | `backend/app/database.py`, `backend/app/models/models.py` |
| Auth | JWT | `backend/app/api/deps.py` |
| Testing | pytest | `backend/tests/` (67 tests) |
| Deployment | Vercel (serverless) | `vercel.json`, `api/index.py` |

## Executive Summary

The Fair Team Formation System solves the problem of creating balanced 5-vs-5 Mobile Legends competition teams from a pool of players with varying skill levels, rank tiers, and lane preferences. The system:

1. Ingests participant data from a master CSV (read-only authoritative source)
2. Computes player skill scores using a weighted formula (current rank 40%, current stars 20%, highest rank 25%, highest stars 15%)
3. Computes role flexibility scores (primary comfort 70%, secondary comfort 30%)
4. Selects optimal participant subsets when total count is not divisible by 5
5. Generates teams using a randomized heuristic optimizer with multi-objective fairness scoring
6. Gates team access behind payment verification (E-Money Dana/Link)
7. Provides full audit logging, version history, and admin dashboard

## Key Algorithms (VERIFIED from source code)

### Player Skill Score
Located in `backend/app/main.py:_build_skill_breakdown()` and `backend/app/config/settings.py`:

```
skill_score = 0.40 × current_rank_score
            + 0.20 × current_star_score
            + 0.25 × highest_rank_score
            + 0.15 × highest_star_score
```

Weights are configurable via environment variables:
- `CURRENT_RANK_WEIGHT` = 0.40
- `CURRENT_STAR_WEIGHT` = 0.20
- `HIGHEST_RANK_WEIGHT` = 0.25
- `HIGHEST_STAR_WEIGHT` = 0.15

### Role Flexibility Score
```
role_flexibility = 0.70 × normalized_primary_comfort
                 + 0.30 × normalized_secondary_comfort
```
Where `normalized_comfort = (comfort / 5.0) × 100`. (VERIFIED in `backend/app/main.py:_build_role_breakdown()`)

### Team Fairness Score
```
Team Fairness = 0.40 × Role Balance
              + 0.20 × Rank Balance
              + 0.40 × Skill Balance
```

Where:
- `Skill Balance = max(0, 100 - skill_deviation × 3)`
- `Rank Balance = max(0, 100 - rank_std × 5)`
- `Role Balance = (lanes_covered / 5) × 100`

(VERIFIED in `backend/app/optimization/team_optimizer.py:_score_teams_multi_objective()`)

### Participant Selection (when count not divisible by 5)
Located in `backend/app/optimization/participant_selector.py:ParticipantSelector`:
1. Sorts participants by role_flexibility_score, effective_rank, skill_score, player_id (descending)
2. For each of the 5 lanes, selects up to `num_teams` participants who have that lane as primary or secondary
3. Fills remaining slots from the sorted pool
4. Returns selected + not_selected lists

### Team Formation Algorithm
Located in `backend/app/optimization/team_optimizer.py:TeamOptimizer.optimize()`:

1. **Phase 1 (Coverage):** For each role (sorted by scarcity), assign skilled players to teams missing that role
2. **Phase 2 (Fill):** Assign remaining players to teams with skill-balance penalty
3. **Hard constraint:** Every team must have exactly 5 players covering all 5 lanes
4. **Randomized search:** Run up to 50 iterations, generating candidate team configurations
5. **Local search:** Swap players between teams to improve role completeness, then rank balance, then skill balance
6. **Fallback:** Role-aware snake draft → fill missing roles → lane preference optimization

**Computational complexity:** O(iterations × teams × players²) per optimization run, with early termination when fairness ≥ 90 and std < 3.

**Randomness:** Controlled by `random_seed` (default 42) via `random.Random(seed)`. Reproducible given the same seed and participant set.

## Database Schema (VERIFIED from `backend/app/models/models.py`)

| Table | Key Fields | Relationships |
|-------|-----------|---------------|
| `participants` | id, email, current_rank, current_stars, highest_rank, highest_stars, primary_lane, secondary_lane, skill_score, role_flexibility_score, status, rank | One-to-many with team_members, payments |
| `ranking_versions` | id, generated_at, confirmed_at, status, total_participants, qualified_count, eliminated_count | One-to-many with team_versions |
| `team_versions` | id, ranking_version_id, total_teams, overall_fairness, random_seed, optimization_iterations | One-to-many with team_members |
| `team_members` | id, team_version_id, team_id, player_id, assigned_lane, comfort_in_assigned_lane, role_compatibility_score, fairness_breakdown | Many-to-one with participants, team_versions |
| `payments` | id, player_id, status, amount, method, verified_by | Many-to-one with participants |
| `system_state` | id, state, current_ranking_version_id, current_team_version_id | Singleton state table |
| `audit_logs` | id, action, actor, timestamp, log_metadata | Append-only log |

## API Endpoints (VERIFIED from `backend/app/main.py`)

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET | `/api/health` | None | Health check |
| POST | `/api/login` | None | JWT login (email-based, admin or user) |
| GET | `/api/config` | None | Get algorithm configuration (weights, seed) |
| GET | `/api/system-state` | None | Get current system state (DRAFT, RANKING_GENERATED, etc.) |
| POST | `/api/admin/process-participants` | Admin | Ingest master CSV, compute features, upsert participants |
| GET | `/api/me/ranking` | User | Get own ranking with skill/role breakdown |
| POST | `/api/admin/generate-ranking` | Admin | Generate participant rankings |
| POST | `/api/admin/confirm-ranking` | Admin | Confirm a ranking version |
| GET | `/api/admin/rankings` | Admin | List rankings (paginated) |
| GET | `/api/admin/ranking-versions` | Admin | List ranking versions |
| POST | `/api/admin/generate-team` | Admin | Generate teams via optimizer |
| GET | `/api/me/team` | User | Get own team (requires PAID payment + all qualified paid) |
| GET | `/api/admin/team-versions` | Admin | List team versions |
| GET | `/api/admin/team-versions/{id}` | Admin | Get team version detail |
| GET | `/api/me/payment` | User | Get own payment |
| POST | `/api/me/submit-payment` | User | Submit payment proof |
| GET | `/api/admin/payments` | Admin | List all payments |
| POST | `/api/admin/verify-payment` | Admin | Verify payment |
| DELETE | `/api/admin/payments/{id}` | Admin | Delete payment (revokes team access) |
| GET | `/api/admin/audit-log` | Admin | Get audit log |
| GET | `/api/admin/dashboard` | Admin | Dashboard statistics |

## Testing Evidence (VERIFIED)

**Location:** `backend/tests/`
**Test files:**
- `test_auth.py` — Authentication tests
- `test_fairness.py` — Fairness calculation tests
- `test_participant_selection.py` — Participant subset selection tests
- `test_payment_workflow.py` — Payment verification workflow tests
- `test_ranking_workflow.py` — Ranking generation tests
- `test_role_flexibility.py` — Role flexibility score tests
- `test_scoring.py` — Skill score calculation tests
- `test_team_formation.py` — Team generation tests
- `test_team_workflow.py` — Team workflow tests

**Command:** `pytest tests/ -v`
**Reported result:** 67 tests passing (VERIFIED in README)

## Security Analysis

- **Authentication:** JWT-based, email-only login. Admin emails configurable via `ADMIN_EMAILS` env var.
- **Authorization:** Role-based (admin vs user) enforced via `x_user_token` header and `_require_admin()` / `_require_user()` dependencies.
- **CORS:** Configured via `CORS_ORIGINS` setting.
- **Payment:** File upload to Vercel Blob (`BLOB_READ_WRITE_TOKEN`), admin verification required before team access.
- **Rate limiting:** None implemented (noted limitation).
- **Input validation:** Pydantic schemas + CSV validation.

## Personal Contribution Analysis

| Category | Assessment | Evidence |
|----------|-----------|----------|
| Verified personal contribution | Backend architecture, algorithm design, API endpoints, database schema, optimization logic | Author of repository; NIM 103012300477 referenced in related group projects |
| Documented team contribution | Not applicable (solo/individual project per README context) | — |
| Shared implementation | Not applicable | — |
| Unverified responsibility | Frontend implementation details | Frontend source exists but not fully traced |

## Interview Preparation — Key Talking Points

1. **Skill score formula:** Can explain the 40/20/25/15 weighting and why current rank is weighted highest.
2. **Fairness formula:** Can explain 40/20/40 split across role/rank/skill balance.
3. **Algorithm approach:** Randomized heuristic with local search, not brute force (combinations would be O(n!)). Justifiable for competition-scale participant counts.
4. **Participant selection:** Lane-diversity-first greedy selection when count isn't divisible by 5.
5. **Reproducibility:** Seeded RNG (default 42) ensures same results given same inputs.
6. **Hard constraint:** All 5 lanes must be covered per team; invalid candidates are rejected.
7. **Payment gating:** Team access requires all qualified participants to have PAID status.
8. **Version history:** Each team generation creates a new version with full fairness breakdown stored as JSON.
