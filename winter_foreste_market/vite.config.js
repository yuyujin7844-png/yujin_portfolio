import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yujin_portfolio/winter_foreste_market/',
  publicDir: 'assets',
})
