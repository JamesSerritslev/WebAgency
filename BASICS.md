# COR Web Solutions: basics

This is the marketing site for a custom web design and SEO practice. Change the name in one file and it updates titles, footer, schema, and OG images.

## Brand variable

[`src/lib/brand.ts`](src/lib/brand.ts):

```ts
export const BRAND_NAME = "COR Web Solutions";
export const BRAND_FULL = "Create, Optimize, Rank";
```

`BRAND_NAME` is the company name. `BRAND_FULL` is the COR acronym expanded for eyebrows, footer, and schema.

## Who it is for

Small local businesses: restaurants, bars, wineries, cafes, online stores, plumbers, contractors, electricians, HVAC companies, landscapers, auto shops, salons, gyms, clinics, and similar trades or storefronts. Positioning: fully custom builds (no WordPress or page builders), fast pages, an SEO foundation at launch, a small hosting and maintenance fee, and monthly SEO as a separate optional service.

## How billing works

- The website build is a project fee, quoted after a call.
- After launch, hosting and maintenance are a small monthly fee. That keeps the site online and covers normal upkeep.
- SEO and AI visibility are a separate monthly charge. They do not start automatically when the site launches. Clients can add them at launch or later.

## Stack

- Next.js App Router, TypeScript, Tailwind CSS v4
- Resend for the contact form
- Vercel for live testing until a domain is purchased
- Content lives in `src/lib/content/` (no CMS in this version)

## Pages (SEO-friendly slugs)

| Path | Purpose |
| --- | --- |
| `/` | Home, proof, services, form |
| `/about` | Studio / operator page |
| `/process` | How a project runs |
| `/services` | Services hub |
| `/services/custom-websites` | Custom builds |
| `/services/seo` | Ongoing SEO |
| `/services/ai-visibility` | AI visibility |
| `/work` | Selected work |
| `/work/analogue-room` | Vinyl bar case study |
| `/work/standing-sun-wines` | Winery case study |
| `/work/james-serritslev` | Personal portfolio case study |
| `/work/bandscope` | Music networking app case study |
| `/insights` | Articles hub |
| `/insights/[slug]` | Seed SEO articles |
| `/faq` | FAQ with FAQPage schema |
| `/contact` | Lead form |
| `/privacy` | Short form privacy note |

## Color and UI

Research-backed 60 / 30 / 10 split:

- Chalk `#F7F5F2` (page background)
- Ink `#0F172A` (type, dark bands)
- Amber `#EA580C` (CTAs, high contrast)
- Cobalt `#1D4ED8` (links and focus)

Primary buttons use a magnetic liquid-fill hover (cursor pull + fill from the bottom). Motion respects `prefers-reduced-motion`. Page changes use the View Transitions API.

## SEO

Every route has a unique title, meta description with keywords, canonical, Open Graph, Twitter card, and a generated `opengraph-image`. Also:

- `sitemap.ts` and `robots.ts`
- JSON-LD: ProfessionalService, WebSite, Service, FAQPage, Article, BreadcrumbList
- Semantic headings, internal links, image alt text
- No em dashes in copy

`metadataBase` comes from `NEXT_PUBLIC_SITE_URL`, then Vercel URLs, then localhost.

## Environment variables

Copy [`.env.example`](.env.example) to `.env.local`.

| Variable | Use |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `RESEND_API_KEY` | Send form mail |
| `CONTACT_EMAIL` | Inbox (default `jamesserritslev@gmail.com`) |
| `RESEND_FROM_EMAIL` | From address |

Until a domain is verified in Resend, use `COR Web Solutions <onboarding@resend.dev>`. That can notify the account owner's inbox. Auto-replies to form submitters need a verified domain.

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Vercel

Import the GitHub repo, set the env vars, and deploy. Point `NEXT_PUBLIC_SITE_URL` at the `*.vercel.app` URL until a custom domain exists.

## Contact form

Fields: name, email, optional phone, business name, message. Honeypot field is hidden. Submit shows a loading state on the button, then an in-page thank-you. Resend sends:

1. A notification to `CONTACT_EMAIL`
2. An auto-reply to the sender (after the from-domain is verified)

## Portfolio screenshots

Homepage captures of live sites live in `public/work/`:

- Analogue Room: https://www.analogueroom.com
- Standing Sun Wines: https://www.standingsunwines.com
- James Serritslev resume: https://www.jamesserritslev.com
- BandScope: https://www.bandscope.net
