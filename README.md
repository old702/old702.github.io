# old702.github.io

Personal portfolio, project gallery and **Devblog** built with Astro + MDX and deployed through GitHub Pages.

## Current structure

- **Work** — compact square project grid.
- **Project galleries** — square image grid with fullscreen lightbox, keyboard navigation and swipe.
- **Devblog** — technical notes and project breakdowns.
- **Articles** — MDX with reusable media/technical components.
- **About** — profile, experience and configured contact links.

The site uses a restrained dark editorial layout with Inter Tight Bold as the dominant display face.

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

## Deployment

Every push to `main` triggers:

`.github/workflows/deploy.yml`

The workflow builds the Astro site and deploys it to GitHub Pages. Deployment concurrency is enabled, so an older run is cancelled when a newer commit supersedes it.

Live site:

`https://old702.github.io/`

## Editing

Main content files:

- `src/data/site.ts` — identity, avatar and optional contacts.
- `src/data/projects.ts` — Work projects and galleries.
- `src/data/posts.ts` — Devblog index metadata.
- `src/pages/blog/*.mdx` — article bodies.
- `public/media/projects/` — project media.
- `public/media/blog/` — Devblog/article media.
- `src/styles/global.css` — consolidated visual system.

For complete instructions, examples and safe editing workflow, see:

**[CONTENT_GUIDE_RU.md](CONTENT_GUIDE_RU.md)**

## Route note

The public UI is named **Devblog**, but the route intentionally remains `/blog/` for stable existing links.
