// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
/* import to use remarkBaseImages in Astrov7 */
import { unified } from '@astrojs/markdown-remark';
import remarkBaseImages from './plugins/remark-base-image.mjs';

const base = "/hinogames-log/";

// https://astro.build/config
export default defineConfig({
  site: "https://ahinojal.github.io",
  base,
  markdown: {
    processor: unified({
      remarkPlugins: [[remarkBaseImages, { base }]]
    }),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fusion Pixel 10px Proportional TC",
      cssVariable: "--font-pixel"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-poppins"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Titan One",
      cssVariable: "--font-titan"
    },
    {
      provider: fontProviders.fontsource(),
      name: "Galindo",
      cssVariable: "--font-galindo"
    }
  ]
});