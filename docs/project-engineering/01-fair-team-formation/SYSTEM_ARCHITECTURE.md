# Project 01 — System Architecture

**Confidence:** VERIFIED

## High-Level Architecture

```
┌─────────────────┐     HTTPS/REST     ┌──────────────────┐
│   React Frontend│ ◄─────────────────► │  FastAPI Backend │
│   (Next.js 14)  │                     │  (Python 3.12)   │
│   Port: 3636    │                     │  Port: 8000      │
└─────────────────┘                     └──────────────────┘
                                         │
                                         │ SQLAlchemy (async)
                                         ▼
                              ┌──────────────────┐
                              │  PostgreSQL      │
                              │  / SQLite (dev)  │
                              └──────────────────┘
                                         │
                                         ▼
                              ┌──────────────────┐
                              │  Vercel Blob     │
                              │  (payment proofs)│
                              └──────────────────┘
```

## Component Communication

1. **Frontend → Backend:** REST API calls with JWT Bearer token in `Authorization` header (or `x_user_token` custom header)
2. **Backend → Database:** SQLAlchemy async ORM (asyncpg for PostgreSQL, aiosqlite for SQLite)
3. **Backend → Vercel Blob:** File upload for payment proofs
4. **Backend → Master CSV:** Read-only ingestion of participant data

## Frontend Architecture

- Next.js 14 App Router (`frontend/src/app/`)
- Client components for interactivity (LoginPage, PaymentPage, RankingsPage, ResultsPage, AdminDashboard)
- Shared components: Card, ErrorMessage, LoadingSpinner, NavButton, StatusBadge, UserRankingCard
- API layer: `frontend/src/lib/api.ts`
- Auth hooks: `frontend/src/lib/hooks/useAuth.ts`
- Constants: `frontend/src/lib/constants.ts`
- Types: `frontend/src/types/index.ts`

## Backend Architecture

- Entry: `backend/app/main.py` (FastAPI app with lifespan)
- API routes: Defined directly in main.py + tournament routers
- Dependency injection: `backend/app/api/deps.py` (get_db, get_current_user, create_access_token, decode_token)
- Services layer: `backend/app/services/` (TeamFormationService, PaymentService, RankingService, StorageService, SystemStateService)
- Repository layer: `backend/app/repositories/` (ParticipantRepository, PaymentRepository, RankingRepository, TeamRepository, SystemStateRepository, AuditRepository)
- Models: `backend/app/models/models.py` (SQLAlchemy declarative base)
- Schemas: `backend/app/schemas/schemas.py` (Pydantic v2)
- Optimization engine: `backend/app/optimization/` (TeamOptimizer, ParticipantSelector, scoring, engines, config, history)
- Config: `backend/app/config/settings.py` (Pydantic Settings)

## Data Flow

1. Admin uploads/processes master CSV → `POST /api/admin/process-participants`
2. CSV validated, features computed (skill score, role flexibility) → upserted to `participants` table
3. Admin generates rankings → `RankingService.generate_ranking()` → `ranking_versions` table
4. Admin confirms ranking → participants marked QUALIFIED or ELIMINATED
5. Admin generates teams → `TeamOptimizer.optimize()` → `team_versions` + `team_members` tables
6. Users submit payment → `POST /api/me/submit-payment` → `payments` table (PENDING)
7. Admin verifies payment → status → PAID
8. User views team → `GET /api/me/team` (requires all qualified participants PAID)
