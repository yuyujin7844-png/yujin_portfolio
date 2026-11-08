import { Box, ButtonBase, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { RESERVATION_CONCEPTS } from '../../data/reservation.js';
import { asset } from '../../utils/asset.js';
import CroppedImage from '../ui/CroppedImage.jsx';
import SectionHeading from './SectionHeading.jsx';

// 컨셉 카드 (459×358, 사진 영역 459×267)
// 선택: 흰 배경 + 그림자 / 기본: #A2A2A2 테두리 — 피그마 상태 그대로
function ConceptOption({ concept, selected, onSelect }) {
  return (
    <ButtonBase
      onClick={onSelect}
      aria-pressed={selected}
      sx={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        bgcolor: '#FFFFFF',
        border: selected ? '1px solid transparent' : `1px solid ${COLORS.cardLine}`,
        boxShadow: selected ? '0px 0px 9.3px 0px rgba(142, 142, 142, 0.5)' : 'none',
        transition: 'box-shadow .25s, border-color .25s, transform .25s',
        '&:hover': { transform: 'translateY(-4px)' },
        '&:hover img': { transform: 'scale(1.04)' },
        '&.Mui-focusVisible': { outline: `2px solid ${COLORS.sky}`, outlineOffset: 2 },
      }}
    >
      <CroppedImage
        src={asset(concept.image)}
        alt={`${concept.title} 컨셉`}
        crop={concept.img}
        frameW={459}
        frameH={267}
        sx={{ aspectRatio: '459 / 267', '& img': { transition: 'transform .5s ease' } }}
      />
      <Box sx={{ height: 90, pt: '20px', px: '15px' }}>
        <Typography sx={{ fontFamily: FONT_EN, fontSize: 16, lineHeight: '19px', color: COLORS.ink }}>
          concept {concept.no}
        </Typography>
        <Typography sx={{ fontFamily: FONT_KO, fontWeight: 500, fontSize: 20, lineHeight: '29px', color: COLORS.ink }}>
          {concept.title}
        </Typography>
      </Box>
    </ButtonBase>
  );
}

export default function ConceptStep({ value, onChange }) {
  return (
    <Box>
      <SectionHeading>컨셉 선택</SectionHeading>
      <Box
        sx={{
          mt: { xs: '40px', md: '88px' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          columnGap: '31px',
          rowGap: '45px',
        }}
      >
        {RESERVATION_CONCEPTS.map((c) => (
          <ConceptOption key={c.no} concept={c} selected={value === c.no} onSelect={() => onChange(c.no)} />
        ))}
      </Box>
    </Box>
  );
}
