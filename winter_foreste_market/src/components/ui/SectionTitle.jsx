import { Box, Typography } from '@mui/material';
import { GOLD, BURGUNDY, CREAM } from '../../theme.js';

/**
 * 섹션 제목 — 영문 세리프 헤드라인 + (선택) 한글 보조 설명.
 * 언어 규칙: 제목은 영문, 보조 설명은 한글.
 * `dark`(짙은 배경 섹션)에서는 제목을 골드, 보조 설명을 크림톤으로 반전한다.
 */
export default function SectionTitle({ en, ko, align = 'left', dark = false }) {
  return (
    <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          gap: 2,
          mb: ko ? 1.5 : 0,
        }}
      >
        <Box sx={{ width: 40, height: '1px', backgroundColor: GOLD }} />
        <Typography component="span" sx={{ color: GOLD, fontSize: '1.1rem' }}>
          ❄
        </Typography>
        <Box sx={{ width: 40, height: '1px', backgroundColor: GOLD }} />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: dark ? GOLD : BURGUNDY,
          fontSize: { xs: '2rem', md: '2.75rem' },
          fontStyle: 'italic',
        }}
      >
        {en}
      </Typography>
      {ko && (
        <Typography
          variant="body2"
          sx={{ color: dark ? `${CREAM}cc` : 'text.secondary', mt: 1.5, maxWidth: 560, mx: align === 'center' ? 'auto' : 0 }}
        >
          {ko}
        </Typography>
      )}
    </Box>
  );
}
