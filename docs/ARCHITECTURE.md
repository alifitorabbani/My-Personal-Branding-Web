# Architecture

## Overview
Modular monolith organized into four layers:
1. **Presentation Layer** — Next.js App Router pages and React components
2. **Content Layer** — Local structured data (`src/data/index.ts`) with Sanity migration path
3. **Application Layer** — Validation, email, rate limiting, security utilities
4. **Infrastructure Layer** — Vercel deployment, Resend email, Sanity CMS (optional)

## Directory Structure
```
src/
  app/              # Route handlers, pages, metadata, sitemap, robots
  components/
    ui/             # Base shadcn/ui components (button, card, input, etc.)
    layout/         # Navbar, footer, container
    navigation/     # Mobile nav
    sections/       # Page sections
    animations/     # Motion variants
    providers/      # Theme provider
  data/             # Local structured data source of truth
  lib/
    email/          # Resend integration
    security/       # Rate limiting
    validation/     # Zod schemas
  types/            # TypeScript types
```

## Design Decisions
- **Server Components by default**, Client Components only for interactivity
- **shadcn/ui** copied into project (not a dependency) for full control
- **Local data first** — no CMS dependency required to run; Sanity documented as upgrade path
- **No database** — content is static/structured; no persistent transactional requirement
- **Rate limiting** in-memory (documented; upgrade to Upstash Redis for multi-instance)

## Security
- Server-side API keys (Resend) never exposed to client
- Zod validation on all inputs
- Rate limiting on contact form
- Security headers via middleware (CSP, HSTS, X-Content-Type-Options, etc.)
