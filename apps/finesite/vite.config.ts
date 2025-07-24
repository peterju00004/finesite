/// <reference types='vitest' />
import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: __dirname,
  base: '/finesite/',
  cacheDir: '../../node_modules/.vite/apps/finesite',
  server:{
    port: 4200,
    host: 'localhost',
  },
  preview:{
    port: 4300,
    host: 'localhost',
  },
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  assetsInclude: ['**/*.mp4'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/_variables.scss" as vars;',
      }
    }
  }
}));
