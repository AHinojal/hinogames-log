// @ts-check
import { defineConfig } from 'astro/config';
import remarkBaseImages from './plugins/remark-base-image.mjs';

const base = "/hinogames-log/";

// https://astro.build/config
export default defineConfig({
  site: "https://ahinojal.github.io",
  base,
  markdown: {
    remarkPlugins: [[remarkBaseImages, { base }]]
  }
});