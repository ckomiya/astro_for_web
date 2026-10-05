// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import vue from '@astrojs/vue';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  image: {
    // Permite que <Image /> y <Picture /> conviertan SVG a WebP (images-demo.astro)
    dangerouslyProcessSVG: true,
  },

  integrations: [mdx(), react(), vue()],

  adapter: node({
    mode: 'standalone'
  })
});