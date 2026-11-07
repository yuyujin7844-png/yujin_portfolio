import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const BASE = import.meta.env.BASE_URL

const QUICK_MENU = [
  { label: '도입 문의', icon: 'floating1.svg', hover: 'floating1_hover.svg', href: '#contact' },
  { label: '회사소개서', icon: 'floating2.svg', hover: 'floating2_hover.svg', href: '#company' },
  { label: '채용', icon: 'floating3.svg', hover: 'floating3_hover.svg', href: '#career' },
]

function FloatingMenu() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <Stack
      spacing={1.5}
      alignItems="center"
      sx={{
        position: 'fixed',
        right: { xs: 12, lg: 24 },
        bottom: { xs: 20, lg: 40 },
        zIndex: 1200,
        p: 1.5,
        borderRadius: 6,
        bgcolor: 'rgba(24,25,27,0.92)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {QUICK_MENU.map((item) => (
        <Box
          key={item.label}
          component="a"
          href={item.href}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            '&:hover .arkhe-ic-default': { opacity: 0 },
            '&:hover .arkhe-ic-hover': { opacity: 1 },
            '&:hover .arkhe-ic-label': { color: 'primary.main' },
          }}
        >
          <Box sx={{ position: 'relative', width: 44, height: 44 }}>
            <Box
              className="arkhe-ic-default"
              component="img"
              src={`${BASE}ic/${item.icon}`}
              alt={item.label}
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transition: 'opacity 0.2s ease' }}
            />
            <Box
              className="arkhe-ic-hover"
              component="img"
              src={`${BASE}ic/${item.hover}`}
              alt=""
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                transition: 'opacity 0.2s ease',
                borderRadius: '50%',
                bgcolor: '#F2F3F4',
              }}
            />
          </Box>
          <Typography
            className="arkhe-ic-label"
            variant="caption"
            sx={{ fontSize: '0.625rem', color: 'text.secondary', transition: 'color 0.2s ease' }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}

      <Box
        component="button"
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위로"
        sx={{
          width: 48,
          height: 48,
          p: 0,
          border: 0,
          background: 'none',
          cursor: 'pointer',
          '& img': { width: '100%', height: '100%', transition: 'transform 0.2s ease' },
          '&:hover img': { transform: 'translateY(-3px)' },
        }}
      >
        <Box component="img" src={`${BASE}ic/floating_up.svg`} alt="" aria-hidden />
      </Box>
    </Stack>
  )
}

export default FloatingMenu
