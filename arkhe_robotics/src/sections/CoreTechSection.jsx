import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from '../components/layout/Section'
import OutlineButton from '../components/OutlineButton'

const BASE = import.meta.env.BASE_URL

/** 원형 다이어그램 노드 — top/right/bottom/left 비율 위치 */
const NODES = [
  { no: '02', label: '판단', icon: 'judgment.svg', top: '0%', left: '50%', active: false },
  { no: '03', label: '행동', icon: 'action.svg', top: '50%', left: '100%', active: false },
  { no: '04', label: '학습', icon: 'learning.svg', top: '100%', left: '50%', active: false },
  { no: '01', label: '인지', icon: 'cognition.svg', top: '50%', left: '0%', active: true },
]

function CoreTechSection() {
  return (
    <Section id="technology" sx={{ py: { xs: 12, md: 20 }, bgcolor: '#0A0A0B' }} innerSx={{ alignItems: 'center' }}>
      {/* 좌측 텍스트 */}
      <Box sx={{ gridColumn: { xs: '1 / -1', md: '1 / span 4' } }}>
        <Typography variant="h2" sx={{ color: 'primary.main', fontSize: 'clamp(1.5rem, 1.7vw, 2rem)' }}>
          Core Technology
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1.5, fontWeight: 500 }}>
          보고, 생각하고, 움직이고, 배웁니다
        </Typography>
        <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary', maxWidth: 340 }}>
          AI 플랫폼 NOUS를 중심으로, 아르케의 모든 로봇은 현장을 이해하고 스스로 더 나아집니다.
        </Typography>
        <OutlineButton sx={{ mt: 5 }} />
      </Box>

      {/* 우측 원형 다이어그램 */}
      <Box
        sx={{
          gridColumn: { xs: '1 / -1', md: '6 / span 7' },
          mt: { xs: 10, md: 0 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 620,
            aspectRatio: '1 / 1',
          }}
        >
          {/* 궤도 원 */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          />

          {/* 중앙 NOUS */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" sx={{ fontSize: 'clamp(1.8rem, 2.6vw, 3rem)', letterSpacing: '0.04em' }}>
              NOUS
            </Typography>
            <Typography variant="h5" sx={{ mt: 1.5, fontSize: 'clamp(0.9rem, 1vw, 1.1rem)', color: 'text.primary' }}>
              Physical AI Engine
            </Typography>
          </Box>

          {/* 4단계 노드 */}
          {NODES.map((node) => (
            <Box
              key={node.no}
              sx={{
                position: 'absolute',
                top: node.top,
                left: node.left,
                transform: 'translate(-50%, -50%)',
                width: node.active ? { xs: 84, md: 104 } : { xs: 62, md: 78 },
                height: node.active ? { xs: 84, md: 104 } : { xs: 62, md: 78 },
                borderRadius: '50%',
                bgcolor: node.active ? 'primary.main' : '#F4F4F5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.4,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translate(-50%, -50%) scale(1.08)' },
              }}
            >
              <Box
                component="img"
                src={`${BASE}ic/${node.icon}`}
                alt=""
                aria-hidden
                sx={{
                  width: node.active ? 30 : 22,
                  height: node.active ? 30 : 22,
                  // 아이콘 원본이 흰색이라 밝은 원 위에서는 반전
                  filter: node.active ? 'none' : 'invert(1)',
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: '0.5rem', md: '0.625rem' },
                  fontWeight: 500,
                  color: node.active ? '#FFFFFF' : '#121314',
                  whiteSpace: 'nowrap',
                }}
              >
                {node.no} {node.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  )
}

export default CoreTechSection
