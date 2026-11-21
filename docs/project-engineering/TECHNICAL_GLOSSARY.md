# Technical Glossary

**Confidence:** VERIFIED

## Algorithms & Optimization

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| Heuristic optimization | Problem-solving approach that finds good-enough solutions quickly, not guaranteed optimal | Project 01 `TeamOptimizer` — randomized candidate generation + local search |
| Local search | Iterative improvement by making small changes (swaps) to current solution | Project 01 `_local_search_multi_objective()` — swaps players between teams |
| Seeded RNG | Random number generator initialized with a fixed seed for reproducibility | Project 01 `random.Random(seed)` default seed 42 |
| Greedy selection | Algorithm that makes locally optimal choice at each step | Project 01 `ParticipantSelector._select_with_lane_diversity()` |
| Snake draft | Drafting order that reverses each round (1-2-3-3-2-1) | Project 01 `_role_aware_snake_draft()` |
| Iterative algorithm | Loop-based processing with O(1) space | Project 08 `analyze_earthquakes_iterative()` |
| Recursive algorithm | Function calling itself with O(n) stack space | Project 08 `analyze_earthquakes_recursive()` |
| Stack overflow | Runtime error when call stack exceeds limit | Project 08: recursive fails at n > 1,200 |
| Genetic Algorithm | Optimization inspired by natural selection | Project 07: one of 5 classifiers |

## Authentication & Security

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| JWT | JSON Web Token — stateless authentication token | Projects 01, 02, 04, 05, 06, 09 |
| Sanctum | Laravel's SPA/API token authentication | Project 02 `laravel/sanctum: ^4.3` |
| Wallet signature | Cryptographic proof of wallet ownership via message signing | Project 06 `ethers.verifyMessage()` |
| RBAC | Role-Based Access Control — permissions by role | Projects 01, 02, 04, 05, 06, 09 |
| CORS | Cross-Origin Resource Sharing — browser security | Projects 01, 02, 06, 08 |
| CSP | Content Security Policy — XSS mitigation | Project 08 `backend/app.py` after_request |
| Rate limiting | Restricting request frequency per client | Project 08 (Flask-Limiter), Project 09 (DRF throttling) |

## Database

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| ORM | Object-Relational Mapping — database access via objects | Project 01 (SQLAlchemy), 02 (Eloquent), 04/05 (JPA), 09 (Django ORM) |
| Migration | Version-controlled database schema changes | Project 02 (Laravel migrations), 05 (Flyway), 09 (Django migrations) |
| CheckConstraint | Database-level constraint enforcing conditions | Project 09 `api/models.py` |
| Index | Database structure for faster lookups | Project 09 explicit indexes, Project 01 indexed columns |
| Foreign Key | Referential integrity between tables | Projects 01, 04, 05, 09 |
| ACT_* tables | Flowable's internal runtime/history tables | Projects 04, 05 |

## Workflow / BPMN

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| BPMN 2.0 | Business Process Model and Notation standard | Projects 04, 05 |
| Process Definition | Template for a workflow process | Project 04 `leaveApproval`, Project 05 loan/return processes |
| Process Instance | Single execution of a process definition | Projects 04, 05 |
| User Task | Task requiring human interaction | Projects 04, 05 (manager/HR approval, librarian approval) |
| Service Task | Automated task executed by system | Projects 04, 05 (Java Delegates) |
| Exclusive Gateway | Decision point with one outgoing path | Projects 04, 05 (approve/reject decisions) |
| Timer Event | Time-triggered process event | Project 05 (overdue reminders) |
| HistoryService | Flowable service for querying process history | Projects 04, 05 |
| RuntimeService | Flowable service for managing running processes | Projects 04, 05 |
| TaskService | Flowable service for managing user tasks | Projects 04, 05 |

## Machine Learning

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| Classification | Supervised learning — predict discrete classes | Project 07 (air quality: Baik/Sedang/Tidak Sehat) |
| Train/Test Split | Dividing data into training and evaluation sets | Project 07 `train_test_split` |
| Label Encoding | Converting categorical labels to numbers | Project 07 `LabelEncoder` |
| StandardScaler | Feature scaling to zero mean, unit variance | Project 07 `StandardScaler` |
| Confusion Matrix | Table of predicted vs actual class counts | Project 07 `confusion_matrix` |
| F1-Score | Harmonic mean of precision and recall | Project 07 `f1_score` |
| Permutation Importance | Feature importance via feature shuffling | Project 07 `permutation_importance` |

## Web3 / Blockchain

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| ethers.js | Ethereum JavaScript library | Project 06 `ethers: ^6.9.0` |
| Base Network | Ethereum Layer 2 network | Project 06 (Sepolia testnet) |
| RPC URL | Remote Procedure Call endpoint for blockchain | Project 06 `RPC_URL=https://sepolia.base.org` |
| Contract Address | Deployed smart contract address | Project 06 `CONTRACT_ADDRESS` env var |
| Keeper Bot | Automated background process for recurring tasks | Project 06 `src/keeper.js` |
| On-chain Verification | Confirming transaction execution on blockchain | Project 06 `verifySubscriptionTx()` |

## Testing

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| Unit Test | Test of individual function/class | Project 01 `test_scoring.py`, `test_fairness.py` |
| Integration Test | Test of multiple components together | Project 01 `test_payment_workflow.py`, `test_team_workflow.py` |
| Fixture | Test data/setup fixture | Project 01 `conftest.py`, Project 02 seeders |
| Test Coverage | Percentage of code exercised by tests | Project 01: 67 tests, coverage areas documented |

## Deployment

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| Serverless | Cloud execution without managing servers | Project 01 (Vercel) |
| Docker Compose | Multi-container orchestration | Project 05 `docker-compose.yml` |
| Environment Variables | Configuration outside code | All projects (`.env`, `.env.example`) |
| CI/CD | Continuous Integration/Continuous Deployment | Project 01 (GitHub Actions per README) |

## Other

| Term | Definition | Project Evidence |
|------|-----------|------------------|
| Monorepo | Single repository with multiple projects | Project 02 (web + mobile), Project 09 (backend + frontend) |
| DTO | Data Transfer Object — data structure for API | Project 01 `schemas/schemas.py` (Pydantic models) |
| Middleware | Request/response processing pipeline | Project 01 timing middleware, Project 02 Laravel middleware |
| Idempotency | Operation produces same result regardless of repeat count | Project 01 idempotent CSV processing |
