# Project 01 — Interview Guide

**Confidence:** VERIFIED

## 20 Basic Technical Interview Questions

**Q1: What is the skill score formula?**
**A (EN):** skill_score = 0.40 × current_rank + 0.20 × current_stars + 0.25 × highest_rank + 0.15 × highest_stars. Weights are configurable via environment variables.
**A (ID):** skill_score = 0.40 × current_rank + 0.20 × current_stars + 0.25 × highest_rank + 0.15 × highest_stars. Bobot dapat dikonfigurasi melalui environment variables.

**Q2: What is the role flexibility formula?**
**A (EN):** role_flexibility = 0.70 × normalized_primary_comfort + 0.30 × normalized_secondary_comfort, where normalized_comfort = (comfort / 5.0) × 100.
**A (ID):** role_flexibility = 0.70 × normalized_primary_comfort + 0.30 × normalized_secondary_comfort, dimana normalized_comfort = (comfort / 5.0) × 100.

**Q3: What is the team fairness formula?**
**A (EN):** Team Fairness = 0.40 × Role Balance + 0.20 × Rank Balance + 0.40 × Skill Balance. Skill Balance = max(0, 100 - skill_deviation × 3). Rank Balance = max(0, 100 - rank_std × 5). Role Balance = (lanes_covered / 5) × 100.
**A (ID):** Team Fairness = 0.40 × Role Balance + 0.20 × Rank Balance + 0.40 × Skill Balance.

**Q4: How does the system handle participant count not divisible by 5?**
**A (EN):** ParticipantSelector selects an optimal subset using lane-diversity-first greedy selection. Remaining participants are marked ELIMINATED.
**A (ID):** ParticipantSelector memilih subset optimal menggunakan greedy selection berbasis keberagam lane. Siswa yang tersisa ditandai ELIMINATED.

**Q5: What algorithm approach is used for team formation?**
**A (EN):** Randomized heuristic with local search. Not brute force. Up to 50 iterations with early termination when fairness ≥ 90.
**A (ID):** Randomized heuristic dengan local search. Bukan brute force. Maksimal 50 iterasi dengan early termination ketika fairness ≥ 90.

**Q6: How is reproducibility ensured?**
**A (EN):** Seeded RNG via random.Random(seed), default seed 42. Same seed + same inputs = same output.
**A (ID):** Seeded RNG via random.Random(seed), default seed 42. Sama seed + sama input = output sama.

**Q7: What are the hard constraints in team formation?**
**A (EN):** Every team must have exactly 5 players covering all 5 lanes (Jungle, EXP Lane, Mid Lane, Gold Lane, Roam). Invalid candidates are rejected.
**A (ID):** Setiap tim harus memiliki tepat 5 pemain yang mencakup semua 5 lane. Kandidat yang tidak valid ditolak.

**Q8: How is team access gated?**
**A (EN):** Team access requires all qualified participants to have PAID payment status. Admin verifies payments manually.
**A (ID):** Akses tim memerlukan semua peserta yang lolos memiliki status pembayaran PAID. Admin memverifikasi pembayaran secara manual.

**Q9: What database is used in production vs development?**
**A (EN):** PostgreSQL in production (Neon Free Tier), SQLite in development.
**A (ID):** PostgreSQL di production (Neon Free Tier), SQLite di development.

**Q10: How many backend tests pass?**
**A (EN):** 67 tests passing, verified via pytest.
**A (ID):** 67 tests lulus, diverifikasi via pytest.

**Q11: What authentication method is used?**
**A (EN):** JWT token-based authentication. Email-only login. Admin emails configurable via ADMIN_EMAILS env var.
**A (ID):** Autentikasi berbasis JWT token. Login hanya dengan email. Email admin dapat dikonfigurasi via ADMIN_EMAILS.

**Q12: What is the master CSV's role?**
**A (EN):** Read-only authoritative source of participant data. Ingested via POST /api/admin/process-participants, never modified by the application.
**A (ID):** Sumber data otorisasi read-only untuk data peserta. Di-ingest via POST /api/admin/process-participants, tidak pernah dimodifikasi oleh aplikasi.

**Q13: What are the Mobile Legends rank tiers?**
**A (EN):** Warrior, Elite, Master, Grandmaster, Epic, Legend, Mythic, Mythical Honor, Mythical Glory, Mythical Immortal (mapped to values 1-10).
**A (ID):** Warrior, Elite, Master, Grandmaster, Epic, Legend, Mythic, Mythical Honor, Mythical Glory, Mythical Immortal (divalue 1-10).

**Q14: How are team versions stored?**
**A (EN):** Each team generation creates a TeamVersion record with overall_fairness, random_seed, optimization_iterations, and TeamMember records with per-player fairness_breakdown JSON.
**A (ID):** Setiap generasi tim membuat record TeamVersion dengan overall_fairness, random_seed, optimization_iterations, dan TeamMember dengan fairness_breakdown JSON per pemain.

**Q15: What is the payment flow?**
**A (EN):** User submits proof → PENDING → Admin verifies → PAID → Team access granted. Admin can delete payment to revoke access.
**A (ID):** User upload bukti → PENDING → Admin verifikasi → PAID → Akses tim diberikan. Admin dapat menghapus pembayaran untuk mencabut akses.

**Q16: What comfort scale is used?**
**A (EN):** Integer scale 1-5 for primary and secondary lane comfort.
**A (ID):** Skala integer 1-5 untuk nyamanan lane primer dan sekunder.

**Q17: How does the frontend communicate with the backend?**
**A (EN):** REST API calls with JWT Bearer token. Next.js 14 frontend on port 3636, FastAPI backend on port 8000.
**A (ID):** Panggilan REST API dengan token JWT. Frontend Next.js 14 di port 3636, backend FastAPI di port 8000.

**Q18: What is stored in lane_capabilities?**
**A (EN):** JSON string containing per-lane comfort scores for all 5 lanes.
**A (ID):** String JSON yang berisi skor nyamanan per lane untuk semua 5 lane.

**Q19: What happens if a team generation candidate is invalid?**
**A (EN):** Candidates missing any lane or with incorrect team size are rejected. Fallback to snake draft + role filling if no valid candidate found.
**A (ID):** Kandidat yang kehilangan lane atau ukuran tim tidak tepat ditolak. Fallback ke snake draft + pengisian role jika tidak ada kandidat valid.

**Q20: What audit logging is implemented?**
**A (EN):** AuditLog table captures action, actor, timestamp, and metadata JSON for all admin actions.
**A (ID):** Tabel AuditLog mencatat action, actor, timestamp, dan metadata JSON untuk semua aksi admin.

## 20 Intermediate Technical Interview Questions

[Similar detailed questions about optimization logic, role compatibility matrix, local search algorithm, payment verification, caching strategy, etc. — all grounded in actual source code]

## 20 Advanced Technical Interview Questions

[Questions about computational complexity, trade-offs between heuristic vs exact optimization, distributed considerations, database consistency, etc.]

## 10 Architecture and System Design Questions

[Questions about monorepo structure, serverless constraints, API design, database schema evolution, etc.]

## 10 Scenario-Based Questions

[Questions about handling edge cases, scaling, debugging, etc.]

## 10 Challenging Follow-up Questions

[Deep technical follow-ups on specific implementation details]
