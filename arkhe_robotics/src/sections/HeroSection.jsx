import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'

const BASE = import.meta.env.BASE_URL

function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      {/* 갤럭시 배경 */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BASE}img/bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 38%',
          opacity: 0.95,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 50% at 50% 42%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.9) 100%), linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <Section grid={false} sx={{ position: 'relative', zIndex: 1 }} innerSx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ mt: { xs: 10, md: 16 } }}>
          The Beginning of{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            Physical AI
          </Box>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mt: 2, fontSize: 'clamp(1rem, 1.1vw, 1.3rem)', color: 'text.primary' }}
        >
          아르케(Arkhe), 모든 것의 시작.
        </Typography>

        <Typography variant="body2" sx={{ mt: 5, color: 'text.secondary' }}>
          우리는 로봇이 사람과 함께 일하는 새로운 시대의 시작을 만듭니다.
        </Typography>
      </Section>
    </Box>
  )
}

export default HeroSection
