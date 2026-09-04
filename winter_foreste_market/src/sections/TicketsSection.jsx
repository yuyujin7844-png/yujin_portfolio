import { Box, Typography, Stack, Button } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, DEEP_GREEN, CREAM } from '../theme.js';

const MUG_PHOTOS = [
  { key: 'red', caption: 'Red Front Ver.', image: `${import.meta.env.BASE_URL}mug-red-front.jpg` },
  { key: 'green', caption: 'Green Front Ver.', image: `${import.meta.env.BASE_URL}mug-green-front.jpg` },
  { key: 'back', caption: 'Back', image: `${import.meta.env.BASE_URL}mug-back.jpg` },
];

const RULES = [
  '사전 예약자에게 2026 한정판 머그컵을 드립니다. 뱅쇼 또는 핫코코아를 이 머그컵에 담아 제공합니다.',
  '티켓은 레드 · 그린 2종 중 하나를 선택할 수 있습니다.',
  '1인 1일 1매만 예약할 수 있습니다.',
  '티켓이 없어도 입장은 가능하지만, 음료는 일회용컵으로 제공됩니다.',
  '머그컵은 매년 다른 디자인의 한정판으로 제작됩니다.',
];

export default function TicketsSection({ onReserve }) {
  return (
    <PaperSection id="tickets" sx={{ backgroundColor: DEEP_GREEN, color: CREAM }}>
      <SectionTitle
        en="Ticket"
        ko="이 페이지의 핵심입니다. 마음에 드는 티켓을 골라 사전 예약하고, 행사 당일 한정판 머그컵을 받아 가세요."
        dark
      />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: 4,
          mb: 6,
        }}
      >
        {MUG_PHOTOS.map((m) => (
          <Box
            key={m.key}
            sx={{ width: { xs: '100%', sm: '30%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}
          >
            <Box
              component="img"
              src={m.image}
              alt={`2026 한정판 머그컵 — ${m.caption}`}
              loading="lazy"
              sx={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', backgroundColor: CREAM }}
            />
            <Typography variant="caption" sx={{ color: `${CREAM}bb`, letterSpacing: '0.06em' }}>
              {m.caption}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 예약 규칙 */}
      <Box sx={{ borderTop: `1px solid ${GOLD}55`, pt: 4 }}>
        <Typography variant="subtitle2" sx={{ color: GOLD, mb: 2, letterSpacing: '0.04em' }}>
          티켓 예약 안내
        </Typography>
        <Stack spacing={1.5}>
          {RULES.map((rule, i) => (
            <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
              <Box component="span" sx={{ color: GOLD, lineHeight: 1.9, flexShrink: 0 }}>
                ✦
              </Box>
              <Typography variant="body1" sx={{ color: `${CREAM}e0` }}>{rule}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => onReserve()}
          sx={{
            px: 5,
            py: 1.6,
            borderColor: GOLD,
            color: GOLD,
            '&:hover': { borderColor: GOLD, backgroundColor: `${GOLD}1A` },
          }}
        >
          티켓 구매하기
        </Button>
      </Box>
    </PaperSection>
  );
}
