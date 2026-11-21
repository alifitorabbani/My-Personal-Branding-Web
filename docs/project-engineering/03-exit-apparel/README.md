# Project 03 — Exit Apparel (Company Profile & Custom Apparel Platform)

**Repository:** `/Users/user/exit-apparel-company-profile/`
**Confidence:** VERIFIED

## Executive Summary

A corporate website for Exit Apparel, a custom apparel manufacturer based in Bandung, Indonesia. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Features include company profile, product catalogs, portfolio showcases, and a dynamic quotation estimator with WhatsApp integration.

**Period:** March 2026 – June 2026
**Organization:** Exit Apparel
**Location:** Bandung, Indonesia

## Technology Stack (VERIFIED from package.json)

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.6 | App Router framework |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Framer Motion | 12.40.0 | Animations |
| Lucide React | 1.17.0 | Icons |

**Note:** No backend, no database — purely frontend/static site.

## Architecture (VERIFIED from source)

```
Next.js 16 App Router
├── app/
│   ├── page.tsx          → Home (Hero, Stats, Services, WhyUs, HowItWorks, Portfolio, CTA)
│   ├── layout.tsx        → Root layout (fonts: Inter + Chivo, metadata)
│   ├── globals.css       → Global styles
│   ├── about/            → About page
│   ├── contact/          → Contact page
│   ├── estimator/        → Price Estimator page (key feature)
│   ├── portfolio/        → Portfolio page
│   ├── services/         → Services page
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx        → Navigation (client component)
│   ├── Footer.tsx        → Footer
│   ├── Reveal.tsx        → Framer Motion reveal animation
│   └── sections/         → 8 section components
└── public/               → Static assets
```

## Key Feature: Price Estimator (VERIFIED from `app/estimator/page.tsx`)

### Product Configuration

| Product | Materials | Add-ons | Consult-only? |
|---------|-----------|---------|---------------|
| Kaos | Cotton Combed 30s/24s/20s (Rp 55k-75k) | DTF (Rp 5k), Plastisol (Rp 7k) | No |
| Kemeja | American Drill, Ripstop (Rp 125k) | Bordir (Rp 10k) | No |
| Jaket | None | None | Yes |
| Vest/Rompi | American Drill, Ripstop (Rp 110k) | Bordir (Rp 10k) | No |
| Jersey | None | None | Yes |
| Lanyard | Full Printing + Case Kaca/Plastik (Rp 15k-17k) | None | No |
| Topi | None | None | Yes |

### Pricing Formula (VERIFIED from source)

```
unitPrice = materialPrice + sum(selectedAddOnPrices)
totalEstimate = unitPrice × quantity
```

**Variables affecting price:**
1. Product type (determines available materials and add-ons)
2. Material selection (each has a per-piece price)
3. Add-on selection (each adds per-piece price)
4. Quantity (minimum 12 pcs, chips: 12/25/50/100/200)

**No backend integration** — calculation is purely client-side React state.

### WhatsApp Integration

- Order via WhatsApp: `https://wa.me/62895331153164?text=<encoded_order_message>`
- Request consultation: `https://wa.me/6281511004799`
- Order message includes product, material, add-ons, quantity, and total estimate

## Personal Contribution

- Frontend implementation (Next.js pages, components, estimator logic)
- Project planning and development coordination (per README)
- **Note:** README has a merge conflict (empty content); tech stack verified from package.json and source

## Security / Performance

- No authentication (public corporate site)
- No sensitive data (no user accounts)
- Next.js metadata for SEO (title, description in layout.tsx)
- Google Fonts (Inter, Chivo) via next/font with self-hosting optimization
- Framer Motion animations (Reveal component)

## Interview Preparation — Key Points

1. **Pricing formula:** unitPrice = material + add-ons; total = unitPrice × quantity; all client-side
2. **Consult-only products:** Jaket, Jersey, Topi have no materials — redirect to WhatsApp consultation
3. **Minimum order:** 12 pcs enforced via quantity input min attribute and updateQuantity clamp
4. **Next.js App Router:** All pages under `app/`, using Server Components by default, Client Components (`"use client"`) for interactivity
5. **No backend:** Static frontend only; WhatsApp is the inquiry channel, not an API integration
