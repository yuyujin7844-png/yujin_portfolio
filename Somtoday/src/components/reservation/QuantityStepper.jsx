import { Box, ButtonBase } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { MAX_QTY } from '../../data/reservation.js';

const textSx = { fontFamily: FONT_KO, fontWeight: 500, fontSize: 22, lineHeight: 1, color: COLORS.body };

// 피그마 수량 버튼 (150×40) — 시안대로 왼쪽 +, 가운데 수량, 오른쪽 -
export default function QuantityStepper({ value, onChange, label, sx }) {
  const btnSx = {
    ...textSx,
    width: 40,
    height: '100%',
    bgcolor: COLORS.stepperBtn,
    transition: 'background-color .2s',
    '&:hover': { bgcolor: '#E2E2E2' },
    '&.Mui-disabled': { color: '#B5B5B5' },
  };

  return (
    <Box
      role="group"
      aria-label={`${label} 수량`}
      sx={{
        display: 'flex',
        width: 150,
        height: 40,
        border: `1px solid ${COLORS.stepperLine}`,
        borderRadius: '10px',
        overflow: 'hidden',
        bgcolor: COLORS.stepperBg,
        ...sx,
      }}
    >
      <ButtonBase
        aria-label={`${label} 늘리기`}
        disabled={value >= MAX_QTY}
        onClick={() => onChange(value + 1)}
        sx={{ ...btnSx, borderRadius: '10px 0 0 10px' }}
      >
        +
      </ButtonBase>
      <Box
        aria-live="polite"
        sx={{ ...textSx, flex: 1, bgcolor: COLORS.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {value}
      </Box>
      <ButtonBase
        aria-label={`${label} 줄이기`}
        disabled={value <= 0}
        onClick={() => onChange(value - 1)}
        sx={{ ...btnSx, borderRadius: '0 10px 10px 0' }}
      >
        -
      </ButtonBase>
    </Box>
  );
}
