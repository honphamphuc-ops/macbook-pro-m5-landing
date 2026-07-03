# NovaTech — MacBook Pro M5 Landing

This repository contains a production-ready Next.js landing page for the MacBook Pro M5 (NovaTech). The project is optimized for performance, accessibility, and SEO with Tailwind CSS, server-side rendering, and modern image delivery.

**Quick overview**
- `src/app/page.tsx`: main landing page layout and section composition
- `src/components/Hero.tsx`: hero/lead section (large image, CTA)
- `src/components/Features.tsx`: feature scrollytelling with images
- `src/components/Specs.tsx`: technical specifications table
- `src/components/NewsletterForm.tsx`: email capture with validation + toast
- `src/lib/constants.ts`: canonical content (feature blocks, specs)

Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview the site.

Build & production

```bash
npm run build
npm run start
```

Deploy: Vercel is recommended for the best Next.js experience (Edge, Image CDN).

Key technologies

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- next-themes (dark mode)
- react-hook-form + zod (form validation)
- next/image (optimized images)

SEO & performance notes

- Metadata and Open Graph images are configured in `src/app/layout.tsx` for rich previews.
- The Hero image is prioritized (LCP) and other sections are lazily loaded to improve Core Web Vitals.
- A `public/robots.txt` and a sitemap (if you add one at `/sitemap.xml`) help crawlers index the site — see `public/robots.txt` in this repo.
- Remove or defer third-party scripts that block rendering to maximize Lighthouse scores.

Contributing

- Keep component responsibilities small and use `src/lib/constants.ts` for static content.
- When adding new pages or routes, prefer server components unless client interactivity is required.

License & attribution

This repo is a template/demo. Replace copy, images, and brand assets before publishing.

If you'd like, I can also generate a `sitemap.xml` and add canonical tags or help prepare a deploy on Vercel.
