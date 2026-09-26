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

This page is intentionally set to `noindex` (see `app/layout.tsx` and `app/robots.ts`) — it's
an internal tool for club contestants, not public marketing content, so it's kept out of
search rather than competing with the main site. Open Graph / Twitter card metadata is still
fully wired up so a direct link (e.g. shared in the club WhatsApp) unfurls properly.

## Development

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write
```

## Stack

Next.js (App Router) · Tailwind CSS v4 · shadcn/ui (`base-nova` style, `@base-ui/react`
primitives) · `next/font` for Montserrat (headings) / Source Sans 3 (body).

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Components land in `components/ui/`.
