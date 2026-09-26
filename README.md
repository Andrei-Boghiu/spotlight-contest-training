# Spotlight Iași — Contestant Training

A single-page slide presentation used to train contestants before Spotlight Iași's club
speech contest (Humorous Speech & Table Topics). Built to be walked through live during the
training session — arrow keys / Prev-Next to advance, progress bar up top.

This is a subdomain project (`training.spotlightiasi.club`) of the main club site at
[spotlightiasi.club](https://spotlightiasi.club), sharing its stack, design system
(`DESIGN.md`), and brand assets (`logo.svg`, `spotlight.svg`, `iasi.svg`, favicons — copied
from the main project's `public/`, not symlinked, so re-copy if the main site's brand assets
change).

## Content source of truth

The slide content in `components/training/slides.tsx` is a hand-condensed, on-screen
adaptation of `Contestant_Training_Guide.md` (one level up, outside this `web/` folder) —
it is **not** auto-generated from that file. If the guide changes, the slides need a manual
pass to stay in sync.

## SEO

This page is intentionally kept out of search — it's an internal tool for club contestants,
not public marketing content. The actual noindex directive is the `robots` meta tag in
`app/layout.tsx`. `app/robots.ts` deliberately does the opposite of what you'd expect —
it `allow`s crawling rather than disallowing it, because a `disallow` would stop crawlers
from ever reading that noindex tag, letting an externally-linked URL surface as a bare
search result anyway. Open Graph / Twitter card metadata is still fully wired up so a direct
link (e.g. shared in the club WhatsApp) unfurls properly.

## Development

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write
```

## Deployment

Hosted on Vercel. `lib/site.ts` picks the site URL used for the canonical link, Open Graph
tags, and the OG image: Vercel's own `VERCEL_ENV` (`"production" | "preview" | "development"`)
decides between the real domain (`training.spotlightiasi.club`) and that specific preview
deployment's `VERCEL_URL`, so previews always unfurl pointing at themselves rather than at
production — `NODE_ENV` alone can't make that distinction, since Next sets it to
`"production"` for every build, previews included. Set `NEXT_PUBLIC_SITE_URL` only to override
this (e.g. a custom staging domain that isn't a `*.vercel.app` preview URL) — it isn't needed
for normal Vercel preview/production deployments.

Make sure the project's production domain is actually set to `training.spotlightiasi.club` in
Vercel's project settings (Domains) — `PRODUCTION_URL` in `lib/site.ts` assumes that, and
won't self-correct if the assigned domain differs.

## Stack

Next.js (App Router) · Tailwind CSS v4 · shadcn/ui (`base-nova` style, `@base-ui/react`
primitives) · `next/font` for Montserrat (headings) / Source Sans 3 (body).

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Components land in `components/ui/`.
