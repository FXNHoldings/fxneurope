# FXN Europe

Corporate website for **FXN Europe OÜ**, an Estonia-registered company building, operating, and scaling online retail, lifestyle, and travel ventures across the European market — from a base in Tallinn.

Live: [www.fxneurope.eu](https://www.fxneurope.eu)

## About

A multilingual marketing site. Content is available in five locales — **English, Eesti, Español, Deutsch, Français** — under `/{lang}/` routes (English is the default).

Pages (per locale):

- **Home** — company intro and what we do
- **About** — the company and its approach
- **Services** — what FXN Europe builds and operates
- **Contact** — enquiry form and company details
- **Sitemap** — human-readable page index
- **Privacy**, **Cookies**, **Terms** — legal pages (centralised, token-based content)

Company registered in Estonia (Reg. 17514051 · VAT EE102989757), Tallinn.

## Tech stack

A **Next.js static export** — no Node server runs in production.

| Area | Stack |
|------|-------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, `output: "export"`) + [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Fonts | Urbanist + Outfit, self-hosted via `next/font/google` |
| i18n | File-based `[lang]` routing with per-locale dictionaries (`src/i18n/`) |
| Animation | [lottie-web](https://airbnb.io/lottie/) |
| Hosting | nginx static at `/var/www/html/fxneurope.eu` (behind Cloudflare) |

## Project layout

```
fxneurope/
├── frontend/                 # Next.js app (static export → frontend/out)
│   └── src/
│       ├── app/
│       │   ├── [lang]/        # localized routes: home, about, services, contact,
│       │   │                  #   sitemap, privacy, cookies, terms + layout
│       │   ├── globals.css    # brand theme (Tailwind v4)
│       │   └── robots.ts
│       ├── components/        # Header, Footer, ContactForm, CookieBanner,
│       │                      #   LanguageSwitcher, Logo, Legal*, sections
│       ├── i18n/              # config (locales), dictionaries/<lang>.ts, legal.ts
│       └── lib/site.ts        # central company facts + nav
├── scripts/
│   ├── gen_sitemap.mjs        # generates frontend/public/sitemap.{xml,txt}
│   └── gen_images.py          # image generation helper
├── docker-compose.yml         # node:20-alpine build sandbox (optional)
└── publish.sh                 # build + rsync to the nginx web root
```

## Getting started

```bash
cd frontend
npm install
npm run dev        # http://localhost:3000 (redirects to /en/)
```

## Build & deploy

```bash
./publish.sh       # generates the sitemap, runs next build, rsyncs frontend/out
                   # to /var/www/html/fxneurope.eu, then smoke-tests via nginx
```

`next build` emits a fully static site into `frontend/out`, served directly by
nginx (behind Cloudflare, which terminates public TLS). No Node server runs in
production — the bundled `docker-compose.yml` is only a build sandbox.

> Note: on a host without Docker, build natively instead — `cd frontend && npm install`,
> `node scripts/gen_sitemap.mjs` (from the repo root), then `npx next build`.

## Localization

Locales live in [`frontend/src/i18n/config.ts`](frontend/src/i18n/config.ts)
(`en`, `et`, `es`, `de`, `fr`; English is the default and fallback). Copy is in
`frontend/src/i18n/dictionaries/<lang>.ts`; legal content is centralised in
`frontend/src/i18n/legal.ts`. To add a locale, extend `locales` and provide a
matching dictionary.
