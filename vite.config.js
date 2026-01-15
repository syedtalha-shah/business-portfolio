import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = command === 'build'
  
  return {
    plugins: [
      react(),
      // Only use visualizer during build, not in dev mode
      isProduction && visualizer({
        filename: './dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ].filter(Boolean),
  server: {
    port: 3000,
    open: true,
    host: true, // Allow external connections
    hmr: {
      // WebSocket configuration for HMR
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
      clientPort: 3000
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable sourcemaps in production for smaller bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap', '@react-spring/web', 'aos'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'chart-vendor': ['recharts', 'chart.js', 'react-chartjs-2'],
          'form-vendor': ['react-hook-form', 'zod', '@hookform/resolvers', '@emailjs/browser'],
          'ui-vendor': ['lucide-react', 'swiper', 'react-lazy-load-image-component']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Warn if chunk exceeds 1MB
  }
  }
})

