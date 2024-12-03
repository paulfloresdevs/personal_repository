import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  base: '/'
});
