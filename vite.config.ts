import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@styles': path.resolve(__dirname, 'src/app/styles'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/helpers/mixins" as *;`,
      },
    },
  },
});
