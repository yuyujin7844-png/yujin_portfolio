import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SECTION_X } from '../../theme'
import Logo from './Logo'

const NAV_ITEMS = [
  { label: 'Company', href: '#company' },
  { label: 'Technology', href: '#technology' },
  { label: 'Product', href: '#business' },
  { label: 'Industry', href: '#numbers' },
  { label: 'IR/PR', href: '#newsroom' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('KOR')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1100,
        px: SECTION_X,
        py: 2,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        bgcolor: scrolled ? 'rgba(0,0,0,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box sx={{ justifySelf: 'start' }}>
          <Logo size="30px" />
        </Box>

        {/* gnb: 그리드 중앙 컬럼에 배치해 좌우 요소 폭과 무관하게 항상 가운데 정렬 */}
        <Stack
          component="nav"
          direction="row"
          sx={{
            justifySelf: 'center',
            columnGap: '60px',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Typography
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'text.primary',
                position: 'relative',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        <Box
          role="button"
          tabIndex={0}
          onClick={() => setLang((prev) => (prev === 'KOR' ? 'ENG' : 'KOR'))}
          sx={{
            justifySelf: 'end',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            width: 64,
            height: 24,
            px: '3px',
            borderRadius: 999,
            cursor: 'pointer',
            bgcolor: 'rgba(255,255,255,0.14)',
            border: '1px solid rgba(255,255,255,0.2)',
            flexDirection: lang === 'KOR' ? 'row' : 'row-reverse',
          }}
        >
          <Box sx={{ width: 18, height: 18, borderRadius: '50%', bgcolor: '#F0F1F3' }} />
          <Typography variant="caption" sx={{ fontSize: '0.625rem', letterSpacing: '0.04em', color: 'text.primary' }}>
            {lang}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
