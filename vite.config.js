import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
    // ✅ Use esbuild (built-in, no install needed) instead of terser
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons'],
        },
      },
    },
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
  },
})