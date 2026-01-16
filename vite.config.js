import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Code splitting for better mobile performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'three-vendor': ['three', '@react-three/fiber', '@shadergradient/react'],
          'particles-vendor': ['@tsparticles/react', '@tsparticles/slim', '@tsparticles/engine'],
          'utils': ['canvas-confetti', 'react-type-animation', 'react-intersection-observer']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
})
