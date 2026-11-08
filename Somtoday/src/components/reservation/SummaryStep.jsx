import { Box, Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { won } from '../../utils/format.js';
import { getPriceLines } from '../../utils/price.js';
import SectionHeading from './SectionHeading.jsx';
import TotalPrice from './TotalPrice.jsx';

// 총액 확인 — 시안이 없어 옵션 카드와 같은 스타일로 내역 표를 구성
export default function SummaryStep({ form, total }) {
  const lines = getPriceLines(form);

  return (
    <Box>
      <SectionHeading>총액 확인</SectionHeading>
      <Box
        component="dl"
        sx={{
          mt: { xs: '40px', md: '100px' },
          mb: 0,
          px: { xs: '20px', md: '50px' },
          py: '20px',
          bgcolor: '#FFFFFF',
          borderRadius: '6px',
          boxShadow: 'inset 0px 0px 5px 0px rgba(146, 146, 146, 0.5)',
        }}
      >
        {lines.map((line) => (
          <Box
            key={line.label}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr auto', md: '200px 1fr auto' },
              alignItems: 'center',
              columnGap: '20px',
              py: '22px',
              '& + &': { borderTop: `1px solid ${COLORS.divider}` },
            }}
          >
            <Typography component="dt" sx={{ fontFamily: FONT_KO, fontWeight: 700, fontSize: 20, color: COLORS.sky }}>
              {line.label}
            </Typography>
            <Typography
              component="dd"
              sx={{ m: 0, gridRow: { xs: 2, md: 'auto' }, fontFamily: FONT_KO, fontSize: 18, color: COLORS.body }}
            >
              {line.detail}
            </Typography>
            <Typography
              component="dd"
              sx={{ m: 0, gridRow: { xs: '1 / span 2', md: 'auto' }, gridColumn: { xs: 2, md: 'auto' }, fontFamily: FONT_KO, fontWeight: 500, fontSize: 22, color: COLORS.body }}
            >
              {won(line.amount)}
            </Typography>
          </Box>
        ))}
      </Box>
      <TotalPrice total={total} sx={{ mt: { xs: '60px', md: '100px' } }} />
    </Box>
  );
}
