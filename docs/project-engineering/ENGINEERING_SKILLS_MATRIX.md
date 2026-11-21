# Engineering Skills Matrix

**Confidence:** VERIFIED (project evidence cited)

## Backend Engineering

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| REST API design | Advanced | 01 (FastAPI), 02 (Laravel), 04 (Spring), 05 (Spring), 06 (Express), 09 (Django REST) |
| Authentication (JWT) | Advanced | 01, 02, 04, 05, 06, 09 |
| Authorization (RBAC) | Advanced | 01 (admin/user), 02 (super_admin/manager/employee), 04 (EMPLOYEE/MANAGER/HR), 05 (MEMBER/LIBRARIAN/ADMIN), 09 (user/admin) |
| Database design | Advanced | 01 (PostgreSQL/SQLite), 04 (PostgreSQL), 05 (PostgreSQL), 06 (SQLite), 09 (SQLite/PostgreSQL) |
| ORM usage | Advanced | 01 (SQLAlchemy), 02 (Eloquent), 04 (Spring Data JPA), 05 (Spring Data JPA), 09 (Django ORM) |
| API validation | Intermediate | 01 (Pydantic), 02 (Laravel validation), 09 (DRF serializers) |
| Rate limiting | Basic | 01 (none), 02 (none), 06 (none), 08 (Flask-Limiter), 09 (DRF throttling) |
| Payment integration | Intermediate | 01 (E-Money, manual verify), 06 (Web3 on-chain) |

## Frontend Engineering

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| React / Next.js | Advanced | 01 (Next.js 14), 03 (Next.js 16, React 19), 04 (React 18), 05 (React 18), 06 (Next.js) |
| TypeScript | Advanced | 01, 03, 04, 05, 06 |
| State management | Intermediate | 05 (Zustand, TanStack Query), 01 (React hooks) |
| Styling (Tailwind CSS) | Advanced | 01, 03 (Tailwind CSS 4) |
| Animation (Framer Motion) | Intermediate | 01, 03 |
| Mobile (Flutter) | Intermediate | 02 |

## Full-Stack Engineering

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| End-to-end feature delivery | Advanced | 01 (FastAPI + Next.js), 09 (Django + vanilla JS), 02 (Laravel + Flutter) |
| API consumption | Advanced | 01, 02, 03, 04, 05, 06, 09 |
| File upload handling | Intermediate | 01 (payment proofs via Vercel Blob) |

## Mobile Development

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Flutter app development | Intermediate | 02 (LeaveSphere Mobile, 6 screens) |
| REST API consumption | Intermediate | 02 (api_service.dart with Sanctum tokens) |
| Local token storage | Intermediate | 02 (SharedPreferences) |

## Database Engineering

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Relational schema design | Advanced | 01, 04, 05, 09 |
| Indexing | Intermediate | 09 (explicit indexes on models) |
| Constraints | Intermediate | 09 (CheckConstraints), 01 (application-level) |
| Migrations | Intermediate | 02 (Laravel migrations), 05 (Flyway), 09 (Django migrations) |
| Large dataset handling | Intermediate | 09 (10,892 records), 08 (20,000 USGS records) |

## API Design

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| RESTful endpoints | Advanced | All 6 backend projects |
| Authentication middleware | Advanced | 01, 02, 04, 05, 06, 09 |
| Pagination | Intermediate | 09 (PageNumberPagination), 01 (page/page_size) |
| Error handling | Intermediate | All backend projects |
| Versioning | Basic | 01 (ranking/team versions), 05 (API versioning /v1/) |

## System Architecture

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Layered architecture | Advanced | All projects |
| Repository pattern | Intermediate | 01, 04, 05, 09 |
| Service layer | Intermediate | 01, 04, 05, 06, 09 |
| Monorepo | Intermediate | 02 (web + mobile), 09 (backend + frontend) |
| Serverless | Basic | 01 (Vercel) |

## Enterprise Workflow

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| BPMN 2.0 process design | Advanced | 04 (leaveApproval), 05 (loan/return workflows) |
| Flowable engine | Advanced | 04 (v6.8.0), 05 (v7.x) |
| Manual state machine | Advanced | 04 (enum + if-else) |
| Service-based workflow | Intermediate | 04 (Deboot approach) |
| Process instance lifecycle | Intermediate | 04, 05 |
| Audit trail | Intermediate | 01, 04, 05 |

## Algorithm Development

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Optimization heuristics | Advanced | 01 (TeamOptimizer with local search) |
| Scoring algorithms | Advanced | 01 (skill score, role flexibility, fairness) |
| Iterative vs recursive | Intermediate | 08 (measured comparison) |
| Complexity analysis | Intermediate | 08 (O(n) time, O(1) vs O(n) space) |
| Greedy selection | Intermediate | 01 (ParticipantSelector lane-diversity) |

## Machine Learning

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Classification | Intermediate | 07 (5 classifiers) |
| Data preprocessing | Intermediate | 07 (missing values, scaling, encoding) |
| Model evaluation | Intermediate | 07 (accuracy, precision, recall, F1, confusion matrix) |
| Train/test splitting | Intermediate | 07 |
| Feature engineering | Basic | 07 |

## Performance Engineering

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Caching | Intermediate | 01 (SimpleCache), 08 (gzip JSON cache + background updater), 09 (Django cache) |
| Background processing | Intermediate | 06 (keeper bot), 08 (background cache threads) |
| Query optimization | Basic | 09 (select_related/prefetch_related mentioned) |
| Benchmarking | Basic | 08 (execution time measurement) |

## Software Testing

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Unit testing | Intermediate | 01 (67 pytest tests), 06 (api-test.js) |
| Integration testing | Basic | 01 (workflow tests) |
| Test fixtures | Basic | 01 (conftest.py), 02 (seeders) |
| E2E testing | None | No E2E tests found |

## Security

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| JWT token management | Intermediate | 01, 02, 04, 05, 06, 09 |
| Password hashing | Intermediate | 02 (Laravel Hash), 09 (Django make_password) |
| Input validation | Intermediate | 01 (Pydantic), 02 (Laravel), 09 (DRF) |
| CORS configuration | Basic | 01, 02, 06, 08 |
| Security headers | Basic | 08 (CSP, HSTS, etc.) |
| Wallet signature verification | Intermediate | 06 (ethers.verifyMessage) |

## DevOps

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Docker | Intermediate | 05 (docker-compose.yml) |
| CI/CD | Basic | 01 (GitHub Actions per README), 02 (none), 06 (none) |
| Environment config | Intermediate | All projects (.env files) |
| Serverless deployment | Basic | 01 (Vercel) |

## Web3

| Capability | Level | Project Evidence |
|------------|-------|------------------|
| Wallet connection | Intermediate | 06 (signature-based auth) |
| On-chain transaction verification | Intermediate | 06 (verifySubscriptionTx) |
| Smart contract ABI interaction | Intermediate | 06 (ethers.Contract) |
| Base Network configuration | Intermediate | 06 (Sepolia RPC) |
| Solidity development | None | No evidence of Solidity contracts in repo |
