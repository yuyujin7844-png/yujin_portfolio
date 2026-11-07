import { Box, Link, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../theme.js';
import { REVIEWS } from '../data/reviews.js';
import { asset } from '../utils/asset.js';
import useDragScroll from '../hooks/useDragScroll.js';
import Container from '../components/ui/Container.jsx';
import ReviewCard from '../components/ui/ReviewCard.jsx';

export default function ReviewSection() {
  const scrollRef = useDragScroll();

  // 더보기: 카드 목록을 한 화면만큼 오른쪽으로 넘기고, 끝이면 처음으로
  const handleMore = (e) => {
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + el.clientWidth, behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="review"
      sx={{ bgcolor: COLORS.sky, pt: { xs: '80px', md: '142px' }, pb: { xs: '80px', md: '264px' } }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography
            component="h2"
            sx={{ ml: '-2px', fontFamily: FONT_EN, fontWeight: 500, fontSize: 36, lineHeight: '42px', color: '#FFFFFA' }}
          >
            Review
          </Typography>
          <Link
            href="#review"
            onClick={handleMore}
            underline="hover"
            sx={{ mr: '-2px', fontFamily: FONT_KO, fontWeight: 700, fontSize: 16, lineHeight: '23px', color: COLORS.bg }}
          >
            더보기
          </Link>
        </Box>

        <Box
          component="img"
          src={asset('ic/line-review.svg')}
          alt=""
          width={1440}
          height={1}
          sx={{ mt: '14px', width: '100%', maxWidth: 1440 }}
        />

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: '10px',
            mt: '54px',
            overflowX: 'auto',
            cursor: 'grab',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {REVIEWS.map((r) => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
