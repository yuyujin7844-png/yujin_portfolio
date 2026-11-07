import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'
import SectionHeading from '../components/layout/SectionHeading'

const BASE = import.meta.env.BASE_URL

const STATS = [
  { label: '보유 특허', value: '186', unit: 'plus.svg' },
  { label: '도입 고객사', value: '120', unit: 'plus.svg' },
  { label: '연구 인력 비율', value: '68', unit: 'percentage.svg' },
  { label: '누적 공급 로봇', value: '1,200', unit: 'plus.svg' },
]

function NumbersSection() {
  return (
    <Section id="numbers" sx={{ pt: { xs: 12, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <Box sx={{ gridColumn: '1 / -1' }}>
        <SectionHeading
          title="Arkhe in Numbers"
          subtitle="숫자로 증명하는 시작의 힘"
          description="설립 이후 쌓아온 기술과 신뢰가 아르케의 다음을 만듭니다."
        />
      </Box>

      <Box
        sx={{
          gridColumn: '1 / -1',
          mt: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          py: { xs: 5, md: 7 },
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.14)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(6px)',
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          rowGap: 5,
        }}
      >
        {STATS.map((stat, index) => (
          <Box
            key={stat.label}
            sx={{
              textAlign: 'center',
              borderLeft: index === 0 ? 0 : '1px solid rgba(255,255,255,0.22)',
              '@media (max-width: 899px)': {
                borderLeft: index % 2 === 0 ? 0 : '1px solid rgba(255,255,255,0.22)',
              },
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.primary', opacity: 0.85 }}>
              {stat.label}
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{ mt: 2 }}>
              <Typography
                variant="h2"
                sx={{ fontSize: 'clamp(2.2rem, 3.4vw, 4rem)', fontWeight: 700, lineHeight: 1 }}
              >
                {stat.value}
              </Typography>
              <Box
                component="img"
                src={`${BASE}ic/${stat.unit}`}
                alt=""
                aria-hidden
                sx={{ width: { xs: 16, md: 22 }, height: { xs: 16, md: 22 }, mb: { xs: 0.5, md: 1 } }}
              />
            </Stack>
          </Box>
        ))}
      </Box>
    </Section>
  )
}

export default NumbersSection
