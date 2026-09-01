import { Box, Container } from '@mui/material';
import { GOLD, CREAM } from '../../theme.js';
import { useInView } from '../../hooks/useInView.js';

/**
 * 섹션 공통 래퍼 — id 부여 + 낡은 종이 위 골드 이중선 프레임.
 * 등장 시 가벼운 페이드/슬라이드만 적용 (과한 스크롤 애니메이션 지양).
 */
export default function PaperSection({ id, children, maxWidth = 'md', framed = true, sx }) {
  const { ref, inView } = useInView(0.12);

  return (
    <Box
      id={id}
      component="section"
      ref={ref}
      sx={{
        py: { xs: 7, md: 11 },
        px: 2,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity .7s ease, transform .7s ease',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth} disableGutters>
        {framed ? (
          <Box
            sx={{
              position: 'relative',
              border: `1px solid ${GOLD}`,
              boxShadow: `inset 0 0 0 4px ${CREAM}, inset 0 0 0 5px ${GOLD}66`,
              px: { xs: 3, md: 7 },
              py: { xs: 5, md: 8 },
            }}
          >
            {/* 모서리 장식 */}
            {['top left', 'top right', 'bottom left', 'bottom right'].map((pos) => {
              const [v, h] = pos.split(' ');
              return (
                <Box
                  key={pos}
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    [v]: -1,
                    [h]: -1,
                    width: 16,
                    height: 16,
                    borderTop: v === 'top' ? `2px solid ${GOLD}` : 'none',
                    borderBottom: v === 'bottom' ? `2px solid ${GOLD}` : 'none',
                    borderLeft: h === 'left' ? `2px solid ${GOLD}` : 'none',
                    borderRight: h === 'right' ? `2px solid ${GOLD}` : 'none',
                  }}
                />
              );
            })}
            {children}
          </Box>
        ) : (
          children
        )}
      </Container>
    </Box>
  );
}
