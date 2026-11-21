# CV Optimization Recommendations

**Confidence:** VERIFIED (recommendations based on verified source code evidence)

## Project-by-Project Accuracy Assessment

### Project 01 — Fair Team Formation System
| Aspect | Status | Evidence |
|--------|--------|----------|
| Technical accuracy | VERIFIED | Algorithm formulas in source code |
| 67 tests passing | VERIFIED | README line 373 |
| Backend framework | VERIFIED | FastAPI (requirements.txt) |
| Frontend framework | VERIFIED | Next.js 14 (package.json) |
| Database | VERIFIED | PostgreSQL/SQLite (settings.py) |
| Solo vs group | VERIFIED | Solo project |

**Suggested CV bullet:** "Designed and implemented a fair team formation algorithm using weighted skill scoring (40/20/25/15) and multi-objective optimization with local search. Achieved 67 passing backend tests with seeded reproducibility."

### Project 02 — LeaveSphere
| Aspect | Status | Evidence |
|--------|--------|----------|
| Laravel 12 backend | VERIFIED | composer.json |
| Flutter mobile app | VERIFIED | pubspec.yaml, lib/ |
| Sanctum auth | VERIFIED | routes/api.php |
| AI features implemented | NOT VERIFIED | README: "UI statis, perlu logic backend" |
| 150 dummy users | VERIFIED | README seeder info |
| Group project (7 members) | VERIFIED | README team table |

**IMPORTANT:** Do not claim AI features as implemented. They are designed/UI-only.

**Suggested CV bullet:** "Developed full-stack leave management system with Laravel 12 web admin panel and Flutter mobile app. Implemented Sanctum-authenticated REST API, role-based access control (super_admin/manager/employee), leave balance validation, and 25-day request limit."

### Project 03 — Exit Apparel
| Aspect | Status | Evidence |
|--------|--------|----------|
| Next.js 16, React 19 | VERIFIED | package.json |
| Tailwind CSS 4 | VERIFIED | package.json, postcss config |
| Framer Motion | VERIFIED | package.json, components |
| Price estimator | VERIFIED | app/estimator/page.tsx (client-side calculation) |
| WhatsApp integration | VERIFIED | wa.me links in estimator |
| Backend/database | NONE | Frontend-only, no backend |

**Suggested CV bullet:** "Built corporate website with Next.js 16 and React 19 featuring a client-side price estimator supporting 7 product types with material selection, add-ons, quantity-based pricing, and WhatsApp order integration."

### Project 04 — Leave Workflow Engine
| Aspect | Status | Evidence |
|--------|--------|----------|
| 3 workflow approaches | VERIFIED | README comparison |
| Spring Boot 3.2 | VERIFIED | README tech stack |
| Flowable 6.8.0 | VERIFIED | README + BPMN file |
| BPMN 2.0 | VERIFIED | workflowPengajuanCuti-2.bpmn |
| Performance benchmarks | NOT FOUND | README explicitly states none exist |
| Solo vs intern | VERIFIED | README: "Backend Developer Intern — PT. Len Industri" |

**IMPORTANT:** Do not declare one workflow approach superior without benchmarks.

**Suggested CV bullet:** "Compared three workflow implementation approaches (manual state machine, Flowable BPMN 2.0, service-based Deboot) for employee leave management using Spring Boot 3.2, React, and PostgreSQL. Documented LOC, maintainability, and scalability trade-offs."

### Project 05 — Library Workflow System
| Aspect | Status | Evidence |
|--------|--------|----------|
| Flowable 7 | VERIFIED | README |
| Spring Boot 3.2 | VERIFIED | README |
| Java 17 | VERIFIED | README |
| BPMN workflows | VERIFIED | README (loan/return processes) |
| Docker Compose | VERIFIED | docker-compose.yml |
| React 18 frontend | VERIFIED | README |

**Suggested CV bullet:** "Built library management system with Flowable 7 BPMN workflow engine orchestrating book-loan and book-return processes. Implemented timer-based overdue reminders, Spring Security + JWT auth, and React 18 frontend with Ant Design."

### Project 06 — BaseStack
| Aspect | Status | Evidence |
|--------|--------|----------|
| Express.js backend | VERIFIED | package.json |
| ethers.js v6 | VERIFIED | package.json, src/utils/contract.js |
| Base Sepolia | VERIFIED | config (RPC_URL) |
| IDRX/USDC/USDT | VERIFIED | config tokens |
| Keeper bot | VERIFIED | src/keeper.js, src/services/keeperService.js |
| Smart contract dev | NOT CLAIMED | No Solidity files; ABI only |
| Frontend contribution | VERIFIED | README (documented focus) |

**IMPORTANT:** Do not claim Solidity smart contract development.

**Suggested CV bullet:** "Built Web3 subscription payment gateway on Base Network using Express.js, ethers.js, and SQLite. Implemented wallet-signature authentication → JWT, on-chain transaction verification, and keeper bot for automated recurring billing."

### Project 07 — Air Quality ML
| Aspect | Status | Evidence |
|--------|--------|----------|
| 5 ML classifiers | VERIFIED | notebook imports |
| Synthetic data (10K) | VERIFIED | notebook code |
| Kaggle Beijing option | VERIFIED | notebook code |
| Group project (4 members) | VERIFIED | notebook header |
| Model results | NOT VERIFIED | Notebook not executed |

**IMPORTANT:** Do not state specific accuracy/precision/recall numbers.

**Suggested CV bullet:** "Implemented machine learning classification pipeline comparing 5 algorithms (Decision Tree, KNN, Logistic Regression, Naive Bayes, Genetic Algorithm) for air quality prediction using Pandas, Scikit-learn, and Jupyter Notebook."

### Project 08 — Earthquake Monitoring
| Aspect | Status | Evidence |
|--------|--------|----------|
| Flask backend | VERIFIED | app.py |
| USGS API | VERIFIED | app.py |
| Iterative vs recursive | VERIFIED | app.py + DOCUMENTATION.md |
| Stack overflow at n>1200 | VERIFIED | DOCUMENTATION.md |
| gzip caching | VERIFIED | app.py |
| Group project (2 members) | VERIFIED | DOCUMENTATION.md |

**Suggested CV bullet:** "Built earthquake monitoring web app comparing iterative (O(n) time, O(1) space) vs recursive (O(n) time, O(n) space) algorithms with USGS API integration, gzip-cached data, and Chart.js performance visualization."

### Project 09 — InvManage
| Aspect | Status | Evidence |
|--------|--------|----------|
| Django REST Framework | VERIFIED | api/views.py, urls.py |
| 10,892 records | VERIFIED | README data statistics |
| 5-table schema | VERIFIED | api/models.py |
| Rate limiting | VERIFIED | DRF throttling classes |
| Pagination | VERIFIED | StandardResultsSetPagination |
| Loan state machine | VERIFIED | Peminjaman model (5 statuses) |

**Suggested CV bullet:** "Developed inventory management system with Django REST Framework handling 10,892 records across 5 tables. Implemented loan state machine (5 statuses), rate limiting, pagination, and 8 reporting endpoints."

---

## Recommended CV Project Descriptions (Concise)

### For Software Engineer Applications

**Fair Team Formation System** — Python, FastAPI, Next.js 14, PostgreSQL
Designed and implemented a team-formation algorithm using weighted skill scoring and multi-objective optimization with local search. Built REST API with JWT authentication, payment gating, and audit logging. Achieved 67 passing backend tests.

**Exit Apparel** — Next.js 16, React 19, Tailwind CSS 4
Built corporate website with client-side price estimator supporting 7 product types, material selection, add-ons, and WhatsApp order integration. Used Framer Motion for animations and next/font for self-hosted Google Fonts.

**InvManage** — Django REST Framework, Python, vanilla JavaScript
Developed inventory management system with REST API, role-based access (user/admin), loan state machine (5 statuses), rate limiting, pagination, and reporting for 10,892 records.

### For Backend Engineer Applications

**Fair Team Formation System** — Python, FastAPI, SQLAlchemy, PostgreSQL
Designed REST API with 15+ endpoints, JWT authentication, role-based access, and database schema with 7 tables. Implemented optimization algorithm with seeded reproducibility and 67 passing tests.

**LeaveSphere** — PHP, Laravel 12, MySQL, Flutter
Built Laravel 12 backend with Sanctun token authentication, REST API for mobile app, leave balance validation, and 25-day request limit. Database schema with 10 tables.

**Leave Workflow Engine** — Java, Spring Boot 3.2, Flowable, PostgreSQL
Compared three workflow approaches: manual state machine, Flowable BPMN 2.0, and service-based Deboot. Implemented Spring Security + JWT, Spring Data JPA, and REST API endpoints.

### For Full-Stack Developer Applications

**Fair Team Formation System** — Python/FastAPI + Next.js 14
Full-stack competition platform with FastAPI backend and Next.js 14 frontend. JWT auth, payment gating, admin dashboard, and team version history.

**LeaveSphere** — Laravel 12 + Flutter
Full-stack system with Laravel web admin panel and Flutter mobile app connected via Sanctum-authenticated REST API.

**InvManage** — Django REST + vanilla JavaScript
Full-stack inventory system with Django REST backend and vanilla JavaScript frontend. 10,892 records, reporting endpoints, and rate limiting.

### For Enterprise Application Developer Applications

**Leave Workflow Engine** — Spring Boot, Flowable BPMN, React
Implemented three workflow approaches with BPMN 2.0 process definitions, exclusive gateways, user tasks, and Spring Security + JWT authorization.

**Library Workflow System** — Spring Boot 3.2, Flowable 7, React
Built library system with BPMN workflows for book loans and returns, timer-based overdue reminders, role-based access (MEMBER/LIBRARIAN/ADMIN), and Docker Compose deployment.

**LeaveSphere** — Laravel 12, Flutter, Sanctum
Enterprise HR system with RBAC (super_admin/manager/employee), leave approval workflows, delegation management, SLA monitoring, and mobile app.

### For Machine Learning Engineer Applications

**Air Quality Analysis** — Python, Scikit-learn, Pandas, Jupyter
Implemented ML classification pipeline comparing 5 algorithms for air quality prediction. Preprocessing with StandardScaler, LabelEncoder, train/test split. Evaluation with accuracy, precision, recall, F1-score, confusion matrix.

**Earthquake Monitoring** — Python, Flask, Chart.js
Built data analysis pipeline comparing algorithm complexity with real-time USGS API data. Execution time measurement, caching, and performance visualization.

---

## ATS Keyword Recommendations

Include these keywords based on verified project evidence:

**Languages:** Python, Java, JavaScript, TypeScript, PHP, Dart, SQL

**Frameworks & Libraries:** FastAPI, Laravel, Spring Boot, Express.js, Django REST Framework, Next.js, React, Flutter, Tailwind CSS, Framer Motion, Scikit-learn, Pandas, NumPy, ethers.js

**Databases:** PostgreSQL, SQLite, MySQL

**Tools & Platforms:** Git, GitHub, Docker, Vercel, JWT, REST API, BPMN, Flowable, Jupyter Notebook, Chart.js

**Concepts:** Algorithm optimization, workflow engine, RBAC, authentication, API design, database design, testing (pytest), machine learning, Web3, caching, rate limiting

---

## What NOT to Claim (Unsupported by Evidence)

1. **AI features in LeaveSphere** — documented as "UI statis, perlu logic backend" (not implemented)
2. **Solidity smart contract development in BaseStack** — no Solidity files; only ABI and ethers.js interaction
3. **Specific ML accuracy numbers** — notebook not executed; no results verified
4. **Performance benchmarks in Leave Workflow Engine** — README explicitly states none exist
5. **Solo authorship of group projects** — Projects 02, 05, 07, 08 are group projects
6. **E2E testing** — no E2E tests found in any project
7. **Production deployment** — no deployment evidence beyond README documentation
