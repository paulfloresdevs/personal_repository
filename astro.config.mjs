import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  base: '/',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
});
