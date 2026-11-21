# Project 06 — BaseStack (Web3 Subscription Payment Gateway)

**Repository:** `/Users/user/basestack/`
**Confidence:** VERIFIED

## Executive Summary

A Web3-based subscription payment gateway built on Base Network. Backend API (Express.js + SQLite3) handles merchant subscription plans, wallet-based payment interaction, and recurring billing via a keeper bot. Frontend (Next.js) provides merchant and subscriber interfaces. Supports IDRX, USDC, and USDT tokens. Smart contract interaction for on-chain subscription charging and verification.

**Period:** December 2025 – February 2026
**Organization:** Devfolio – Base Indonesia Hackathon 2026
**Contribution focus:** Frontend interfaces and user-facing subscription workflows

## Technology Stack (VERIFIED from package.json)

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | >=18 | Runtime |
| Express.js | 4.18.2 | Web framework |
| SQLite3 (better-sqlite3) | 9.6.0 | Database |
| ethers.js | 6.9.0 | Web3 / Ethereum interaction |
| JWT (jsonwebtoken) | 9.0.2 | Authentication |
| CORS | 2.8.5 | Cross-origin |

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js | Merchant/subscriber UI |
| Tailwind CSS | Styling |

## Architecture (VERIFIED from source)

```
Backend (Express.js, port 3000)
├── src/server.js          → Express app entry
├── src/routes/            → auth, plans, checkout, dashboard, subscriptions, merchant, prices
├── src/services/          → authService, checkoutService, keeperService, planService, priceService, subscriptionService
├── src/utils/             → contract (ethers), db (sqlite), response
├── src/config/            → env config (RPC, JWT, tokens)
├── src/keeper.js          → Auto-billing cron worker
└── db/                    → SQLite database + init script

Frontend (Next.js)
├── src/pages/             → Pages
├── src/components/        → React components
└── src/api.js             → API client
```

## Database Schema (VERIFIED from README)

| Table | Key Fields |
|-------|-----------|
| `merchants` | id, walletAddress (UNIQUE), name, createdAt |
| `plans` | id, merchantId, onchainPlanId, name, slug, description, billingInterval, priceIdrx, priceUsdc, priceUsdt, status |
| `subscribers` | id, walletAddress (UNIQUE), country, createdAt |
| `subscriptions` | id, subscriberId, planId, payToken, amount, nextPayment, status, createdAt, updatedAt |
| `billingLogs` | id, subscriptionId, txHash, status, reason, createdAt |

## API Endpoints (VERIFIED from README)

### Authentication
| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| GET | /api/auth/message | None | Get message for wallet signature |
| POST | /api/auth/connect-wallet | None | Wallet signature auth → JWT |

### Plans (Requires Auth)
| Method | Endpoint | Purpose |
|--------|----------|-------|
| POST | /api/plans | Create subscription plan |
| GET | /api/plans | List merchant's plans |

### Dashboard (Requires Auth)
| Method | Endpoint | Purpose |
|--------|----------|-------|
| GET | /api/dashboard/metrics | Merchant metrics (activeCount, pastDueCount, MRR, totalSubscribers) |

### Checkout (Public)
| Method | Endpoint | Purpose |
|--------|----------|-------|
| GET | /api/checkout/:planSlug | Get plan details |
| POST | /api/checkout/:planId/init | Initialize checkout (get payment info) |
| POST | /api/checkout/:planId/confirm | Confirm checkout (verify on-chain tx) |

### Subscription Management (Public)
| Method | Endpoint | Purpose |
|--------|----------|-------|
| GET | /api/me/subscriptions?walletAddress= | List subscriptions for wallet |
| POST | /api/me/subscriptions/:id/cancel | Cancel subscription |

## Smart Contract (VERIFIED from `src/utils/contract.js`)

**Minimal ABI:**
- `chargeSubscription(address user, uint256 planId) external returns (bool)`
- `subscribe(uint256 planId, address token) external returns (bool)`
- Events: `SubscriptionCharged`, `Subscribed`

**Network:** Base Sepolia (`RPC_URL=https://sepolia.base.org`)
**Tokens:** IDRX, USDC, USDT (contract addresses in env)

**Important:** Smart contract address and ABI are configured but the contract itself is not part of this repository. No evidence that the user personally developed Solidity smart contracts.

## Keeper Bot (VERIFIED from `src/services/keeperService.js`)

Auto-billing worker for recurring subscriptions:
1. Query subscriptions WHERE status='active' AND nextPayment <= NOW()
2. For each: call `chargeSubscription()` on smart contract
3. Success: update nextPayment, log success
4. Failure: set status='past_due', log failure
5. Run via cron (hourly) or `npm run keeper`

## Authentication Flow (VERIFIED from `src/services/authService.js`)

1. Frontend requests auth message (`GET /api/auth/message`)
2. User signs message with wallet (ethers.verifyMessage)
3. Frontend sends walletAddress + signature (`POST /api/auth/connect-wallet`)
4. Backend verifies signature, creates/finds merchant, returns JWT
5. JWT used for protected endpoints (7-day expiry)

## Security Considerations (VERIFIED from source)

- **Wallet signature verification:** `ethers.verifyMessage()` recovers address from signature
- **JWT:** Signed with JWT_SECRET, 7-day expiry
- **On-chain verification:** `verifySubscriptionTx()` checks tx recipient, status, sender, and Subscribed event args
- **Token validation:** Only IDRX/USDC/USDT allowed
- **No private key exposure:** PRIVATE_KEY only in env, used by keeper bot only

## Personal Contribution (VERIFIED from README)

- **Documented contribution:** Frontend interfaces and user-facing subscription workflows
- **NOT claimed:** Solidity smart contract development (no evidence in repo)
- Backend: Express.js API, SQLite, keeper bot, ethers.js integration

## Interview Preparation — Key Points

1. **Wallet auth:** Sign message → verify signature → JWT, not traditional username/password
2. **On-chain verification:** Transaction receipt checked for contract recipient, success status, and Subscribed event with matching plan ID and wallet
3. **Keeper bot:** Scheduled job queries due subscriptions, calls chargeSubscription on-chain, handles failures gracefully (past_due status)
4. **Token support:** Three tokens (IDRX, USDC, USDT) with separate pricing per plan
5. **Frontend vs backend split:** Frontend handles UI/wallet connection; backend handles API, DB, on-chain verification, keeper billing
