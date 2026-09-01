import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GOLD, BURGUNDY, DEEP_GREEN, CREAM } from '../theme.js';
import { EVENT } from '../data/eventInfo.js';

const symbolFull = `${import.meta.env.BASE_URL}symbol-full.svg`;

export default function HeroSection({ onReserve }) {
  return (
    <Box
      id="top"
      component="section"
      sx={{
        position: 'relative',
        textAlign: 'center',
        px: 2,
        pt: { xs: 8, md: 12 },
        pb: { xs: 9, md: 13 },
        // 포스터의 세로 줄무늬 테두리를 절제해서 인용
        borderTop: `6px solid ${BURGUNDY}`,
        borderBottom: `1px solid ${GOLD}55`,
        '&::before': {
          content: '""',
          position: 'absolute',
          insetInline: 0,
          top: 6,
          height: 10,
          backgroundImage: `repeating-linear-gradient(90deg, ${BURGUNDY} 0 14px, transparent 14px 28px)`,
          opacity: 0.5,
        },
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={3} alignItems="center">
          <Box
            component="img"
            src={symbolFull}
            alt="Winter Forest Market in Taehwa 심볼"
            sx={{ width: { xs: 140, md: 180 }, height: 'auto' }}
          />

          <Typography variant="overline" sx={{ color: DEEP_GREEN }}>
            {EVENT.edition}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: BURGUNDY,
              fontSize: { xs: '2.6rem', md: '3.8rem' },
              lineHeight: 1.05,
            }}
          >
            Winter Forest
            <br />
            Market
            <Box component="span" sx={{ display: 'block', fontStyle: 'italic', fontWeight: 500, fontSize: '0.5em', mt: 1, color: DEEP_GREEN }}>
              in Taehwa
            </Box>
          </Typography>

          {/* 날짜 */}
          <Stack direction="row" spacing={{ xs: 2, md: 3 }} alignItems="center" sx={{ color: DEEP_GREEN }}>
            {EVENT.dates.map((d, i) => (
              <Box key={d.iso} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 } }}>
                {i > 0 && <Box sx={{ width: '1px', height: 34, backgroundColor: `${GOLD}88` }} />}
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, lineHeight: 1 }}>
                    {d.short}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            2026년 12월 · {EVENT.timeRange} · {EVENT.venue}
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={onReserve}
            sx={{ mt: 1, px: 5, py: 1.6, backgroundColor: BURGUNDY, color: CREAM }}
          >
            티켓 예약하기
          </Button>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            입장료 무료 · 사전 예약자에게 2026 한정판 머그컵 증정
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
