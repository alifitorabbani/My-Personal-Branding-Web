# Project Comparison

**Confidence:** VERIFIED (comparison based on verified source code and documentation)

## Multi-Dimensional Comparison

| Dimension | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 | 09 |
|-----------|----|----|----|----|----|----|----|----|----|
| Primary Domain | Algorithm / Competition | HR / Enterprise | E-commerce / Corporate | Enterprise Workflow | Library / BPMN | Web3 / Fintech | ML / Data Science | Algorithm / Data | Inventory / ERP |
| Backend Language | Python | PHP | None | Java | Java | JavaScript | Python | Python | Python |
| Backend Framework | FastAPI | Laravel 12 | — | Spring Boot 3.2 | Spring Boot 3.2 | Express.js | — | Flask | Django REST |
| Frontend | Next.js 14 | Blade + Flutter | Next.js 16 | React 18 | React 18 | Next.js | — | Vanilla JS | Vanilla JS |
| Mobile | — | Flutter | — | — | — | — | — | — | — |
| Database | PostgreSQL/SQLite | MySQL/SQLite | None | PostgreSQL | PostgreSQL | SQLite | None | None (cache) | SQLite/PostgreSQL |
| Workflow Engine | Custom | None | None | Flowable 6.8 | Flowable 7 | None | None | None | None |
| Auth | JWT | Sanctum | None | Spring Security + JWT | Spring Security + JWT | JWT | None | None | Django auth |
| Testing | pytest (67) | PHPUnit (configured) | None | None | None | Node test | None | None | None |
| Deployment | Vercel | Traditional | Vercel | Traditional | Docker | Traditional | Jupyter | Flask dev | Django dev |
| Group/Solo | Solo | Group (7 members) | Solo | Solo/Intern | Group | Solo/Hackathon | Group (4 members) | Group (2 members) | Solo |

## Technical Complexity Assessment

| Project | Algorithmic | Architectural | Business Process | Data | Integration |
|---------|-------------|---------------|------------------|------|-------------|
| 01 | High | Medium | Medium | Medium | Low |
| 02 | Low | Medium | High | Medium | Medium |
| 03 | Low | Low | Low | None | Low |
| 04 | Medium | High | High | Medium | Low |
| 05 | Medium | High | High | High | Low |
| 06 | Low | Medium | Medium | Low | High (blockchain) |
| 07 | Medium | Low | Low | Medium | Low |
| 08 | Medium | Low | Low | Medium | Medium (USGS API) |
| 09 | Low | Medium | Medium | High | Low |

## Testing Maturity

| Project | Test Framework | Test Count | Coverage Areas |
|---------|---------------|------------|----------------|
| 01 | pytest | 67 passing | Auth, fairness, selection, payment, ranking, team workflows |
| 02 | PHPUnit | Configured, no files | None found |
| 03 | None | 0 | None |
| 04 | None documented | 0 | None |
| 05 | None documented | 0 | None |
| 06 | Node test | Unknown | api-test.js |
| 07 | None | 0 | Notebook cells only |
| 08 | None | 0 | Manual verification |
| 09 | None | 0 | None |

**Project 01 has the most mature testing (67 verified passing tests).**

## Security Requirements

| Project | Auth | Authz | Validation | Rate Limit | Security Headers |
|---------|------|-------|------------|------------|------------------|
| 01 | JWT | Role-based | Pydantic | No | No |
| 02 | Sanctum | Role-based | Laravel | No | No |
| 03 | None | None | None | No | No |
| 04 | Spring Security | Role-based | Spring Validation | No | No |
| 05 | Spring Security | Role-based | Spring Validation | No | No |
| 06 | JWT | Wallet-based | Manual | No | No |
| 07 | None | None | None | No | No |
| 08 | None | None | Input validation | Flask-Limiter | Yes (CSP, HSTS, etc.) |
| 09 | Django | Role-based | DRF serializers | DRF throttling | No |

## Key Differentiators

**Project 01:** Custom optimization algorithm with fairness metrics, seeded reproducibility, payment gating
**Project 02:** Full-stack web + mobile, Sanctum API, AI features designed but not implemented
**Project 03:** Pure frontend, client-side pricing calculator, WhatsApp integration
**Project 04:** Three-way workflow comparison (manual vs Flowable vs Deboot), BPMN 2.0
**Project 05:** Flowable 7 BPMN, timer-based overdue reminders, Docker deployment
**Project 06:** Web3 wallet auth, on-chain tx verification, keeper bot for recurring billing
**Project 07:** 5 ML classifiers, Genetic Algorithm, synthetic + real data options
**Project 08:** Iterative vs recursive comparison with measured stack overflow limits
**Project 09:** 10,892 records, Django REST, pagination, throttling, reporting

## Career Positioning Relevance

| Role | Most Relevant Projects | Why |
|------|----------------------|-----|
| Software Engineer | 01, 03, 09 | Full-stack, end-to-end feature delivery |
| Backend Engineer | 01, 02, 04, 05, 06, 09 | Multiple backend frameworks, API design, auth |
| Full-Stack Developer | 01, 02, 09 | Frontend + backend in same project |
| Enterprise App Developer | 02, 04, 05 | RBAC, workflow, BPMN, audit trails |
| ML Engineer | 07 | Classification, preprocessing, evaluation |
| AI Engineer | 07 | ML pipeline, Genetic Algorithm |
