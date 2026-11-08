import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CroppedImage from './CroppedImage.jsx';
import LikeButton from './LikeButton.jsx';
import { COLORS } from '../../theme.js';
import { won } from '../../data/content.js';
import { asset } from '../../utils/asset.js';

// 수딩 라인 상품 카드 — 337 × 552 (이미지 337 × 448 + 텍스트 영역)
export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(Boolean(product.liked));

  return (
    <Box
      component="article"
      sx={{
        position: 'relative',
        bgcolor: COLORS.white,
        border: `0.6px solid ${COLORS.line}`,
        transition: 'box-shadow .3s, transform .3s',
        '&:hover': { boxShadow: '0 10px 24px rgba(36, 54, 44, 0.12)', transform: 'translateY(-4px)' },
      }}
    >
      <CroppedImage
        src={asset(product.image)}
        alt={`${product.nameKo} ${product.volume}`}
        crop={product.crop}
        frameW={337}
        frameH={448}
        sx={{ aspectRatio: '337 / 448' }}
      />
      <LikeButton
        liked={liked}
        onToggle={() => setLiked((v) => !v)}
        label={product.nameKo}
        sx={{ top: 23, right: 21 }}
      />

      <Box sx={{ px: '18px', pt: '18px', pb: '15px', lineHeight: 'normal' }}>
        <Typography component="h3" sx={{ fontSize: { xs: 16, lg: 18 }, fontWeight: 500, color: COLORS.text, lineHeight: 'normal' }}>
          {product.name}
        </Typography>
        <Box sx={{ mt: '5px', display: 'flex', gap: '10px', fontSize: 14, color: COLORS.textSub }}>
          <span>{product.nameKo}</span>
          <span>{product.volume}</span>
        </Box>
        <Typography sx={{ mt: '4px', textAlign: 'right', fontSize: 20, fontWeight: 500, color: COLORS.red, lineHeight: 'normal' }}>
          {won(product.price)}
        </Typography>
      </Box>
    </Box>
  );
}
