import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'

const BASE = import.meta.env.BASE_URL

const VALUES = [
  {
    icon: 'evolution.svg',
    title: 'Evolution',
    desc: '멈추지 않는 학습으로 어제보다 나은 로봇을 만듭니다.',
  },
  {
    icon: 'precision.svg',
    title: 'Precision',
    desc: '0.01mm의 오차까지 관리하는 정밀한 제어 기술.',
  },
  {
    icon: 'together.svg',
    title: 'Together',
    desc: '사람을 대체하지 않고, 사람과 함께 일합니다.',
  },
]

function CompanySection() {
  return (
    <Section id="company" sx={{ py: { xs: 12, md: 20 }, bgcolor: '#000' }}>
      {/* 좌측: 심볼 이미지 */}
      <Box
        sx={{
          gridColumn: { xs: '1 / -1', md: '1 / span 5' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={`${BASE}img/hero.jpg`}
          alt="ARKHE 심볼"
          sx={{
            width: '100%',
            maxWidth: 460,
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            mixBlendMode: 'screen',
          }}
        />
      </Box>

      {/* 우측: 철학 + 가치 */}
      <Box sx={{ gridColumn: { xs: '1 / -1', md: '7 / span 6' }, alignSelf: 'center', mt: { xs: 6, md: 0 } }}>
        <Typography variant="h2" sx={{ color: 'primary.main', fontSize: 'clamp(1.5rem, 1.7vw, 2rem)' }}>
          Company
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1.5, fontWeight: 500 }}>
          아르케(ἀρχή) — 만물의 근원, 그리고 시작
        </Typography>
        <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary', maxWidth: 520 }}>
          아르케 로보틱스는 물리 세계에서 스스로 인지하고 판단하는 로봇을 만듭니다.
          <br />
          기술의 근원을 다시 묻는 일에서, 산업의 다음 단계가 시작된다고 믿습니다.
        </Typography>

        <Stack spacing={3.5} sx={{ mt: 6 }}>
          {VALUES.map((value) => (
            <Stack key={value.title} direction="row" spacing={2.5} alignItems="flex-start">
              <Box
                component="img"
                src={`${BASE}ic/${value.icon}`}
                alt=""
                aria-hidden
                sx={{ width: 40, height: 40, flexShrink: 0 }}
              />
              <Box>
                <Typography variant="h5" sx={{ fontSize: '1rem' }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
                  {value.desc}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Section>
  )
}

export default CompanySection
