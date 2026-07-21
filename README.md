# Shivender Singh — Portfolio

Senior SDET / QA Automation Engineer portfolio built with React, TypeScript, Vite, and a Three.js-powered 3D quality-pipeline hero.

## Live Site

Deployed via GitHub Pages: `https://<github-username>.github.io/shivender-singh-portfolio/`

## Tech Stack

- React 18 + TypeScript
- Vite 6
- Three.js via `@react-three/fiber` and `@react-three/drei`
- `lucide-react` icons

## Local Development

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173/`).

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with the `GITHUB_PAGES=true` flag (so asset paths resolve under the `/shivender-singh-portfolio/` subpath) and publishes `dist/` to GitHub Pages via GitHub Actions.

## Editing Content

All résumé/portfolio content lives in [src/data/portfolio.ts](src/data/portfolio.ts) — update this file to change experience, case studies, certifications, or contact details. Remember to add your GitHub and LinkedIn URLs there.

The résumé PDF served for download lives at [public/ShivenderSingh.pdf](public/ShivenderSingh.pdf).
