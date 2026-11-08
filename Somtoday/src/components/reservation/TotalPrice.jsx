import { Box, Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { asset } from '../../utils/asset.js';
import { won } from '../../utils/format.js';

// 하늘색 구분선 + 우측 "총 금액 / 157,000원"
export default function TotalPrice({ total, sx }) {
  return (
    <Box sx={sx}>
      <Box component="img" src={asset('ic/line-total.svg')} alt="" width={1440} height={1} sx={{ width: '100%' }} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '40px' }}>
        <Box sx={{ position: 'relative', pt: '39px' }}>
          {/* 라벨은 금액 왼쪽 끝에 맞춰 위에 배치 (시안 기준) */}
          <Typography
            sx={{ position: 'absolute', top: 0, right: '100%', fontFamily: FONT_KO, fontSize: 20, lineHeight: '29px', color: COLORS.body, whiteSpace: 'nowrap' }}
          >
            총 금액
          </Typography>
          <Typography
            aria-live="polite"
            sx={{ fontFamily: FONT_KO, fontSize: { xs: 32, md: 40 }, lineHeight: '58px', color: COLORS.ink, whiteSpace: 'nowrap' }}
          >
            {won(total)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
