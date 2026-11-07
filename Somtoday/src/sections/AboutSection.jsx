import { Box, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../theme.js';
import { asset } from '../utils/asset.js';

// 데스크톱(md 이상)에서만 시안과 같은 위치에서 줄바꿈
const DesktopBreak = () => <Box component="br" sx={{ display: { xs: 'none', md: 'inline' } }} />;

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: 'relative',
        minHeight: 848,
        pt: { xs: '120px', md: '207px' },
        pb: { xs: '120px', md: '221px' },
        px: '20px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* 배경: 종이 질감(multiply 8%) + 하늘색 그라데이션 */}
      <Box aria-hidden sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box
          component="img"
          src={asset('img/about-texture.webp')}
          alt=""
          sx={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply', opacity: 0.08 }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(253,255,255,0) 0%, rgba(218,234,239,0.5) 100%)',
          }}
        />
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Typography sx={{ fontFamily: FONT_EN, fontSize: 32, lineHeight: '38px', color: '#000' }}>About</Typography>
        <Typography
          component="h2"
          sx={{ mt: '16px', fontFamily: FONT_EN, fontWeight: 500, fontSize: { xs: 56, md: 76 }, lineHeight: '89px', color: COLORS.ink }}
        >
          Sometoday
        </Typography>
        <Typography sx={{ mt: '93px', fontFamily: FONT_KO, fontSize: { xs: 17, md: 20 }, lineHeight: 1.5, color: COLORS.text }}>
          아이는 매일 조금씩 달라집니다. Sometoday는 특별한 하루가 아니라, 다시 오지 않을 오늘을
          <DesktopBreak /> 남기는 스튜디오입니다. 하루를 온전히 보내실 수 있도록, 우리 아이의 오늘을 기록합니다.
        </Typography>
        <Typography sx={{ mt: '43px', fontFamily: FONT_EN, fontSize: { xs: 16, md: 18 }, lineHeight: 1.5, color: COLORS.textEn }}>
          Children change a little every day. Sometoday is not about the special day. It&apos;s about the ordinary one
          <DesktopBreak /> you won&apos;t get back. So that you can be fully present on that day, we tell you everything you need
          <DesktopBreak /> to know beforehand.
        </Typography>
      </Box>
    </Box>
  );
}
