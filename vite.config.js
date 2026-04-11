import { defineConfig } from 'vite';

export default defineConfig({
  // Esto asegura que Vite procese el index.html en la raíz
  root: './',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
});
