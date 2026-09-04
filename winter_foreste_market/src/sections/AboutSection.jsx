import { Box, Typography, Stack } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, DEEP_GREEN } from '../theme.js';
import { EVENT } from '../data/eventInfo.js';

const mug = `${import.meta.env.BASE_URL}mug-and-ticket.jpg`;

export default function AboutSection() {
  return (
    <PaperSection id="about">
      <SectionTitle en="About" />

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Box
          component="img"
          src={mug}
          alt="겨울 숲 마켓의 뱅쇼와 한정판 머그컵"
          loading="lazy"
          sx={{
            width: { xs: '100%', md: '50%' },
            aspectRatio: '4 / 3',
            objectFit: 'cover',
            border: `1px solid ${GOLD}`,
            boxShadow: `6px 6px 0 ${GOLD}33`,
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {EVENT.nameEn}는 겨울밤의 태화강 국가정원을 작은 유럽식 크리스마스 마켓으로
            물들이는 행사입니다. 만남의 광장에 나무 부스와 따뜻한 조명을 두르고,
            지역 작가의 수공예품과 겨울 먹거리, 뱅쇼와 핫코코아를 나눕니다.
          </Typography>
          <Typography variant="body1">
            올해는 <Box component="span" sx={{ color: DEEP_GREEN, fontWeight: 700 }}>2026 · 1st</Box> 에디션으로,
            {' '}{EVENT.dateRangeKo} 사흘간 매일 {EVENT.timeRange}에 문을 엽니다.
            입장은 무료이며, 사전 예약자에게는 한정판 머그컵을 드립니다.
          </Typography>
        </Box>
      </Stack>
    </PaperSection>
  );
}
