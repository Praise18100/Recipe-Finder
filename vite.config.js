import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
    chunkSizeWarningLimit: 600, 
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor',
              test: /node_modules/, 
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
