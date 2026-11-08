import { createTheme } from '@mui/material/styles';

// ── 컬러 토큰 (피그마 LEUCOS_main 시안 기준) ─────────────────────
export const COLORS = {
  white: '#FFFFFF',
  green: '#305E45', // 섹션 타이틀, 로고
  greenDeep: '#1C511C', // 세트 상품명
  forest: '#24362C', // 푸터 연락처
  ink: '#11251A', // 히어로 타이틀
  black: '#070F0B', // CTA 버튼
  text: '#181818', // 기본 본문 / 상품명
  textSub: '#222222', // 상품 용량
  body: '#59595B', // 설명 문단
  story: '#777D7A', // 브랜드 스토리 문단
  sub: '#555555', // 섹션 서브 타이틀
  gnb: '#5C5C5C',
  caption: '#999999',
  red: '#FE0000', // 상품 가격
  priceSet: '#26311F', // 세트 할인가
  priceOld: '#B2B9AD', // 세트 정가(취소선)
  line: '#EBEBEB', // 상품 카드 테두리
  cream: '#F2F4F1', // 수딩 라인 섹션 배경, CTA 텍스트
  mint: '#E6EFE0', // 세트 정보 박스
  headerBg: 'rgba(242, 244, 241, 0.29)',
  overlay: 'rgba(65, 76, 64, 0.7)', // 스토리 카드 hover 오버레이
  footerBg: '#E4E6E5',
  footerText: '#6B6B6B',
  footerBar: '#101613',
  copyright: '#C4C4C4',
  notice: '#BEBBBB',
};

export const FONT = '"Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif';

// ── 레이아웃 토큰 — 1920 기준, 좌우 마진 240 / 콘텐츠 1440 ────────
export const CONTENT_MAX_WIDTH = 1440;
export const PAGE_PX = { xs: '20px', md: '40px' };
export const HEADER_HEIGHT = { xs: 64, md: 90 };

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: COLORS.green, contrastText: COLORS.white },
    secondary: { main: COLORS.black, contrastText: COLORS.cream },
    background: { default: COLORS.white, paper: COLORS.white },
    text: { primary: COLORS.text, secondary: COLORS.body },
    divider: COLORS.line,
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: FONT,
    button: { fontFamily: FONT, fontWeight: 500, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: COLORS.white, color: COLORS.text, wordBreak: 'keep-all' },
        img: { display: 'block' },
        // 고정 헤더에 가려지지 않도록 앵커 이동 시 여백
        '[id]': { scrollMarginTop: 90 },
      },
    },
  },
});

export default theme;
