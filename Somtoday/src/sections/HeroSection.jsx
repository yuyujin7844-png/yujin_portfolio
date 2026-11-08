import { Box, Button, Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../theme.js';
import { asset, RESERVATION_URL } from '../utils/asset.js';

// 1920×1056 시안 — 높이는 화면 폭에 비례, 이미지 크롭 비율도 시안과 동일하게 유지
export default function HeroSection() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 720, md: 'calc(100vw * 1056 / 1920)' },
        minHeight: { md: 640 },
      }}
    >
      <Box
        component="img"
        src={asset('img/hero.webp')}
        alt="종이비행기를 들고 웃는 아이"
        fetchPriority="high"
        sx={{
          position: 'absolute',
          left: '-1.209%',
          top: '-1.027%',
          width: '103.032%',
          height: '104.550%',
          maxWidth: 'none',
          objectFit: 'cover',
          objectPosition: { xs: '30% center', md: 'center' },
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: 'calc(50% + 202px)' },
          right: { xs: 20, md: 'auto' },
          top: { xs: 'auto', md: '36.08%' },
          bottom: { xs: 48, md: 'auto' },
          ...{ '@media (max-width: 899px)': { p: 3, bgcolor: 'rgba(253,255,255,0.78)' } },
        }}
      >
        <Typography
          component="h1"
          sx={{ fontFamily: FONT_KO, fontSize: { xs: 32, md: 40, lg: 48 }, lineHeight: 'normal', color: COLORS.ink, whiteSpace: 'nowrap' }}
        >
          언젠가 그리워 할, 오늘
        </Typography>
        <Typography
          sx={{ mt: '23px', fontFamily: FONT_KO, fontSize: { xs: 14, md: 16 }, lineHeight: '24px', color: COLORS.textSoft }}
        >
          <Box component="span" sx={{ letterSpacing: '-1.12px' }}>
            내일은 볼 수 없는 아이들의 오늘의 사랑스러운 모습을 기록합니다.
          </Box>
          <br />
          <Box component="span" sx={{ letterSpacing: '-0.64px' }}>
            someday와 함께 언젠가 그리워 할 그 날의 시간을 남겨보세요.
          </Box>
        </Typography>
        <Button
          id="reserve"
          href={RESERVATION_URL}
          variant="contained"
          sx={{
            mt: { xs: '32px', md: '80px' },
            width: { xs: '100%', sm: 286 },
            height: 56,
            borderRadius: '4px',
            bgcolor: COLORS.ink,
            color: COLORS.bg,
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 'normal',
            '&:hover': { bgcolor: COLORS.deep },
          }}
        >
          예약 하기
        </Button>
      </Box>
    </Box>
  );
}
