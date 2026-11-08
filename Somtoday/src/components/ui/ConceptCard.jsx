import { Box, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { asset, RESERVATION_URL } from '../../utils/asset.js';
import CroppedImage from './CroppedImage.jsx';

const CARD_W = 625;
const CARD_H = 471;

export default function ConceptCard({ concept }) {
  const { no, title, desc, image, img, fade } = concept;
  return (
    <Box
      component="a"
      href={`${RESERVATION_URL}?concept=${no}`}
      aria-label={`${title} 컨셉으로 예약하기`}
      draggable={false}
      sx={{
        display: 'block',
        position: 'relative',
        flex: 'none',
        width: { xs: 320, md: CARD_W },
        aspectRatio: `${CARD_W} / ${CARD_H}`,
        border: `1px solid ${COLORS.border}`,
        overflow: 'hidden',
        '&:hover img': { transform: 'scale(1.04)' },
      }}
    >
      <CroppedImage
        src={asset(image)}
        alt={`${title} 컨셉 촬영 예시`}
        crop={img}
        frameW={CARD_W}
        frameH={CARD_H}
        sx={{ position: 'absolute', inset: 0, '& img': { transition: 'transform .6s ease' } }}
      />
      {/* 하단 그라데이션 (투명 → 카드별 톤) */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${(166 / CARD_H) * 100}%`,
          background: `linear-gradient(to bottom, ${fade}00, ${fade})`,
        }}
      />
      <Box sx={{ position: 'absolute', left: { xs: 14, md: 20 }, right: 20, bottom: { xs: 14, md: 23 } }}>
        <Typography sx={{ fontFamily: FONT_EN, fontWeight: 500, fontSize: 14, lineHeight: '16px', color: COLORS.text }}>
          Concept {no}.
        </Typography>
        <Typography
          component="h3"
          sx={{ fontFamily: FONT_KO, fontWeight: 500, fontSize: { xs: 22, md: 28 }, lineHeight: '41px', color: '#000' }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: '5.6px',
            fontFamily: FONT_EN,
            fontSize: { xs: 12, md: 14 },
            lineHeight: '16px',
            letterSpacing: '-0.42px',
            color: '#333',
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
