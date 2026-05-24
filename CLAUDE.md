# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run deploy     # Build + push to gh-pages branch (GitHub Pages)
```

No linter or test suite is configured.

## Deployment Branches

Three branches serve different purposes — **always keep all three in sync after changes**:

| Branch | Deployed to | `vite.config.js` base |
|---|---|---|
| `main` | — (development) | env var detection |
| `deploy/vercel` | Vercel (webgl-liart.vercel.app) | `"/"` |
| `deploy/github` | GitHub Pages (loithanhquan-ltq.github.io/personal-web/) | `"/personal-web/"` |

After committing to `main`, propagate to deploy branches:
```bash
git checkout deploy/vercel && git merge main && git push origin deploy/vercel
git checkout deploy/github && git merge main && git push origin deploy/github
git checkout main
npm run deploy   # also rebuild gh-pages branch for GitHub Pages
```

If `vite.config.js` causes a merge conflict, always keep the deploy branch's version.

## Architecture

Single-page portfolio. No router — navigation is anchor-link scroll (`#section-id`). All site content lives in **`src/data/content.js`** (projects, skills, timeline, videos, social links, etc.) — edit there first before touching components.

### Theme System

Dark mode uses Tailwind's `class` strategy. The `dark` class is toggled on `<html>` by `App.jsx`. Theme switching triggers a CSS crossfade via the `.theme-transitioning` class (defined in `index.css`), which force-transitions all color properties for 250ms.

CSS custom properties in `index.css` define shared tokens:
- `--bg-main`, `--text-main`, `--matlab-blue`, `--svg-*` — used by utility classes and SVG components
- `.hud-card`, `.tech-pill`, `.instrument-panel` — shared card/badge classes with their own dark overrides in `index.css`

Tailwind `dark:` variants handle per-component colors; CSS custom props handle SVG colors (which can't use Tailwind variants).

### Color Palette

MATLAB-inspired: `#0072BD` blue / `#4da6ff` dark-mode blue, `#E87722` orange, `#77AC30` green. Defined in `tailwind.config.js` as `matlab.*` and mirrored as CSS vars in `index.css`.

### Animation Patterns

- **Section entry**: `motion.div` with `whileInView` in `App.jsx` wraps each section
- **Card entry**: Framer Motion stagger containers (`variants` with `staggerChildren`) — see `Projects.jsx`
- **3D tilt**: `TiltCard.jsx` — reusable wrapper using `useMotionValue` + `useSpring` + `useTransform` for perspective tilt and cursor-tracked glint overlay. Pass `variants` prop to participate in parent stagger.
- **Skill bars**: animate `width` with `whileInView` in `Skills.jsx`
- **Radar chart**: SVG built with D3 in `RadarChart.jsx`, colors via CSS custom props

### Asset Paths

Assets live in `public/assets/`. Always reference them via:
```js
const assetBase = `${import.meta.env.BASE_URL}assets`;
// e.g. `${assetBase}/bosch.jpg`
```
This ensures correct paths on both GitHub Pages (`/personal-web/assets/`) and Vercel (`/assets/`).
