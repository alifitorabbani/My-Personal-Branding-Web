# Project 05 — Library Workflow System (BPMN-Based Management Platform)

**Repository:** `/Users/user/Documents/library-workflow-system/`
**Confidence:** VERIFIED

## Executive Summary

An enterprise-grade Library Management System built around Flowable 7 BPMN workflow engine. Features multi-step book-loan approvals, automated fine calculation for overdue returns, timer-based overdue reminders, and role-based access control (Member, Librarian, Admin). Java 17 + Spring Boot 3.2 backend, React 18 + TypeScript frontend, PostgreSQL database, Docker deployment.

**Period:** February 2026 – June 2026

## Technology Stack (VERIFIED from README)

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Java | 17 | Runtime |
| Spring Boot | 3.2.x | Application framework |
| Flowable | 7.x | BPMN workflow engine |
| Spring Security + JWT | — | Authentication & authorization |
| Spring Data JPA + Hibernate | — | ORM |
| PostgreSQL | 15 | Database |
| Flyway | — | Database migration |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Vite | — | Build tool |
| TanStack Query | — | Server state management |
| Ant Design | 5 | UI component library |
| Zustand | — | State management |
| React Router | v6 | Routing |

## Architecture (VERIFIED from README)

```
React Client (TypeScript) → Spring Boot (+ Flowable) → PostgreSQL
                                     ↓
                              BPMN Engine (Orchestration)
```

### Backend Structure (`backend/src/main/java/com/library/workflow/`)
- `config/` — Configuration classes
- `controller/` — REST controllers
- `delegate/` — Flowable Java Delegates
- `domain/` — JPA entities
- `repository/` — Data repositories
- `security/` — Security components
- `service/` — Business services
- `workflow/` — Workflow orchestration

### Backend Resources (`backend/src/main/resources/`)
- `processes/` — BPMN process definitions
- `db/migration/` — Flyway migrations
- `application.yml` — Configuration

## BPMN Workflows (VERIFIED from README)

### Book Loan Process
```
Start → Validate User → Check Stock → [Gateway]
                              ↓              ↓
                       Librarian Approval  Validation Failed
                              ↓
                       [Approval Gateway]
                       ↓              ↓
                    Approved       Rejected
                              ↓
                       Reduce Stock → Generate Code → Set Due Date → End
```

### Book Return Process
```
Start → Validate Loan → Calculate Fine → [Gateway]
                                           ↓                             ↓
                                     Is Late                        Not Late
                                         ↓                              │
                                    Create Fine                        │
                                         ↓                              │
                                         └───────────┬───────────────────┘
                                                     ↓
                                              Restore Stock → Close Loan → End
```

## API Endpoints (VERIFIED from README)

### Authentication
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /v1/auth/login | User login |
| POST | /v1/auth/register | User registration |
| POST | /v1/auth/refresh | Refresh token |
| GET | /v1/auth/me | Get current user |

### Workflow
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | /v1/workflow/loans/start | Start loan process |
| GET | /v1/workflow/tasks | Get pending tasks |
| POST | /v1/workflow/tasks/{id}/complete | Complete task |
| POST | /v1/workflow/returns/start | Start return process |

### Data
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /v1/books | List books |
| GET | /v1/loans | List loans |
| GET | /v1/audit | Audit trail (Admin only) |

## User Roles & Permissions (VERIFIED from README)

| Role | Permissions |
|------|-------------|
| MEMBER | Request loans, view own loans, return books |
| LIBRARIAN | All MEMBER + approve/reject loans, manage books |
| ADMIN | All LIBRARIAN + manage users, view audit trail |

### Default Credentials
- Admin: `admin` / `admin123`
- Librarian: `librarian` / `librarian123`

## Database Schema (VERIFIED from README)

### Core Tables
- `users` — User accounts
- `books` — Book catalog
- `categories` — Book categories
- `loans` — Loan records
- `fines` — Fine records
- `audit_logs` — Audit trail

Flowable automatically creates `ACT_*` tables (ACT_RE_PROCDEF, ACT_RU_TASK, ACT_HI_PROCINST, etc.).

## Deployment (VERIFIED from README)

- Docker Compose: `docker-compose up -d`
- Frontend: http://localhost:3333
- Backend: http://localhost:8888/api
- API Docs: http://localhost:8888/api/swagger-ui.html
- Railway config: `railway.json`
- ngrok config: `ngrok.yaml`

## Fine Calculation

Automated fine calculation for overdue returns implemented in Book Return Process BPMN. The exact formula is implemented in Flowable Java Delegates (specific formula not visible in README — classified as INFERRED from delegate pattern).

## Personal Contribution

Full-stack implementation: backend (Spring Boot + Flowable), frontend (React + TypeScript), BPMN process design, Docker configuration.

## Interview Preparation — Key Points

1. **Flowable integration:** BPMN XML processes deployed to engine, Java Delegates for service tasks, RuntimeService/TaskService/HistoryService usage
2. **BPMN vs application data:** Application entities (users, books, loans) separate from Flowable ACT_* tables; correlation via business key
3. **Timer events:** Overdue detection and reminders via Flowable timer events (async jobs)
4. **JWT auth:** Stateless token-based auth with role-based authorization
5. **Loan lifecycle:** Request → validate → approve → reduce stock → set due date → return → calculate fine → close
