import { Box, Typography, Stack } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, DEEP_GREEN } from '../theme.js';
import { EVENT } from '../data/eventInfo.js';

const map = `${import.meta.env.BASE_URL}map.jpg`;

export default function LocationSection() {
  return (
    <PaperSection id="location">
      <SectionTitle en="Location" />

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
        <Box
          component="img"
          src={map}
          alt={`${EVENT.venue} 안내도`}
          loading="lazy"
          sx={{
            width: { xs: '100%', md: '52%' },
            objectFit: 'contain',
            border: `1px solid ${GOLD}`,
            boxShadow: `6px 6px 0 ${GOLD}33`,
          }}
        />

        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle2" sx={{ color: DEEP_GREEN, mb: 1, letterSpacing: '0.04em' }}>
            주소
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {EVENT.venue}
            <br />
            {EVENT.address}
          </Typography>

          <Typography variant="subtitle2" sx={{ color: DEEP_GREEN, mb: 1, letterSpacing: '0.04em' }}>
            대중교통 안내
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            태화강 국가정원 인근 정류장에서 하차한 뒤, 안내도의 만남의 광장 방면으로
            이동하시면 됩니다. 정확한 버스 노선과 배차는 방문일 기준
            울산광역시 대중교통 안내에서 확인해 주세요.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            자가용 이용 시 만남의 광장 주차장을 이용할 수 있으며, 행사 기간에는
            혼잡할 수 있으니 대중교통 이용을 권장합니다.
          </Typography>

          <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${GOLD}55` }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              행사 기간 · {EVENT.dateRangeKo}
              <br />
              운영 시간 · 매일 {EVENT.timeRange}
              <br />
              문의 · {EVENT.contact}
            </Typography>
          </Box>
        </Box>
      </Stack>
    </PaperSection>
  );
}
