import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, BURGUNDY, DEEP_GREEN, CREAM } from '../theme.js';
import { TICKETS } from '../data/eventInfo.js';

const RULES = [
  '사전 예약자에게 2026 한정판 머그컵을 드립니다. 뱅쇼 또는 핫코코아를 이 머그컵에 담아 제공합니다.',
  '티켓은 레드 · 그린 2종 중 하나를 선택할 수 있습니다.',
  '1인 1일 1매만 예약할 수 있습니다.',
  '티켓이 없어도 입장은 가능하지만, 음료는 일회용컵으로 제공됩니다.',
  '머그컵은 매년 다른 디자인의 한정판으로 제작됩니다.',
];

export default function TicketsSection({ onReserve }) {
  return (
    <PaperSection id="tickets" maxWidth="md">
      <SectionTitle
        en="Tickets"
        ko="이 페이지의 핵심입니다. 마음에 드는 티켓을 골라 사전 예약하고, 행사 당일 한정판 머그컵을 받아 가세요."
      />

      <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 5 }}>
        {TICKETS.map((t) => (
          <Grid item xs={12} sm={6} key={t.type}>
            <Box
              sx={{
                border: `1px solid ${GOLD}`,
                p: { xs: 2, md: 2.5 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                backgroundColor: CREAM,
                boxShadow: `6px 6px 0 ${t.color}22`,
              }}
            >
              <Box
                component="img"
                src={t.image}
                alt={`${t.nameEn} 디자인 시안`}
                loading="lazy"
                sx={{ width: '100%', objectFit: 'contain', border: `1px solid ${GOLD}55` }}
              />
              <Typography
                variant="h6"
                sx={{ color: t.color, fontStyle: 'italic', fontFamily: '"Playfair Display", serif' }}
              >
                {t.nameEn}
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => onReserve(t.type)}
                sx={{
                  borderColor: t.color,
                  color: t.color,
                  '&:hover': { borderColor: t.color, backgroundColor: `${t.color}14` },
                }}
              >
                이 티켓으로 예약
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* 예약 규칙 */}
      <Box sx={{ borderTop: `1px solid ${GOLD}55`, pt: 4 }}>
        <Typography variant="subtitle2" sx={{ color: DEEP_GREEN, mb: 2, letterSpacing: '0.04em' }}>
          예약 안내
        </Typography>
        <Stack spacing={1.5}>
          {RULES.map((rule, i) => (
            <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
              <Box component="span" sx={{ color: GOLD, lineHeight: 1.9, flexShrink: 0 }}>
                ✦
              </Box>
              <Typography variant="body1">{rule}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => onReserve()}
          sx={{ px: 5, py: 1.6, backgroundColor: BURGUNDY, color: CREAM }}
        >
          티켓 예약하기
        </Button>
      </Box>
    </PaperSection>
  );
}
