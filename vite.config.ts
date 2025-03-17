import { fileURLToPath } from 'url';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      "@": path.resolve(__dirname, "src"),
    }
  }
});
