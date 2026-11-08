import { useState } from 'react';
import { Box, Drawer, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '../ui/Container.jsx';
import { COLORS, FONT, HEADER_HEIGHT } from '../../theme.js';
import { NAV_ITEMS } from '../../data/content.js';
import { asset } from '../../utils/asset.js';

const ICONS = [
  { key: 'search', label: '검색', src: 'ic/ic-search.svg', w: 17.0828, h: 17.7398 },
  { key: 'login', label: '로그인', src: 'ic/ic-log.svg', w: 24, h: 24 },
  { key: 'cart', label: '장바구니', src: 'ic/ic-shop.svg', w: 23, h: 24 },
];

// 상단 고정 헤더 (높이 90, 반투명 배경) — md 미만에서는 햄버거 메뉴
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        height: HEADER_HEIGHT,
        bgcolor: COLORS.headerBg,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Link href="#top" aria-label="LEUCOS 홈" sx={{ display: 'block', flexShrink: 0 }}>
          <Box
            component="img"
            src={asset('ic/logo.svg')}
            alt="LEUCOS"
            width={176.156}
            height={29.6905}
            sx={{ width: { xs: 130, md: 176.156 }, height: 'auto' }}
          />
        </Link>

        {/* GNB — 피그마: 로고 오른쪽 133px, 간격 34px */}
        <Box
          component="nav"
          sx={{ display: { xs: 'none', md: 'flex' }, gap: '34px', ml: { md: '64px', lg: '133px' } }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              underline="none"
              sx={{
                fontFamily: FONT,
                fontSize: 18,
                color: COLORS.gnb,
                transition: 'color .2s',
                '&:hover': { color: COLORS.green },
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: { xs: '14px', md: '26px' } }}>
          {ICONS.map((icon) => (
            <Link
              key={icon.key}
              href="#"
              aria-label={icon.label}
              sx={{ width: 24, height: 24, display: 'grid', placeItems: 'center' }}
            >
              <Box component="img" src={asset(icon.src)} alt="" width={icon.w} height={icon.h} />
            </Link>
          ))}
          <IconButton
            aria-label="메뉴 열기"
            onClick={() => setOpen(true)}
            sx={{ display: { md: 'none' }, color: COLORS.gnb, mr: '-8px' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>

      {/* 모바일 메뉴 */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: '20px', bgcolor: COLORS.cream, height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton aria-label="메뉴 닫기" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: '24px', mt: '16px' }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="none"
                onClick={() => setOpen(false)}
                sx={{ fontSize: 20, fontWeight: 500, color: COLORS.green }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
