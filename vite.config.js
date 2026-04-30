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
      hostname: 'https://medgrowthpartners.com', // ÖNEMLİ: Kendi canlı domain adresiniz ile değiştirin
      dynamicRoutes: [
        '/',
        '/case-studies' // Uygulamanızdaki mevcut alt sayfalar
      ] // İleride ekleyeceğiniz sayfaları buraya liste olarak ekleyebilirsiniz
    })
  ],
})
