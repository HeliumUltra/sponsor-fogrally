# sponsor.fogrally.com

FOG RALLY 2026 — Sponsorship Opportunities. A single-page experiential sponsor kit replacing the static PDF.

## Dev

```bash
npm run dev      # Vite dev server on port 5173
npm run build    # Production build to /dist
```

## Swapping Assets

All images and videos are **placeholder slots** — dark boxes with descriptive labels.

### Images
1. Place image files in `public/images/`
2. In `src/index.html`, find the `<div class="asset-placeholder">` with the matching label
3. Replace the `<div>` with an `<img>` or `<picture>` tag:
   ```html
   <img src="/images/your-file.webp" alt="Description" loading="lazy">
   ```

### Videos
1. Place video files in `public/videos/`
2. Replace the placeholder `<div>` with a `<video>` tag:
   ```html
   <video data-autoplay loop muted playsinline>
     <source src="/videos/your-file.mp4" type="video/mp4">
   </video>
   ```
   The `data-autoplay` attribute triggers autoplay-on-scroll behavior.

### Logos
Replace logo placeholder `<div>` elements with `<img>` tags pointing to files in `public/images/`.

## Fonts

Self-hosted Barlow TTFs in `public/fonts/`. All `@font-face` declarations are in `src/styles/fonts.css`.

## Deploy

Push to `main` — Netlify auto-deploys. Or use `npm run build` and deploy the `dist/` folder.

## Copy

All copy is authored directly in `src/index.html`. Edit in place.
