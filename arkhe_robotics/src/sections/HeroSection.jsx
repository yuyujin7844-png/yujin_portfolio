import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'

const BASE = import.meta.env.BASE_URL

/**
 * 1920 기준 px 값을 vw로 환산해 clamp()로 고정 — 데스크탑(≥1920)에서는 시안 수치 그대로,
 * 작은 화면에서는 비율을 유지하며 축소됩니다.
 */
const px = (value, min) => `clamp(${min}px, ${(value / 1920) * 100}vw, ${value}px)`

function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        height: px(1242, 640),
        overflow: 'hidden',
        bgcolor: '#000',
      }}
    >
      {/* 갤럭시 배경 — cover 특성상 세로는 항상 꽉 차서 잘리지 않으므로 position은 수평 center면 충분 */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${BASE}img/bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.95,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 50% at 50% 38%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.9) 100%), linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* 육각형(다면체) 오브젝트 — 궤도 중심에 screen 블렌드로 합성 */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: px(182, 64),
          height: px(109, 38),
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={`${BASE}img/hero-hex.jpg`}
          alt=""
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            mixBlendMode: 'screen',
            opacity: 0.6,
          }}
        />
      </Box>

      {/* 텍스트 — 섹션 바닥에서 382px 지점에 하단이 오도록 배치 (육각형 아래쪽, 가리지 않음) */}
      <Section
        grid={false}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: px(382, 140),
          zIndex: 2,
        }}
        innerSx={{ textAlign: 'center' }}
      >
        <Typography component="p" sx={{ fontFamily: 'Unbounded, sans-serif', lineHeight: 1.2 }}>
          <Box
            component="span"
            sx={{ fontWeight: 400, fontSize: px(46, 28), color: '#E8E8EA' }}
          >
            The Beginning of{' '}
          </Box>
          <Box
            component="span"
            sx={{ fontWeight: 500, fontSize: px(56, 32), color: 'primary.main' }}
          >
            Physical AI
          </Box>
        </Typography>

        <Typography
          sx={{
            mt: px(12, 8),
            fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
            fontWeight: 400,
            fontSize: px(38, 22),
            lineHeight: 1.3,
            color: '#E8E8EA',
          }}
        >
          아르케(Arkhe), 모든 것의 시작.
        </Typography>

        <Typography
          sx={{
            mt: px(60, 28),
            fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
            fontWeight: 400,
            fontSize: px(22, 16),
            lineHeight: 1.5,
            color: '#949494',
          }}
        >
          우리는 로봇이 사람과 함께 일하는 새로운 시대의 시작을 만듭니다.
        </Typography>
      </Section>
    </Box>
  )
}

export default HeroSection
