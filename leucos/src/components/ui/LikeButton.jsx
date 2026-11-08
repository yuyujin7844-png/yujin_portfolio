import { Box, ButtonBase } from '@mui/material';
import { asset } from '../../utils/asset.js';

// 상품 찜 버튼 (34 × 34) — 피그마 컴포넌트 btn: heart/default, heart/click
// 그림자가 포함된 42px SVG를 (-4, -2) 위치에 겹쳐 배치
export default function LikeButton({ liked, onToggle, label, sx }) {
  return (
    <ButtonBase
      onClick={onToggle}
      aria-pressed={liked}
      aria-label={liked ? `${label} 찜 해제` : `${label} 찜하기`}
      disableRipple
      sx={{
        position: 'absolute',
        width: 34,
        height: 34,
        borderRadius: '50%',
        transition: 'transform .2s',
        '&:hover': { transform: 'scale(1.08)' },
        '&.Mui-focusVisible': { outline: '2px solid #305E45', outlineOffset: 2 },
        ...sx,
      }}
    >
      <Box
        component="img"
        src={asset(liked ? 'ic/heart-click.svg' : 'ic/heart-bg.svg')}
        alt=""
        width={42}
        height={42}
        sx={{ position: 'absolute', left: -4, top: -2, maxWidth: 'none' }}
      />
      {!liked && (
        <Box
          component="img"
          src={asset('ic/heart.svg')}
          alt=""
          width={16.8731}
          height={15.1157}
          sx={{ position: 'absolute', left: 8.56, top: 9.44 }}
        />
      )}
    </ButtonBase>
  );
}
