import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GOLD, BURGUNDY, CREAM } from '../theme.js';
import { EVENT } from '../data/eventInfo.js';

const symbolFull = `${import.meta.env.BASE_URL}symbol-full.svg`;

const INFO_ROWS = [
  { label: '일시', value: EVENT.dateRangeShort },
  { label: '시간', value: EVENT.timeRange },
  { label: '장소', value: EVENT.venue },
];

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
        backgroundColor: BURGUNDY,
        color: CREAM,
        // 포스터의 세로 줄무늬 테두리를 절제해서 인용
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: 14,
          backgroundImage: `repeating-linear-gradient(180deg, #2E0D12 0 14px, ${BURGUNDY} 14px 28px)`,
          opacity: 0.6,
        },
        '&::before': { left: 0 },
        '&::after': { right: 0 },
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={2.5} alignItems="center">
          <Box
            component="img"
            src={symbolFull}
            alt="Winter Forest Market in Taehwa 심볼"
            sx={{ width: { xs: 96, md: 116 }, height: 'auto' }}
          />

          <Box>
            <Typography variant="overline" sx={{ display: 'block', color: GOLD }}>
              {EVENT.edition}
            </Typography>
            <Typography variant="overline" sx={{ display: 'block', color: GOLD }}>
              Christmas Market
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: GOLD,
              fontSize: { xs: '2.6rem', md: '3.8rem' },
              lineHeight: 1.05,
            }}
          >
            Winter Forest Market
            <Box component="span" sx={{ display: 'block', fontStyle: 'italic', fontWeight: 500, fontSize: '0.45em', mt: 1.5, color: CREAM }}>
              in Taehwa
            </Box>
          </Typography>

          <Box sx={{ width: 60, height: '1px', backgroundColor: `${GOLD}99`, my: 1 }} />

          {/* 일시 · 시간 · 장소 */}
          <Stack spacing={1} sx={{ display: 'inline-flex', alignItems: 'flex-start' }}>
            {INFO_ROWS.map((row) => (
              <Stack key={row.label} direction="row" spacing={1.5} alignItems="baseline">
                <Box component="span" sx={{ color: GOLD, fontSize: '0.7rem' }}>
                  ●
                </Box>
                <Typography variant="body2" sx={{ color: `${CREAM}cc`, minWidth: 40 }}>
                  {row.label}
                </Typography>
                <Typography variant="body2" sx={{ color: CREAM, fontWeight: 700 }}>
                  {row.value}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Button
            variant="outlined"
            size="large"
            onClick={onReserve}
            sx={{
              mt: 2,
              px: 5,
              py: 1.6,
              borderColor: GOLD,
              color: GOLD,
              '&:hover': { borderColor: GOLD, backgroundColor: `${GOLD}1A` },
            }}
          >
            티켓 구매하기
          </Button>
          <Typography variant="caption" sx={{ color: `${CREAM}99` }}>
            입장료 무료 · 사전 예약자에게 2026 한정판 머그컵 증정
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
