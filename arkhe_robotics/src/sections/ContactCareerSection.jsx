import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'

const BASE = import.meta.env.BASE_URL

const CARDS = [
  {
    id: 'contact',
    title: 'Contact',
    desc: ['현장에 맞는 로봇이 필요하신가요?', '아르케 전문가가 도입부터 운영까지 함께 설계해 드립니다.'],
    image: 'contact.jpg',
    badge: '도입 문의',
  },
  {
    id: 'career',
    title: 'Career',
    desc: ['시작을 함께 만들 동료를 찾습니다.', '로봇과 AI의 경계에서 일할 사람을 기다립니다.'],
    image: 'career.jpg',
    badge: null,
  },
]

function ContactCareerSection() {
  return (
    <Section sx={{ pb: { xs: 12, md: 20 } }} innerSx={{ rowGap: '20px' }}>
      {CARDS.map((card) => (
        <Box
          key={card.id}
          id={card.id}
          sx={{
            gridColumn: { xs: '1 / -1', md: card.id === 'contact' ? '1 / span 6' : '7 / span 6' },
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 1,
            aspectRatio: { xs: '16 / 9', md: '710 / 310' },
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover img': { transform: 'scale(1.06)' },
          }}
        >
          <Box
            component="img"
            src={`${BASE}img/${card.image}`}
            alt=""
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)',
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 4 } }}>
            <Typography variant="h3" sx={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.75rem)' }}>
              {card.title}
            </Typography>
            {card.desc.map((line) => (
              <Typography key={line} variant="caption" component="p" sx={{ mt: 0.5, color: 'rgba(255,255,255,0.8)' }}>
                {line}
              </Typography>
            ))}
          </Box>

          {card.badge && (
            <Box
              sx={{
                position: 'absolute',
                right: { xs: 16, md: 28 },
                bottom: { xs: 16, md: 28 },
                zIndex: 1,
                width: { xs: 68, md: 86 },
                height: { xs: 68, md: 86 },
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(248,29,33,0.4)',
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 600, fontSize: { xs: '0.6875rem', md: '0.8125rem' } }}>
                {card.badge}
              </Typography>
            </Box>
          )}
        </Box>
      ))}
    </Section>
  )
}

export default ContactCareerSection
