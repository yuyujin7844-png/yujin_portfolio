import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yujin_portfolio/arkhe_robotics/',
  publicDir: 'assets',
  build: {
    // 멀티 페이지: 메인(/) + 회사소개(/company/)
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        company: fileURLToPath(new URL('./company/index.html', import.meta.url)),
      },
    },
  },
})
