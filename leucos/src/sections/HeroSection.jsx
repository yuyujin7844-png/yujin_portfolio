import { Box, Button, Typography } from '@mui/material';
import Container from '../components/ui/Container.jsx';
import { COLORS, PAGE_PX } from '../theme.js';
import { asset } from '../utils/asset.js';

const BUTTON_WIDTH = { xs: 240, lg: 364 };

// 히어로 — 1920 × 1029, 배경 이미지를 2200px로 확대해 오른쪽 제품이 보이도록 배치
export default function HeroSection() {
  return (
    <Box
      component="section"
      id="top"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 640, sm: 720, md: 820, lg: 1029 },
        bgcolor: '#BFBEB8',
      }}
    >
      <Box
        component="img"
        src={asset('img/hero.webp')}
        alt="티트리 가지와 LEUCOS 수딩 라인 토너, 세럼, 크림"
        fetchPriority="high"
        sx={{
          position: 'absolute',
          maxWidth: 'none',
          objectFit: 'cover',
          // 모바일·태블릿: 꽉 채우고 제품 쪽(오른쪽)을 보여준다
          inset: 0,
          width: '100%',
          height: '100%',
          objectPosition: { xs: '78% 50%', md: '90% 50%' },
          // 데스크톱: 피그마 배치 그대로 (높이 1228 = 히어로의 119.36%, 위로 99px, 오른쪽 끝 기준)
          // 높이 기준으로 맞춰야 1920보다 좁은 화면에서도 히어로를 꽉 채운다
          '@media (min-width: 1200px)': {
            inset: 'auto',
            top: '-9.62%',
            right: '-1.4%',
            width: 'auto',
            height: '119.36%',
          },
        }}
      />
      {/* 모바일·태블릿에서 텍스트 가독성을 위한 옅은 그라데이션 */}
      <Box
        sx={{
          display: { xl: 'none' },
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(242,244,241,.85) 0%, rgba(242,244,241,.55) 45%, rgba(242,244,241,0) 70%)',
            md: 'linear-gradient(90deg, rgba(242,244,241,.8) 0%, rgba(242,244,241,.5) 45%, rgba(242,244,241,0) 70%)',
          },
        }}
      />

      <Container sx={{ height: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            // Container의 좌우 패딩(PAGE_PX)만큼 들여서 콘텐츠 시작선(1920 기준 240px)에 맞춤
            left: PAGE_PX,
            right: PAGE_PX,
            top: { xs: 120, sm: 150, md: 260, lg: 383 },
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{ fontWeight: 500, fontSize: { xs: 30, sm: 38, lg: 48 }, color: COLORS.ink, lineHeight: 'normal' }}
            >
              A quiet day for your skin.
            </Typography>
            <Typography
              sx={{
                mt: { xs: '12px', lg: '27px' },
                fontWeight: 300,
                fontSize: { xs: 17, sm: 20, lg: 24 },
                color: COLORS.text,
                lineHeight: 1.5,
              }}
            >
              호주 티트리 잎 오일로 완성한 세 단계 진정 루틴
            </Typography>
          </Box>

          {/* 버튼 중앙 위 세로 그라데이션 라인 (110px) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', width: BUTTON_WIDTH, mt: '38px', mb: '55px' }}>
            <Box sx={{ position: 'relative', width: '1px', height: 110 }}>
              {/* 피그마의 가로 라인(110 × 1)을 90° 회전 */}
              <Box
                component="img"
                src={asset('ic/line46.svg')}
                alt=""
                width={110}
                height={1}
                sx={{ position: 'absolute', left: '50%', top: '50%', maxWidth: 'none', transform: 'translate(-50%, -50%) rotate(90deg)' }}
              />
            </Box>
          </Box>

          <Button
            href="#line"
            sx={{
              mt: { xs: '32px', md: 0 },
              width: BUTTON_WIDTH,
              height: { xs: 54, lg: 69 },
              bgcolor: COLORS.black,
              color: COLORS.cream,
              fontSize: { xs: 18, lg: 26 },
              fontWeight: 500,
              borderRadius: 0,
              transition: 'background-color .25s, color .25s',
              '&:hover': { bgcolor: COLORS.green, color: COLORS.white },
            }}
          >
            SHOP THE LINE
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
