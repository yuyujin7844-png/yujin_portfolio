import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/yujin_portfolio/Somtoday/',
  // 피그마에서 내려받은 이미지/아이콘(assets/img, assets/ic)을 그대로 정적 파일로 사용
  publicDir: 'assets',
  build: {
    // 멀티 페이지: 메인(/) + 예약하기(/reservation/)
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        reservation: fileURLToPath(new URL('./reservation/index.html', import.meta.url)),
      },
    },
  },
})
