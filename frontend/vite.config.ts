import path from 'node:path';

import { cloudflare } from '@cloudflare/vite-plugin';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@util': path.resolve(__dirname, './src/util'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
