import { useEffect, useState, useCallback } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, Container,
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
  useMediaQuery, useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { GOLD, BURGUNDY, CREAM } from '../../theme.js';

const symbolMini = `${import.meta.env.BASE_URL}symbol-mini.svg`;

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Tickets', id: 'tickets' },
  { label: 'Program', id: 'program' },
  { label: 'Location', id: 'location' },
  { label: 'FAQ', id: 'faq' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState('about');

  // 스크롤스파이 — 현재 화면에 보이는 섹션 추적
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-72px 0px -55% 0px', threshold: [0.15, 0.4, 0.75] }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: `1px solid ${GOLD}44`,
          backdropFilter: 'blur(2px)',
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              minHeight: '64px !important',
              height: 64,
              px: { xs: 2, md: 3 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* 좌측: 심볼(미니) + 행사명 */}
            <Box
              component="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                p: 0,
              }}
              aria-label="맨 위로"
            >
              <Box component="img" src={symbolMini} alt="Winter Forest Market 심볼" sx={{ width: 34, height: 34 }} />
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: BURGUNDY,
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                Winter Forest Market
              </Typography>
            </Box>

            {/* 중앙/우측: 메뉴 */}
            {isMobile ? (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: BURGUNDY }} aria-label="메뉴 열기">
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    variant="text"
                    disableRipple
                    sx={{
                      minHeight: 'auto',
                      px: 1.5,
                      py: 0.5,
                      color: activeId === item.id ? BURGUNDY : '#6E6552',
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: activeId === item.id ? 700 : 500,
                      fontSize: '0.95rem',
                      letterSpacing: '0.04em',
                      borderRadius: 0,
                      position: 'relative',
                      background: 'none',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 2,
                        height: '2px',
                        backgroundColor: GOLD,
                        transform: activeId === item.id ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'center',
                        transition: 'transform .3s ease',
                      },
                      '&:hover': { background: 'none', color: BURGUNDY, '&::after': { transform: 'scaleX(1)' } },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 240, backgroundColor: CREAM, borderLeft: `1px solid ${GOLD}` } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: BURGUNDY }} aria-label="메뉴 닫기">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollTo(item.id)} sx={{ px: 3, py: 1.8 }}>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: activeId === item.id ? 700 : 500,
                      color: activeId === item.id ? BURGUNDY : '#6E6552',
                      letterSpacing: '0.06em',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
