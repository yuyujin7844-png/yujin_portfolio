import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'
import OutlineButton from '../components/OutlineButton'

const NEWS_LIST = [
  { title: "아르케 로보틱스, 휴머노이드 'KINESIS' 자동차 부품 공장 실증 테스트 착수", date: '26.10.08' },
  { title: "아르케, 협동로봇 'TECHNE' 200대 공급 계약 체결", date: '26.09.24' },
  { title: "물류 자율이동로봇 'HODOS' 2세대 공개… 적재량·주행 속도 대폭 향상", date: '26.09.03' },
  { title: "아르케 로보틱스, 시리즈 B 투자 유치… 피지컬 AI 플랫폼 'NOUS' 고도화 박차", date: '26.08.19' },
]

function NewsroomSection() {
  return (
    <Section id="newsroom" sx={{ py: { xs: 10, md: 16 } }}>
      {/* 좌측 카드 */}
      <Box
        sx={{
          gridColumn: { xs: '1 / -1', md: '1 / span 4' },
          bgcolor: '#FFFFFF',
          px: 4,
          py: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: 'primary.main', fontSize: 'clamp(1.4rem, 1.6vw, 1.85rem)' }}>
          Newsroom
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1.5, color: '#121314', fontWeight: 600 }}>
          아르케의 새로운 시작들
        </Typography>
        <Typography variant="body2" sx={{ mt: 3, color: '#6A6D73' }}>
          아르케 로보틱스의 최신 소식을 전해드립니다.
        </Typography>
        <OutlineButton variant="solid" sx={{ mt: 5 }} />
      </Box>

      {/* 우측 뉴스 리스트 */}
      <Stack
        sx={{
          gridColumn: { xs: '1 / -1', md: '6 / span 7' },
          mt: { xs: 4, md: 0 },
          alignSelf: 'start',
        }}
      >
        {NEWS_LIST.map((news) => (
          <Stack
            key={news.date}
            component="a"
            href="#newsroom"
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={{ xs: 0.5, sm: 3 }}
            sx={{
              py: 2.6,
              borderBottom: '1px solid rgba(255,255,255,0.25)',
              '&:first-of-type': { borderTop: '1px solid rgba(255,255,255,0.25)' },
              transition: 'color 0.2s ease',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {news.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', flexShrink: 0 }}>
              {news.date}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Section>
  )
}

export default NewsroomSection
