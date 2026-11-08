import { Button } from '@mui/material';
import { COLORS, FONT_EN } from '../../theme.js';

// 피그마 btn 컴포넌트 (370×70) — default #272F32, hover #9DBDC6
// variant="outlined" 는 '이전' 버튼용 (시안 외 추가)
export default function ActionButton({ children, variant = 'contained', sx, ...props }) {
  const outlined = variant === 'outlined';
  return (
    <Button
      variant={variant}
      {...props}
      sx={{
        width: { xs: '100%', sm: 370 },
        height: 70,
        borderRadius: '4px',
        fontFamily: FONT_EN,
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 'normal',
        whiteSpace: 'pre',
        transition: 'background-color .2s, color .2s, border-color .2s',
        ...(outlined
          ? {
              color: COLORS.ink,
              borderColor: COLORS.ink,
              '&:hover': { borderColor: COLORS.sky, bgcolor: 'transparent', color: COLORS.sky },
            }
          : {
              bgcolor: COLORS.ink,
              color: COLORS.bg,
              '&:hover': { bgcolor: COLORS.sky, fontWeight: 500 },
              '&.Mui-disabled': { bgcolor: '#C4C9CB', color: COLORS.bg },
            }),
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
