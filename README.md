# ARDOR

Editorial fashion e-commerce homepage — a premium, animation-driven single-page site built with React, Tailwind CSS v4, and Framer Motion.

**Live site:** [ardor.vercel.app](https://ardor.vercel.app) <!-- update with real URL after deploy -->

## Tech Stack

- **React** (Vite) — UI framework and build tooling
- **Tailwind CSS v4** — utility-first styling, configured via the CSS-first `@theme` approach (no `tailwind.config.js` — Tailwind v4 reads design tokens directly from CSS)
- **Framer Motion** — scroll-linked animations, entrance transitions, gesture interactions
- **AOS (Animate on Scroll)** — supplementary scroll-reveal animations
- **Lenis** — smooth scroll behavior
- **cobe** — WebGL globe visualization (Press Mentions section)
- **react-router-dom** — minimal routing (homepage + 404 fallback)

## Project Structure

```
src/
  components/
    layout/
      Navbar.jsx
    sections/
      Hero.jsx
      CollectionStory.jsx
      BrandValues.jsx
      ShopTheEdit.jsx
      FeaturedSpotlight.jsx
      PressMentions.jsx
      InstagramWall.jsx
      SizeGuide.jsx
      Footer.jsx
    ui/
      PressGlobe.jsx
    Preloader.jsx
    ScrollProgress.jsx
    Reveal.jsx
  lib/
    lenis.js
  pages/
    Home.jsx
    NotFound.jsx
  index.css
  App.jsx
public/
  assets/        # optimized .webp images
  robots.txt
  favicon.ico
```

## Design System

Theme tokens are defined in `src/index.css` using Tailwind v4's CSS-first configuration (`@theme` block) rather than a JS config file:

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#F4F4F5` | Page background |
| `--bg-surface` | `#FFFFFF` | Card/surface background |
| `--text-primary` | `#18181B` | Primary text, headings |
| `--text-secondary` | `#71717A` | Secondary/muted text |
| `--accent-orange` | `#FF6B00` | Brand accent, CTAs |
| `--accent-orange-hover` | `#E05E00` | Accent hover state |
| `--border-subtle` | `#E4E4E7` | Dividers, subtle borders |

**Typography:**
- Display/headings — [Fraunces](https://fonts.google.com/specimen/Fraunces) (`font-display`)
- Body/UI — [Inter](https://fonts.google.com/specimen/Inter) (default sans)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/<your-username>/ardor.git
cd ardor
npm install
```

### Development

```bash
npm run dev
```

Runs the app at `http://localhost:5173` with hot module reload.

### Production build

```bash
npm run build
npm run preview
```

`build` outputs a production bundle to `dist/`; `preview` serves that build locally so you can test real production performance (always test Lighthouse against `preview`, not `dev` — dev mode is unminified and will report misleadingly poor performance scores).

## Image Assets

All imagery is AI-generated (Google Gemini) per brand/section-specific prompts, then optimized to WebP via a local script:

```bash
node scripts/optimize-images.mjs
```

This resizes and converts source images in `public/assets/` to `.webp` at appropriate dimensions per use case (hero/campaign images vs. small thumbnails/avatars).

## Performance

Lighthouse (production build, mobile + desktop):
- Performance: 96 (desktop) / 70+ (mobile)
- Accessibility: 95
- Best Practices: 100
- SEO: 100

Key optimizations applied: WebP image conversion, responsive image sizing, LCP preload hints, deferred font loading, code-split heavy sections (globe visualization, horizontal scroll sections) via `React.lazy()`.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` auto-deploy via the connected GitHub integration. See [Vercel's Vite deployment docs](https://vercel.com/docs/frameworks/vite) for framework-specific details.

## Roadmap

- [ ] Admin dashboard for content management (images, copy, product data)
- [ ] Shopping cart drawer + checkout flow
- [ ] Product detail pages
- [ ] CMS/backend integration for dynamic content

## License

Private project — not licensed for reuse.