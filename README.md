# Static Site Generation

A blog-style site demonstrating how `generateStaticParams` pre-renders every page in every locale at build time — no runtime translation fetching, just instant, fully translated HTML served from the edge.

**[Live Demo](https://static-site-generation.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example shows how to combine Next.js static site generation with General Translation's i18n system. Every page is pre-rendered at build time for each supported locale (English, Spanish, French, Japanese, Chinese), producing fully translated static HTML files that can be served instantly from a CDN.

## GT Features Used

- `<T>` — JSX translation with wide wrapping for full context
- `getGT` — Server-side string translations for metadata
- `generateStaticParams` — Pre-renders every locale at build time
- `generateMetadata` — Translated page titles, descriptions, and OG tags per locale
- `loadTranslations` — Local translation storage (no CDN dependency)
- `<LocaleSelector>` — Language picker

## Getting Started

```bash
git clone https://github.com/gt-examples/static-site-generation.git
cd static-site-generation
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
