# Project 01 — Business Requirements

**Confidence:** VERIFIED (source code + README)

## Business Problem

Mobile Legends competition organizers need a fair, transparent method to form 5-vs-5 teams from a pool of registered players. Manual team formation risks bias, skill imbalance, and lane conflicts. The system automates this with objective scoring and multi-objective fairness optimization.

## Functional Requirements (VERIFIED from implementation)

| ID | Requirement | Evidence |
|----|-----------|----------|
| FR-01 | User registration & JWT authentication | `POST /api/login`, `app/main.py` |
| FR-02 | CSV participant upload & validation | `POST /api/admin/process-participants` |
| FR-03 | Automatic rank & star normalization | `settings.py` weights, `_build_skill_breakdown()` |
| FR-04 | Player skill scoring with breakdown | `_build_skill_breakdown()` in `main.py` |
| FR-05 | Role capability & lane comfort calculation | `_build_role_breakdown()` in `main.py` |
| FR-06 | Optimal participant subset (multiples of 5) | `ParticipantSelector` in `participant_selector.py` |
| FR-07 | Randomized team formation with reproducibility | `TeamOptimizer.optimize()` with seeded RNG |
| FR-08 | Fairness calculation with transparent breakdown | `TeamFairnessEvaluator`, `_score_teams_multi_objective()` |
| FR-09 | Payment upload (E-Money Dana/Link) | `POST /api/me/submit-payment` |
| FR-10 | Team access gated by verified payment | `/api/me/team` checks `PAID` status |
| FR-11 | Hero-themed team names | `TEAM_NAMES` list in `team_optimizer.py` |
| FR-12 | Transparency panels (per-player score breakdown) | `_build_skill_breakdown`, `_build_role_breakdown` |
| FR-13 | Rankings page with full scoring breakdown | `GET /api/me/ranking` |
| FR-14 | Admin dashboard with statistics | `GET /api/admin/dashboard` |
| FR-15 | CSV participant processing (admin) | `POST /api/admin/process-participants` |
| FR-16 | Ranking generation & confirmation | `generate-ranking`, `confirm-ranking` |
| FR-17 | Team generation with fairness optimization | `POST /api/admin/generate-team` |
| FR-18 | Payment verification & deletion (admin) | `verify-payment`, `DELETE /api/admin/payments/{id}` |
| FR-19 | Audit log for admin actions | `AuditLog` model, `audit_repository.py` |
| FR-20 | Team version history with detail view | `TeamVersion`, `team-versions/{id}` |
| FR-21 | Manual payment status override | `POST /api/admin/verify-payment` |

## Non-Functional Requirements

| Requirement | Implementation |
|-------------|---------------|
| Performance | Optimization runs in background thread via `asyncio.to_thread()`; 500ms slow-request logging |
| Reproducibility | Seeded RNG (`random.Random(seed)`), default seed 42 |
| Scalability | Heuristic optimization (not brute force); Vercel serverless with 10s function timeout constraint |
| Auditability | `audit_logs` table captures all admin actions with timestamp and actor |
| Availability | Health check endpoint `/api/health` |

## User Roles

| Role | Capabilities |
|------|-------------|
| Admin | Process participants, generate/confirm rankings, generate teams, verify payments, view audit log, dashboard |
| User | Login, view own ranking, submit payment, view own team |

## Business Rules (VERIFIED)

1. **Team size:** Exactly 5 players per team (`team_size = 5` in `OptimizationConfig`)
2. **Lane coverage:** Every team must cover all 5 lanes (Jungle, EXP Lane, Mid Lane, Gold Lane, Roam)
3. **Payment gating:** All qualified participants must have PAID status before teams are visible to users
4. **Elimination:** Participants not selected (when count not divisible by 5) are marked ELIMINATED
5. **Admin emails:** Configurable via `ADMIN_EMAILS` environment variable
6. **Payment amount:** 20000 (IDR) via E-Money Dana/Link (configurable)

## Assumptions (INFERRED)

- Rank names follow Mobile Legends standard tier system (Warrior → Mythical Immortal)
- Comfort scale is 1-5 (integer)
- Master CSV is the authoritative, read-only source of participant data
- Payment verification is manual (admin reviews proof upload)
