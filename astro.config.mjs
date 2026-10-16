import { defineConfig } from 'astro/config';

// BASE_PATH and SITE_URL are set by the GitHub Pages workflow.
// Locally they default to "/" and a placeholder domain.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://abcombinator.com';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
});
