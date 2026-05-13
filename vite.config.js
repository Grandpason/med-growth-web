import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    Sitemap({
      hostname: 'https://med-growth-web.vercel.app', // ÖNEMLİ: Kendi canlı domain adresiniz ile değiştirin
      dynamicRoutes: [
        '/',
        '/case-studies' // Uygulamanızdaki mevcut alt sayfalar
      ] // İleride ekleyeceğiniz sayfaları buraya liste olarak ekleyebilirsiniz
    })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('lenis') || id.includes('studio-freight')) {
              return 'vendor-scroll';
            }
            if (id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            if (id.includes('react-helmet')) {
              return 'vendor-helmet';
            }
            return 'vendor-utils';
          }
        }
      }
    }
  }
})
