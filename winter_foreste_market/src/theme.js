import { createTheme } from '@mui/material/styles';

// ── 컬러 토큰 (포스터/심볼 이미지에서 추출) ─────────────────────────
export const CREAM = '#F4EBD6';       // 낡은 종이 바탕
export const CREAM_DEEP = '#EADFC4';  // 종이 그림자 톤
export const BURGUNDY = '#6B1F2A';    // poster1 줄무늬 / 레드 티켓
export const DEEP_GREEN = '#1B3A2F';  // poster2 줄무늬 / 그린 티켓
export const GOLD = '#B7872D';        // 심볼 SVG stroke/fill
export const GOLD_SOFT = '#C9A253';
export const INK = '#2E2A22';         // 본문 텍스트 (다크 브라운)

// 영문 세리프 / 한글 세리프
const SERIF_EN = '"Playfair Display", "Nanum Myeongjo", serif';
const SERIF_KO = '"Nanum Myeongjo", "Playfair Display", serif';

// 한글 본문은 영문 대비 92% 크기 (0.92em)
const KO_SCALE = 0.92;

// ── 레이아웃 토큰 — 모든 섹션이 이 값을 기준으로 정렬된다 ──────────
export const CONTENT_MAX_WIDTH = 1400;
export const SECTION_PX = { xs: 2.5, md: '60px' };

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: BURGUNDY, contrastText: CREAM },
    secondary: { main: DEEP_GREEN, contrastText: CREAM },
    background: { default: CREAM, paper: CREAM },
    text: { primary: INK, secondary: '#6E6552' },
    divider: `${GOLD}55`,
  },
  shape: { borderRadius: 0 },
  typography: {
    // 기본(본문) = 한글 명조
    fontFamily: SERIF_KO,
    // ── 헤드라인: 영문 디도네 세리프 ──
    h1: { fontFamily: SERIF_EN, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.1 },
    h2: { fontFamily: SERIF_EN, fontWeight: 700, letterSpacing: '-0.005em', lineHeight: 1.15 },
    h3: { fontFamily: SERIF_EN, fontWeight: 700, lineHeight: 1.2 },
    h4: { fontFamily: SERIF_EN, fontWeight: 600 },
    h5: { fontFamily: SERIF_EN, fontWeight: 600 },
    h6: { fontFamily: SERIF_EN, fontWeight: 600, letterSpacing: '0.02em' },
    // ── 본문: 한글 명조, 영문 대비 92% ──
    subtitle1: { fontFamily: SERIF_KO, fontSize: `${1.05 * KO_SCALE}rem`, lineHeight: 1.9 },
    subtitle2: { fontFamily: SERIF_KO, fontSize: `${0.95 * KO_SCALE}rem`, lineHeight: 1.85, fontWeight: 700 },
    body1: { fontFamily: SERIF_KO, fontSize: `${1 * KO_SCALE}rem`, lineHeight: 2 },
    body2: { fontFamily: SERIF_KO, fontSize: `${0.9 * KO_SCALE}rem`, lineHeight: 1.9 },
    button: {
      fontFamily: SERIF_KO,
      fontWeight: 700,
      fontSize: `${0.95 * KO_SCALE}rem`,
      letterSpacing: '0.06em',
      textTransform: 'none',
    },
    caption: { fontFamily: SERIF_KO, fontSize: `${0.8 * KO_SCALE}rem` },
    overline: { fontFamily: SERIF_EN, letterSpacing: '0.35em', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 30px',
          minHeight: 48,
          border: `1px solid ${GOLD}`,
          transition: 'background-color .25s ease, color .25s ease',
        },
        contained: {
          backgroundColor: BURGUNDY,
          color: CREAM,
          '&:hover': { backgroundColor: '#571821' },
        },
        outlined: {
          borderColor: GOLD,
          color: BURGUNDY,
          '&:hover': { borderColor: GOLD, backgroundColor: `${GOLD}1A` },
        },
        text: { border: 'none' },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': { boxSizing: 'border-box' },
        'html, body, #root': { margin: 0, padding: 0 },
        html: {
          scrollBehavior: 'smooth',
          // sticky 헤더(64px)에 섹션 앵커가 가려지지 않도록
          scrollPaddingTop: '72px',
        },
        body: {
          backgroundColor: CREAM,
          color: INK,
          // 낡은 종이 질감 — 은은한 얼룩 (그라데이션 남용 아님, 저대비)
          backgroundImage: [
            `radial-gradient(circle at 18% 12%, ${CREAM_DEEP}80 0%, transparent 42%)`,
            `radial-gradient(circle at 85% 78%, ${CREAM_DEEP}70 0%, transparent 40%)`,
            `radial-gradient(circle at 50% 50%, transparent 60%, ${CREAM_DEEP}55 100%)`,
          ].join(','),
          backgroundAttachment: 'fixed',
        },
        '::selection': { background: `${GOLD}44` },
      },
    },
  },
});

export default theme;
