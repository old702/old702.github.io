# Portfolio / Blog / Project Showcase

Astro + MDX portfolio prepared for GitHub Pages. The visual system is based on the latest dark prototype: Inter Tight Bold uppercase headings with increased tracking, gray Inter Tight Bold subtitles, Inter for UI/body text, ArtStation-like work tiles, dedicated project galleries, fullscreen image viewing, technical blog articles, GIF figures, and before/after comparisons.

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

After the first `npm install`, commit the generated `package-lock.json` for reproducible builds.

## Publish at `USERNAME.github.io`

1. Create a GitHub repository named exactly `USERNAME.github.io`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` builds and deploys the site automatically.

The workflow automatically sets `SITE_URL=https://USERNAME.github.io` from the repository owner.

## If you publish from a normal repository

For `https://USERNAME.github.io/my-portfolio/`, set this in `.github/workflows/deploy.yml`:

```yaml
env:
  SITE_URL: https://${{ github.repository_owner }}.github.io
  BASE_PATH: /my-portfolio
```

All internal links and media use `import.meta.env.BASE_URL`, so the site remains base-path safe.

## Where to edit content

- `src/data/site.ts` — name, role, contact links.
- `src/data/projects.ts` — homepage tiles and gallery projects.
- `src/data/posts.ts` — blog index metadata.
- `src/pages/blog/*.mdx` — article content.
- `public/media/projects/` — gallery images.
- `public/media/blog/` — article covers, GIFs, comparison images.
- `src/styles/global.css` — visual system.

## Project tile destinations

A homepage tile can open either a gallery or an article:

```ts
destination: 'gallery'
```

or:

```ts
destination: 'article',
article: 'forward-plus-renderer'
```

## Replace placeholder media

The included SVG images are intentionally simple placeholders. You can replace them while keeping the same filenames, or update paths in `src/data/projects.ts` / `src/data/posts.ts`.

For short motion demonstrations, GIF works directly. For longer clips, prefer MP4/WebM with `autoplay muted loop playsinline` to reduce file size.

## Blog layout

The blog index uses an editorial dark layout inspired by the restrained structure of Shadefall: a large latest-post feature followed by a chronological archive with compact media previews. Blog metadata is defined in `src/data/posts.ts`; article bodies remain MDX files under `src/pages/blog/`.
