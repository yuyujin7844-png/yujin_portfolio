import { Box, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { STEPS } from '../../data/reservation.js';
import { asset } from '../../utils/asset.js';

// 1440 기준 각 화살표 도형의 x / 폭 (피그마 좌표)
const SHAPES = [
  { x: 0, w: 323.254 },
  { x: 280.9, w: 321.29 },
  { x: 559.84, w: 321.29 },
  { x: 838.77, w: 321.29 },
  { x: 1117.71, w: 321.29 },
];
const pct = (v, base) => `${(v / base) * 100}%`;

// 시안에 없는 상태(2~5단계의 현재/완료)는 같은 도형을 CSS로 채워서 표현
const FIRST_CLIP = 'polygon(0 0, 83.08% 0, 100% 50%, 83.08% 100%, 0 100%)';
const NOTCH_CLIP = 'polygon(0 0, 82.98% 0, 100% 50%, 82.98% 100%, 0 100%, 17.02% 50%)';

export default function StepIndicator({ current }) {
  return (
    <Box
      component="ol"
      aria-label="예약 진행 단계"
      sx={{ position: 'relative', height: { xs: 64, md: 91 }, m: 0, p: 0, listStyle: 'none' }}
    >
      {STEPS.map((name, i) => {
        const { x, w } = SHAPES[i];
        const state = i === current ? 'current' : i < current ? 'done' : 'todo';
        const isFirst = i === 0;
        const light = state !== 'todo';
        // 1단계 '현재' / 2~5단계 '예정' 은 피그마 SVG 그대로 사용
        const useAsset = (isFirst && state === 'current') || (!isFirst && state === 'todo');

        return (
          <Box
            component="li"
            key={name}
            aria-current={state === 'current' ? 'step' : undefined}
            sx={{ position: 'absolute', top: 0, bottom: 0, left: pct(x, 1440), width: pct(w, 1440) }}
          >
            {useAsset ? (
              <Box
                component="img"
                src={asset(`ic/step-${i + 1}.svg`)}
                alt=""
                width={w}
                height={91}
                sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              />
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: state === 'current' ? COLORS.deep : COLORS.sky,
                  clipPath: isFirst ? FIRST_CLIP : NOTCH_CLIP,
                }}
              />
            )}
            <Typography
              sx={{
                position: 'absolute',
                top: { xs: 8, md: 13 },
                left: isFirst ? '5.9%' : '16.5%',
                fontFamily: FONT_EN,
                fontWeight: light ? 500 : 400,
                fontSize: { xs: 11, md: 16 },
                lineHeight: 'normal',
                color: light ? COLORS.bg : COLORS.text,
                whiteSpace: 'nowrap',
              }}
            >
              Step {i + 1}
            </Typography>
            <Typography
              sx={{
                position: 'absolute',
                top: { xs: 30, md: 31 },
                left: isFirst ? '46.9%' : '54.5%',
                transform: 'translateX(-50%)',
                display: { xs: state === 'current' ? 'block' : 'none', md: 'block' },
                fontFamily: FONT_KO,
                fontWeight: 500,
                fontSize: { xs: 12, md: 16, lg: 20 },
                lineHeight: '29px',
                color: light ? COLORS.bg : COLORS.text,
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
