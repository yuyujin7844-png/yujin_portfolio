import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'
import SectionHeading from '../components/layout/SectionHeading'

const BASE = import.meta.env.BASE_URL

const BUSINESS_ITEMS = [
  { name: 'KINESIS', role: 'Humanoid Robot', image: 'business1.jpg' },
  { name: 'TECHNE', role: 'Collaborative Robot', image: 'business2.jpg' },
  { name: 'HODOS', role: 'Autonomous Mobile Robot', image: 'business3.jpg' },
  { name: 'NOUS', role: 'Robot AI Platform', image: 'business4.jpg' },
]

function BusinessSection() {
  return (
    <Section id="business" sx={{ py: { xs: 12, md: 20 }, bgcolor: '#000' }}>
      <Box sx={{ gridColumn: '1 / -1' }}>
        <SectionHeading title="Business" subtitle="움직임의 근원에서, 산업의 미래를 만듭니다" />
      </Box>

      <Box
        sx={{
          gridColumn: '1 / -1',
          mt: { xs: 6, md: 11 },
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: '20px',
        }}
      >
        {BUSINESS_ITEMS.map((item) => (
          <Box
            key={item.name}
            sx={{
              cursor: 'pointer',
              '&:hover img': { transform: 'scale(1.06)' },
              '&:hover .arkhe-card-name': { color: 'primary.main' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '348 / 472',
                bgcolor: '#070708',
              }}
            >
              <Box
                component="img"
                src={`${BASE}img/${item.image}`}
                alt={`${item.name} ${item.role}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
              />
            </Box>

            <Typography
              className="arkhe-card-name"
              variant="h4"
              sx={{ mt: 2, fontSize: '1rem', letterSpacing: '0.02em', transition: 'color 0.25s ease' }}
            >
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
              {item.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default BusinessSection
