import { Box, ButtonBase, Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { asset } from '../../utils/asset.js';

// 원형 버튼 + 라벨 (원 테두리는 피그마 SVG 그대로 사용)
function FloatingButton({ href, icon, iconSize, iconOffset, label, labelTop }) {
  return (
    <ButtonBase
      href={href}
      sx={{ display: 'block', position: 'relative', width: 64, height: labelTop + 17, borderRadius: '32px' }}
    >
      <Box component="img" src={asset('ic/floating-circle.svg')} alt="" width={64} height={64} />
      <Box
        component="img"
        src={asset(icon)}
        alt=""
        width={iconSize}
        height={iconSize}
        sx={{ position: 'absolute', top: iconOffset, left: iconOffset }}
      />
      <Typography
        component="span"
        sx={{
          position: 'absolute',
          top: labelTop,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: FONT_KO,
          fontSize: 12,
          lineHeight: '17px',
          color: COLORS.navy,
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
    </ButtonBase>
  );
}

export default function FloatingMenu() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box
      component="aside"
      aria-label="빠른 메뉴"
      sx={{
        position: 'fixed',
        zIndex: 20,
        right: { xs: 12, lg: 140 },
        top: '50%',
        transform: { xs: 'translateY(-50%) scale(0.8)', lg: 'translateY(-50%)' },
        transformOrigin: 'right center',
        width: 106,
        height: 317,
        bgcolor: 'rgba(255, 255, 255, 0.42)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <Box sx={{ position: 'absolute', top: 19, left: 21 }}>
        <FloatingButton href="#footer" icon="ic/talk.svg" iconSize={36} iconOffset={14} label="톡 상담" labelTop={64} />
      </Box>
      <Box sx={{ position: 'absolute', top: 121, left: 21 }}>
        <FloatingButton href="#reserve" icon="ic/camera.svg" iconSize={32} iconOffset={15} label="바로 예약" labelTop={62} />
      </Box>
      <ButtonBase
        onClick={scrollToTop}
        aria-label="맨 위로"
        sx={{ position: 'absolute', top: 230, left: 21, borderRadius: '50%', transition: 'transform .2s', '&:hover': { transform: 'translateY(-3px)' } }}
      >
        <Box component="img" src={asset('ic/btn-up.svg')} alt="" width={64} height={64} />
      </ButtonBase>
    </Box>
  );
}
