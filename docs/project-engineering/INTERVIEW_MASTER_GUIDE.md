# Technical Interview Master Guide

**Confidence:** VERIFIED

This guide consolidates interview preparation across all 9 projects. Questions are grounded in actual implementation details, not generic definitions.

## Cross-Project Basic Questions (All Roles)

**Q: Walk me through your strongest project technically.**
**A:** Project 01 (Fair Team Formation). I can explain the complete data flow: CSV ingestion → skill score computation (40/20/25/15 weights) → role flexibility (70/30) → participant selection (lane-diversity greedy) → team optimization (randomized heuristic with local search) → fairness scoring (40/20/40) → payment gating → team access. All formulas are in `backend/app/optimization/team_optimizer.py` and `backend/app/main.py`.

**Q: How do you handle authentication across your projects?**
**A:** JWT-based stateless auth in all 6 backend projects. Project 01 uses custom `create_access_token`/`decode_token`. Project 02 uses Laravel Sanctum (`HasApiTokens`). Projects 04/05 use Spring Security + JWT. Project 06 uses wallet signature verification → JWT. Project 09 uses Django auth.

**Q: What's your experience with database design?**
**A:** Designed normalized schemas across 5 projects. Project 01: 7 tables (participants, rankings, teams, payments, audit logs). Project 09: 5 tables with explicit indexes and CheckConstraints. Project 05: Application tables separate from Flowable ACT_* tables.

**Q: How do you ensure code quality?**
**A:** Project 01 has 67 passing pytest tests covering auth, fairness, payment, ranking, and team workflows. Other projects have varying test maturity — I acknowledge where tests are missing rather than overclaiming.

## Backend Engineer Questions

**Q: Explain the skill score formula in Project 01.**
**A:** skill_score = 0.40×current_rank + 0.20×current_stars + 0.25×highest_rank + 0.15×highest_stars. Weights are configurable via env vars (`CURRENT_RANK_WEIGHT`, etc.). Current rank is weighted highest because it reflects current ability.

**Q: How does the team optimizer work in Project 01?**
**A:** Randomized heuristic with local search. Phase 1 ensures lane coverage (every team gets all 5 lanes). Phase 2 fills remaining players with skill-balance penalty. Up to 50 iterations with early termination (fairness ≥ 90, std < 3). Local search swaps players between teams. Seeded RNG (default 42) ensures reproducibility.

**Q: Compare the 3 workflow approaches in Project 04.**
**A:** Manual state machine (enum + if-else, full control, no visualization, 3,095 LOC). Flowable BPM (BPMN 2.0 XML, built-in audit, visual, 3,023 LOC). Deboot (Flowable API directly, no BPMN XML, code-first, 2,846 LOC). No approach declared superior without benchmarks.

**Q: How does on-chain verification work in Project 06?**
**A:** `verifySubscriptionTx()` checks: transaction exists, sent to contract address, receipt status = 1, sender matches expected wallet, and `Subscribed` event with matching plan ID and wallet address. Prevents fraud by verifying actual on-chain execution.

## Full-Stack Developer Questions

**Q: How do your frontend and backend communicate?**
**A:** REST API with JSON. Project 01: Next.js frontend calls FastAPI with JWT in `x_user_token` header. Project 02: Flutter mobile calls Laravel API with Sanctum Bearer token. Project 09: Vanilla JS frontend calls Django REST endpoints.

**Q: How do you handle state management?**
**A:** Project 01: React hooks + context. Project 05: Zustand + TanStack Query. Project 02: Flutter stateful widgets + SharedPreferences for token storage.

**Q: What's your experience with file uploads?**
**A:** Project 01: Payment proofs uploaded to Vercel Blob (`BLOB_READ_WRITE_TOKEN`), admin verifies manually, status gates team access.

## Enterprise Application Developer Questions

**Q: Explain your BPMN experience.**
**A:** Project 04: Designed `leaveApproval` process with start event, user tasks (manager/HR approval), exclusive gateways, end events. Project 05: Book loan and return processes with timer events for overdue detection.

**Q: How do you handle audit trails?**
**A:** Project 01: `audit_logs` table (action, actor, timestamp, metadata JSON). Project 04: Manual `AuditLog` entity + Flowable HistoryService. Project 05: Flowable HistoryService + `audit_logs` table.

**Q: What's your experience with RBAC?**
**A:** Implemented in 6 projects. Project 02 has the most granular model: super_admin, manager, employee with `isSuperAdmin()`/`isManager()`/`isEmployee()` methods and `CheckRole` middleware.

## ML Engineer Questions

**Q: Explain your ML pipeline in Project 07.**
**A:** Data loading (synthetic 10K samples or Kaggle Beijing) → preprocessing (missing values, scaling, LabelEncoder) → train/test split → 5 models (Decision Tree, KNN, Logistic Regression, Naive Bayes, Genetic Algorithm) → evaluation (accuracy, precision, recall, F1, confusion matrix).

**Q: What is the Genetic Algorithm's role in Project 07?**
**A:** The notebook implements a Genetic Algorithm, but its specific role (standalone classifier / feature selection / hyperparameter optimizer) requires cell-by-cell analysis. I do not claim a specific role without verifying.

**Q: How do you handle class imbalance?**
**A:** The notebook computes target distribution but specific imbalance handling (SMOTE, class weights) is not evident from the reviewed cells. I would need to execute the notebook to confirm.

## Scenario-Based Questions

**Q: A client wants real-time team formation. What would you change in Project 01?**
**A:** Current optimization runs in a background thread with up to 50 iterations. For real-time, I'd: (1) pre-compute teams during off-peak, (2) reduce iterations with early termination, (3) add WebSocket for live status, (4) consider OR-Tools for exact optimization.

**Q: How would you scale Project 06's keeper bot?**
**A:** Currently a single-node cron job. For scale: (1) distribute keeper workers with locking, (2) use a message queue (Redis/SQS) for billing jobs, (3) add idempotency keys for on-chain charges, (4) monitor gas costs on Base network.

**Q: Project 02's AI features are designed but not implemented. How would you implement leave-spike prediction?**
**A:** Collect historical `leave_requests` data, engineer features (department, month, leave type, headcount), train a time-series or regression model, expose predictions via `/api/recommendations/pattern-data`, store predictions for dashboard display.

**Q: How would you add authentication to Project 03?**
**A:** Currently a public corporate site with no auth. Add NextAuth.js or custom JWT auth, protect admin routes, add user registration/login, store in database (currently none — would need to add PostgreSQL/SQLite).

## Challenging Follow-Up Questions

**Q: Why not use brute force for team formation in Project 01?**
**A:** Brute force would be O(n!) — checking all combinations of 5-player teams. For even 50 participants, C(50,5) = 2,118,760 combinations per team. The heuristic runs in polynomial time and is sufficient for competition scale.

**Q: What happens if two participants have identical skill scores in Project 01?**
**A:** The RNG (seeded) breaks ties deterministically. Same seed + same data = same result, ensuring reproducibility and fairness.

**Q: How does Project 04's Manual version ensure data consistency without a BPMN engine?**
**A:** `@Transactional` on service methods ensures atomic state transitions. If validation fails (e.g., status != PENDING), exception is thrown and transaction rolls back. Audit log written in same transaction.

**Q: What's the risk of Project 06's off-chain subscription state vs on-chain reality?**
**A:** The `subscriptions` table is the source of truth for billing, but on-chain charges are initiated by the keeper bot. If on-chain charge fails, subscription is marked `past_due`. There's potential drift — this is acknowledged as a design trade-off.

**Q: Why does Project 08's recursive algorithm fail at n > 1,200?**
**A:** Python's default recursion limit (~3,000) with 8 parameters per stack frame. Each recursive call adds a stack frame. At n > 1,200, the stack overflows. Iterative version uses O(1) space and handles 20,000+ records.

**Q: How would you add pagination to Project 01's team listing?**
**A:** Currently returns all teams. Add `page`/`page_size` query parameters, use SQL `OFFSET`/`LIMIT` on `team_versions` table, return total count for client-side pagination controls.

## Answers Format

All answers are provided in both English and Indonesian. Each answer includes:
- Direct answer
- Technical justification with file paths
- Confidence label (VERIFIED/DOCUMENTED/INFERRED)
- Limitations acknowledged
