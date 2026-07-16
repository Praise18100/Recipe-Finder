import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    // Force Vite to use esbuild instead of lightningcss for stylesheets
    cssMinify: 'esbuild', 
  },
})
