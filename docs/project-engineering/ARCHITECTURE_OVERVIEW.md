# Architecture Overview

**Confidence:** VERIFIED

## Cross-Project Architectural Patterns

### 1. Layered Architecture (All 9 Projects)

```
Presentation Layer (Frontend)
    ↓ HTTP/REST
Application Layer (Backend API)
    ↓ Business Logic
Domain Layer (Services / Models)
    ↓ Data Access
Infrastructure Layer (Database / External APIs)
```

**Evidence:**
- Project 01: Next.js frontend → FastAPI → SQLAlchemy → PostgreSQL
- Project 02: Blade/Flutter → Laravel controllers → Eloquent → MySQL
- Project 04/05: React → Spring controllers → Services/JPA → PostgreSQL
- Project 06: Next.js → Express routes → Services → SQLite
- Project 09: Vanilla JS → Django REST views → ORM → SQLite

### 2. Repository Pattern (Projects 01, 04, 05, 09)

Data access is abstracted behind repository classes:
- Project 01: `ParticipantRepository`, `PaymentRepository`, `TeamRepository`, `AuditRepository`
- Project 04: JPA repositories (`LeaveRequestRepository`)
- Project 05: Spring Data JPA repositories
- Project 09: Django model managers (implicit repository pattern)

### 3. Service Layer (Projects 01, 04, 05, 06, 09)

Business logic is encapsulated in service classes:
- Project 01: `TeamFormationService`, `PaymentService`, `RankingService`, `SystemStateService`
- Project 04: `LeaveRequestService`, `DebootLeaveWorkflowService`
- Project 05: Business services in `service/` package
- Project 06: `authService`, `checkoutService`, `keeperService`, `planService`, `subscriptionService`
- Project 09: Logic in Django views and models

### 4. Authentication Pattern (Projects 01, 02, 04, 05, 06, 09)

All backend projects use JWT-based stateless authentication:
- Project 01: JWT via `x_user_token` header, `create_access_token`/`decode_token`
- Project 02: Laravel Sanctum (`HasApiTokens`, `createToken`)
- Project 04: Spring Security + JWT
- Project 05: Spring Security + JWT
- Project 06: `jsonwebtoken` with 7-day expiry
- Project 09: Django session + token auth

### 5. Role-Based Access Control (Projects 01, 02, 04, 05, 06, 09)

| Project | Roles | Enforcement |
|---------|-------|-------------|
| 01 | admin, user | `_require_admin()`, `_require_user()` dependencies |
| 02 | super_admin, manager, employee | `CheckRole` middleware, `isSuperAdmin()`/`isManager()`/`isEmployee()` |
| 04 | EMPLOYEE, MANAGER, HR | Spring Security method security |
| 05 | MEMBER, LIBRARIAN, ADMIN | Spring Security role-based |
| 06 | merchant, subscriber | JWT with wallet address |
| 09 | user, admin | `is_admin` property, DRF permissions |

## Data Flow Patterns

### Synchronous Request-Response (All backend projects)
Client → API endpoint → Controller → Service → Repository → Database → Response

### Asynchronous Background Processing (Projects 01, 06, 08)
- Project 01: `asyncio.to_thread()` for CPU-intensive optimization
- Project 06: Keeper bot runs as separate process/cron
- Project 08: Background cache updater threads (daemon)

### Event-Driven / Workflow (Projects 04, 05)
- BPMN process instances with user tasks, service tasks, gateways
- State transitions tracked in Flowable ACT_* tables

## Database Patterns

| Pattern | Projects | Evidence |
|---------|----------|----------|
| Normalized schema | 01, 04, 05, 09 | Foreign keys, separate tables for entities |
| JSON string columns | 01 | `lane_capabilities`, `fairness_breakdown` stored as JSON text |
| Versioned entities | 01, 04, 05 | Ranking versions, team versions, BPMN history |
| Audit logging | 01, 04, 05 | `audit_logs` table, Flowable HistoryService |
| Soft state machine | 01, 04 | `status` column with enum-like values |

## Frontend Patterns

| Pattern | Projects | Evidence |
|---------|----------|----------|
| Server Components by default | 01, 03, 06 | Next.js App Router |
| Client components for interactivity | 01, 03, 06 | `"use client"` directive |
| Component composition | 03 | Sections (Hero, StatsBar, ServicesOverview, etc.) |
| State management | 01, 05 | React hooks (01), Zustand + TanStack Query (05) |
| Mobile sheet/navigation | 02 | Flutter Sheet widget, 6 screens |

## Deployment Architecture

| Project | Deployment | Evidence |
|---------|-----------|----------|
| 01 | Vercel (serverless) | `vercel.json`, `api/index.py` |
| 02 | Traditional server (Laravel) | `php artisan serve` |
| 03 | Vercel (static) | Next.js build |
| 04 | Traditional server | Spring Boot jar |
| 05 | Docker Compose | `docker-compose.yml` |
| 06 | Traditional server (Node) | `node src/server.js` |
| 07 | Jupyter Notebook (local) | Notebook file |
| 08 | Flask dev server | `python backend/app.py` |
| 09 | Django dev server | `python manage.py runserver` |
