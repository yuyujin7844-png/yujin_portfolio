import { Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';

// 단계별 섹션 제목 (예: 컨셉 선택, 옵션 선택) — 24px Bold
export default function SectionHeading({ children, sx }) {
  return (
    <Typography
      component="h3"
      sx={{ fontFamily: FONT_KO, fontWeight: 700, fontSize: 24, lineHeight: '35px', color: COLORS.ink, ...sx }}
    >
      {children}
    </Typography>
  );
}
