import { createTheme } from '@mui/material/styles';

// ── 컬러 토큰 (피그마 Sometody_main 시안 기준) ─────────────────────
export const COLORS = {
  bg: '#FDFFFF', // 페이지 배경 / 버튼 텍스트
  ink: '#272F32', // 메인 타이틀, 예약 버튼, 카피라이트 바
  text: '#474E51', // GNB, About 본문
  textSoft: 'rgba(65, 68, 69, 0.78)', // 히어로 설명
  textEn: 'rgba(10, 62, 77, 0.44)', // About 영문 본문
  muted: '#767575', // 리뷰 본문
  sky: '#9DBDC6', // Review 섹션 배경, 플로팅 버튼 테두리
  skyLine: '#C7D7DB', // Review 구분선
  deep: '#0C3C4A', // 맨 위로 버튼
  navy: '#04181D', // 플로팅 메뉴 라벨
  slate: '#506368', // 리뷰 컨셉명
  border: '#E0E0E0', // 컨셉 카드 테두리
  divider: '#EAEAEA', // 리뷰 카드 구분선
  headerLine: 'rgba(194, 171, 149, 0.63)', // 헤더 하단 라인
  footerBg: '#F0F0F0',
  footerText: '#727272',
  copyright: '#B1B1B1',
  // ── 예약하기 페이지 ──
  gnbSub: '#2A2C2C', // 서브 헤더 GNB
  gnbActive: '#050F14', // 서브 헤더 현재 메뉴
  body: '#333333', // 옵션/달력 본문
  cardLine: '#A2A2A2', // 컨셉 선택 카드 테두리
  inputLine: '#767676', // 셀렉트 박스 테두리
  stepperBg: '#D9D9D9',
  stepperLine: '#969696',
  stepperBtn: '#EFEFEF',
  disabled: '#878787', // 마감 날짜
  holiday: '#E30000', // 공휴일
};

export const FONT_KO = '"Noto Sans KR", "Roboto", sans-serif';
export const FONT_EN = '"Roboto", "Noto Sans KR", sans-serif';

// ── 레이아웃 토큰 — 1920 기준, 좌우 마진 240 / 콘텐츠 1440 ────────
export const CONTENT_MAX_WIDTH = 1440;
export const PAGE_PX = { xs: '20px', lg: '40px' };

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: COLORS.ink, contrastText: COLORS.bg },
    secondary: { main: COLORS.sky, contrastText: COLORS.bg },
    background: { default: COLORS.bg, paper: COLORS.bg },
    text: { primary: COLORS.ink, secondary: COLORS.text },
    divider: COLORS.border,
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: FONT_KO,
    button: { fontFamily: FONT_KO, fontWeight: 500, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { backgroundColor: COLORS.bg, color: COLORS.ink, wordBreak: 'keep-all' },
        img: { display: 'block' },
      },
    },
  },
});

export default theme;
