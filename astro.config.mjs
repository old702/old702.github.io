import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// GitHub Pages workflow sets SITE_URL automatically for USERNAME.github.io.
// For a project repository (USERNAME.github.io/repository), also set BASE_PATH=/repository.
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH;

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  trailingSlash: 'always',
  integrations: [mdx()],
});
