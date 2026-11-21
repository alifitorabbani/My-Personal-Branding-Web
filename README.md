# Alifito Rabbani Cahyono — Personal Branding Platform

Enterprise-quality personal branding platform for a Software Engineer & AI/ML Enthusiast.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Runtime:** React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI primitives)
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend (server-side)
- **CMS:** Sanity (structured content, optional — local data fallback)
- **Testing:** Vitest, Playwright, axe-core
- **Deployment:** Vercel + GitHub Actions

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values (RESEND_API_KEY, etc.)

# Run development server
pnpm dev

# Open http://localhost:3000
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `npx tsc --noEmit` | TypeScript type check |

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # UI, layout, navigation, animation components
  data/             # Local structured data (source of truth)
  lib/              # Email, security, validation utilities
  types/            # TypeScript type definitions
sanity/             # Sanity CMS schemas (optional)
tests/              # Unit, integration, E2E tests
docs/               # Architecture, design system, PRD, deployment docs
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Site canonical URL |
| `RESEND_API_KEY` | Yes (for contact form) | Resend API key |
| `CONTACT_ADMIN_EMAIL` | No | Destination email for contact form |

## Contact Form

The contact form submits to `/api/contact` which validates input with Zod, applies rate limiting (5 req/min per IP), and sends email via Resend. Without `RESEND_API_KEY`, the endpoint returns a configuration error gracefully.

## CMS (Sanity)

Local structured data in `src/data/index.ts` is the default source of truth. To migrate to Sanity:
1. Create a Sanity project
2. Add schemas in `sanity/schemas/`
3. Configure `next-sanity` client in `src/lib/sanity/`
4. Swap data imports to use Sanity queries

## Deployment

Deploy to Vercel. Connect the GitHub repository and configure environment variables in the Vercel dashboard.

## License

MIT