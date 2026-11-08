import { useEffect, useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import { asset } from '../../utils/asset.js';

// 맨 위로 버튼 (102px, 그림자 포함 SVG 113.6px) — 히어로를 지나면 나타남
export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <ButtonBase
      aria-label="맨 위로"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        zIndex: 15,
        right: { xs: 16, md: 48 },
        bottom: { xs: 16, md: 40 },
        width: { xs: 60, md: 102 },
        height: { xs: 60, md: 102 },
        borderRadius: '50%',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transform: visible ? 'none' : 'translateY(12px)',
        transition: 'opacity .3s, transform .3s, visibility .3s',
      }}
    >
      <Box
        component="img"
        src={asset('ic/up.svg')}
        alt=""
        width={113.6}
        height={113.6}
        // 피그마 inset(-3.73% -5.69% -7.65%) 그대로: 원보다 큰 그림자 영역
        sx={{ position: 'absolute', left: '-5.69%', top: '-3.73%', width: '111.38%', height: '111.38%', maxWidth: 'none' }}
      />
    </ButtonBase>
  );
}
