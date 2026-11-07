import { Box } from '@mui/material';

// 피그마에서 프레임보다 크게 놓고 잘라낸 이미지를 그대로 재현
// crop: 프레임(frameW×frameH) 기준 이미지의 left/top/width/height(px)
export default function CroppedImage({ src, alt = '', crop, frameW, frameH, sx }) {
  const pct = (v, base) => `${(v / base) * 100}%`;
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', ...sx }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        draggable={false}
        sx={{
          position: 'absolute',
          left: pct(crop.left, frameW),
          top: pct(crop.top, frameH),
          width: pct(crop.width, frameW),
          height: pct(crop.height, frameH),
          maxWidth: 'none',
          objectFit: 'cover',
          userSelect: 'none',
        }}
      />
    </Box>
  );
}
