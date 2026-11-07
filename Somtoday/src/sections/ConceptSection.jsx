import { Box, Typography } from '@mui/material';
import { FONT_EN } from '../theme.js';
import { CONCEPTS } from '../data/concepts.js';
import { asset } from '../utils/asset.js';
import useDragScroll from '../hooks/useDragScroll.js';
import Container from '../components/ui/Container.jsx';
import ConceptCard from '../components/ui/ConceptCard.jsx';

export default function ConceptSection() {
  const scrollRef = useDragScroll();

  return (
    <Box component="section" id="concept" sx={{ pt: '5px', pb: { xs: '120px', md: '452px' } }}>
      <Container>
        {/* 좌측 세로 라인 + 세로 타이틀 */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 20, lg: 40 },
            top: 0,
            width: '1px',
            height: 321.014,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={asset('ic/line-concept.svg')}
            alt=""
            width={321.014}
            height={1}
            sx={{ flex: 'none', maxWidth: 'none', transform: 'rotate(-90deg)' }}
          />
        </Box>
        <Typography
          component="h2"
          sx={{
            position: { xs: 'static', md: 'absolute' },
            left: { md: 25, lg: 45 },
            top: 73,
            width: { md: 42 },
            height: { md: 248 },
            pt: { xs: '80px', md: 0 },
            mb: { xs: '24px', md: 0 },
            writingMode: { md: 'vertical-rl' },
            transform: { md: 'rotate(180deg)' },
            fontFamily: FONT_EN,
            fontWeight: 500,
            fontSize: { xs: 28, md: 36 },
            lineHeight: '42px',
            color: 'rgba(39, 47, 50, 0.51)',
            whiteSpace: 'nowrap',
          }}
        >
          Studio Concept
        </Typography>

        {/* 카드 슬라이더 — 오른쪽은 화면 끝까지 흘러넘침 (드래그/가로 스크롤) */}
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: '16px',
            mt: { md: '155px' },
            ml: { md: '150px' },
            mr: 'calc(50% - 50vw)',
            pr: '20px',
            overflowX: 'auto',
            cursor: 'grab',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {CONCEPTS.map((c) => (
            <ConceptCard key={c.no} concept={c} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
