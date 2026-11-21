# Deployment Documentation

## Overview

This portfolio website is built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. It is designed for deployment on Vercel.

## Prerequisites

- Node.js 18 or later
- pnpm (recommended) or npm
- Vercel account (for deployment)

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

## Production Build

```bash
# Build for production
pnpm build

# Start production server locally
pnpm start
```

## Vercel Deployment

### Option 1: GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Environment Variables

No environment variables are required for basic deployment. The site is fully static with no backend dependencies.

If you add a contact form backend later, configure:
- `RESEND_API_KEY` — for email sending via Resend
- `CONTACT_EMAIL` — destination email for form submissions

## Routes

The following routes are generated:

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, specializations, featured projects, experience, timeline, research, contact CTA |
| `/about` | Personal profile, technical interests, academic journey |
| `/experience` | Professional and academic experience with category filtering |
| `/projects` | Complete project portfolio with search and category filtering |
| `/projects/[slug]` | Individual project case studies |
| `/leadership` | Organizational and committee experience |
| `/timeline` | Interactive chronological timeline (2022–2026) |
| `/research` | Final-year research in progress |
| `/skills` | Technical skills organized by discipline |
| `/contact` | Contact form with social links |

## Performance

- All pages are statically prerendered (SSG)
- Fonts are self-hosted via `next/font/google`
- Images are optimized via Next.js Image component
- Framer Motion animations are client-side only
- No backend infrastructure required

## Custom Domain

1. In Vercel Dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. SSL is automatically provisioned

## Content Updates

All content is managed in `src/data/index.ts`:

- `PERSON` — Profile information
- `PROJECTS` — Project portfolio
- `EXPERIENCE` — Professional and academic experience
- `ORGANIZATIONAL_EXPERIENCE` — Leadership roles
- `COMMITTEE_EXPERIENCE` — Event and committee work
- `ACHIEVEMENTS` — Awards and recognitions
- `SKILL_GROUPS` — Technical skills
- `ARTICLES` — Blog articles
- `TIMELINE_ENTRIES` — Timeline data
- `RESEARCH` — Research information
- `SITE_SETTINGS` — Site metadata

No code changes are needed for content updates — just edit the data file and redeploy.

## CV / Resume

The CV download button points to `/resume`. Place your CV PDF at `public/resume/cv.pdf` and update links accordingly. Currently, no CV file is present in the repository — add one before deployment if you want the download to work.

## Troubleshooting

**Build fails with motion component error:** Ensure `PageTransition` is used as a client component (`"use client"`) and not directly in server layout.

**Fonts not loading:** Verify `next/font/google` imports match the font names used in `globals.css` (Inter, Geist, Geist_Mono).

**404 on project pages:** Ensure `generateStaticParams` in `src/app/projects/[slug]/page.tsx` returns all project slugs.
