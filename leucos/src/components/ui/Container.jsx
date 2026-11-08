import { Box } from '@mui/material';
import { CONTENT_MAX_WIDTH, PAGE_PX } from '../../theme.js';

// 1920 기준 좌우 240px 마진 → 콘텐츠 폭 1440px 컨테이너
export default function Container({ children, sx }) {
  return (
    <Box
      sx={{
        boxSizing: 'content-box',
        maxWidth: CONTENT_MAX_WIDTH,
        mx: 'auto',
        px: PAGE_PX,
        position: 'relative',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
