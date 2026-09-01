import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yujin_portfolio/Bloom_Champagne/',
  publicDir: 'assets',
})
