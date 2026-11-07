import { Box, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { asset } from '../../utils/asset.js';
import CroppedImage from './CroppedImage.jsx';

// 피그마 리뷰CARD (425×588) — 내부 요소는 시안 좌표 그대로 배치
const smallKo = { fontFamily: FONT_KO, fontSize: 14, lineHeight: 'normal', whiteSpace: 'nowrap', position: 'absolute' };

export default function ReviewCard({ review }) {
  const { author, concept, conceptName, rating, text, image, img } = review;
  return (
    <Box
      component="article"
      sx={{ position: 'relative', flex: 'none', width: 425, height: 588, bgcolor: COLORS.bg }}
    >
      <CroppedImage
        src={asset(image)}
        alt={`${conceptName} 촬영 후기 사진`}
        crop={img}
        frameW={425}
        frameH={370}
        sx={{ width: 425, height: 370 }}
      />

      {/* 프로필 */}
      <Box
        component="img"
        src={asset('img/avatar.png')}
        alt=""
        width={58}
        height={58}
        sx={{ position: 'absolute', left: 24, top: 392 }}
      />
      <Typography sx={{ ...smallKo, left: 93, top: 404, color: COLORS.ink }}>{author}</Typography>

      {/* 컨셉 | 컨셉명 */}
      <Typography sx={{ ...smallKo, fontFamily: FONT_EN, left: 93, top: 427, color: COLORS.ink }}>
        {concept}
      </Typography>
      <Box
        component="img"
        src={asset('ic/line-review-title.svg')}
        alt=""
        width={13}
        height={2}
        sx={{ position: 'absolute', left: 159.5, top: 434.5, transform: 'rotate(90deg)' }}
      />
      <Typography sx={{ ...smallKo, fontWeight: 500, left: 177, top: 425, color: COLORS.slate }}>
        {conceptName}
      </Typography>

      {/* 별점 */}
      <Box
        component="img"
        src={asset('ic/star.svg')}
        alt=""
        width={18.6738}
        height={17.8586}
        sx={{ position: 'absolute', left: 344.66, top: 421.24 }}
      />
      <Typography sx={{ ...smallKo, left: 368, top: 421, color: COLORS.muted }}>
        <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          별점
        </Box>
        ({rating})
      </Typography>

      <Box
        component="img"
        src={asset('ic/line-review-card.svg')}
        alt=""
        width={375}
        height={1}
        sx={{ position: 'absolute', left: 26, top: 468 }}
      />

      <Typography
        sx={{
          position: 'absolute',
          left: 24,
          right: 24,
          top: 485,
          fontFamily: FONT_KO,
          fontSize: 16,
          lineHeight: 'normal',
          color: COLORS.muted,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
