// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://charlsjon.github.io',
  base: 'core-services',

  vite: {
    plugins: [tailwindcss()]
  },

});