import { createTheme } from '@mui/material/styles'

/**
 * ARKHE Robotics 디자인 토큰
 * - 1920 기준 12컬럼 / margin 240 / gutter 20
 * - 콘텐츠 폭 = 1920 - (240 * 2) = 1440px
 */
export const LAYOUT = {
  designWidth: 1920,
  margin: 240,
  columns: 12,
  gutter: 20,
  contentWidth: 1440,
}

/** 섹션 공통 좌우 여백 (1920에서 240px, 그 이하에서는 비율 축소) */
export const SECTION_X = {
  xs: '20px',
  sm: '32px',
  md: '48px',
  lg: 'min(12.5vw, 240px)',
}

const FONT_HEAD = '"Unbounded", "Pretendard Variable", Pretendard, sans-serif'
const FONT_BODY = '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#F81D21', dark: '#C9161A', light: '#FF4E52' },
    secondary: { main: '#F0F1F3' },
    background: { default: '#000000', paper: '#121314' },
    text: {
      primary: '#FFFFFF',
      secondary: '#9A9DA3',
      disabled: '#6A6D73',
    },
    divider: 'rgba(255, 255, 255, 0.14)',
  },
  typography: {
    fontFamily: FONT_BODY,
    fontFamilyHead: FONT_HEAD,
    // 영문 헤드라인 (Unbounded)
    h1: { fontFamily: FONT_HEAD, fontWeight: 700, fontSize: 'clamp(2rem, 3.4vw, 4.1rem)', lineHeight: 1.15, letterSpacing: '-0.02em' },
    h2: { fontFamily: FONT_HEAD, fontWeight: 700, fontSize: 'clamp(1.6rem, 2.1vw, 2.5rem)', lineHeight: 1.2, letterSpacing: '-0.01em' },
    h3: { fontFamily: FONT_HEAD, fontWeight: 600, fontSize: 'clamp(1.3rem, 1.6vw, 1.9rem)', lineHeight: 1.25 },
    h4: { fontFamily: FONT_HEAD, fontWeight: 600, fontSize: 'clamp(1.05rem, 1.1vw, 1.3rem)', lineHeight: 1.3 },
    h5: { fontFamily: FONT_HEAD, fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.4 },
    // 국문 본문 (Pretendard)
    subtitle1: { fontFamily: FONT_BODY, fontWeight: 500, fontSize: '1.125rem', lineHeight: 1.6 },
    subtitle2: { fontFamily: FONT_BODY, fontWeight: 500, fontSize: '0.9375rem', lineHeight: 1.6 },
    body1: { fontFamily: FONT_BODY, fontWeight: 400, fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontFamily: FONT_BODY, fontWeight: 400, fontSize: '0.875rem', lineHeight: 1.7 },
    caption: { fontFamily: FONT_BODY, fontWeight: 400, fontSize: '0.75rem', lineHeight: 1.6 },
    button: { fontFamily: FONT_BODY, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'none' },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#000000', overflowX: 'hidden' },
        '::selection': { background: '#F81D21', color: '#FFFFFF' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: false },
    },
  },
})

export default theme
