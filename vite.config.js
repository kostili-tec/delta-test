import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export const pathResolver = (p) => resolve(__dirname, '.', p);

// https://vitejs.dev/config/
export default defineConfig({
  base: '/delta-test/',
  build: {
    cssMinify: false,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
});
