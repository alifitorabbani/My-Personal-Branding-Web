# Project 01 — API Documentation

**Confidence:** VERIFIED (`backend/app/main.py`, `backend/app/schemas/schemas.py`)

## Authentication

| Endpoint | Method | Auth | Request | Response | Purpose |
|----------|--------|------|---------|----------|---------|
| `/api/login` | POST | None | `{ email: string }` | `{ token, player_id, email, role, ... }` | JWT login; admin if email in ADMIN_EMAILS, else user |

## Participants

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/admin/process-participants` | POST | Admin | Ingest master CSV, compute features, upsert participants |
| `/api/me/ranking` | GET | User | Get own ranking with skill/role breakdown |

## Rankings

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/admin/generate-ranking` | POST | Admin | Generate participant rankings from processed participants |
| `/api/admin/confirm-ranking` | POST | Admin | Confirm a ranking version (qualified/eliminated status) |
| `/api/admin/rankings` | GET | Admin | List rankings (paginated) |
| `/api/admin/ranking-versions` | GET | Admin | List ranking versions |
| `/api/admin/ranking-versions/{version_id}` | GET | Admin | Get ranking version detail |

## Teams

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/admin/generate-team` | POST | Admin | Generate teams via TeamOptimizer |
| `/api/me/team` | GET | User | Get own team (requires PAID payment + all qualified paid) |
| `/api/admin/team-versions` | GET | Admin | List team versions |
| `/api/admin/team-versions/{version_id}` | GET | Admin | Get team version detail |

## Payments

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/me/payment` | GET | User | Get own payment |
| `/api/me/submit-payment` | POST | User | Submit payment proof (Vercel Blob) |
| `/api/me/payment-status` | GET | User | Get payment status summary |
| `/api/admin/payments` | GET | Admin | List all payments |
| `/api/admin/verify-payment` | POST | Admin | Verify payment (PENDING → PAID) |
| `/api/admin/payments/{payment_id}` | DELETE | Admin | Delete payment (revokes team access) |

## System

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/health` | GET | None | Health check |
| `/api/config` | GET | None | Get algorithm configuration |
| `/api/system-state` | GET | None | Get current system state |
| `/api/admin/audit-log` | GET | Admin | Get audit log |
| `/api/admin/dashboard` | GET | Admin | Dashboard statistics |

## Error Responses

- `400` — Bad request (validation failure)
- `401` — Unauthorized (missing/invalid token)
- `403` — Forbidden (insufficient role)
- `404` — Not found
- `500` — Internal server error (debug mode shows traceback)
