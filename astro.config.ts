import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  vite: {
    server: {
      strictPort: true,
    },
  },
});
