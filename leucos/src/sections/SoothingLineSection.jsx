import { Box, Typography } from '@mui/material';
import Container from '../components/ui/Container.jsx';
import ProductCard from '../components/ui/ProductCard.jsx';
import { COLORS } from '../theme.js';
import { PRODUCTS } from '../data/content.js';
import { asset } from '../utils/asset.js';

// 1440 콘텐츠 기준 비율 (데스크톱에서 카드가 사진 위로 겹쳐지는 배치)
const W = 1440;
const pct = (v) => `${(v / W) * 100}%`;

// SOOTHING LINE — 배경 #F2F4F1, 티트리 사진 + 텍스트 + 상품 카드 3장
export default function SoothingLineSection() {
  return (
    <Box
      component="section"
      id="line"
      sx={{
        mt: { xs: '120px', md: '160px', lg: '248px' },
        bgcolor: COLORS.cream,
        pt: { xs: '72px', md: '100px', lg: '158px' },
        pb: { xs: '72px', md: '100px', lg: '96px' },
      }}
    >
      <Container>
        {/* 절대 배치 기준(콘텐츠 1440 영역) */}
        <Box
          sx={{
            position: 'relative',
            display: { xs: 'flex', lg: 'block' },
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* 티트리 사진 608 × 815 */}
          <Box
            sx={{
              position: 'relative',
              order: { xs: 2, lg: 0 },
              width: { xs: '100%', lg: pct(608) },
              aspectRatio: { xs: '4 / 3', sm: '16 / 9', lg: '608 / 815' },
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={asset('img/tea-tree.webp')}
              alt="햇살 아래 티트리 잎 그림자"
              loading="lazy"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(270deg, rgba(230,225,221,0.16) 0%, rgba(230,225,221,0) 100%)',
              }}
            />
          </Box>

          {/* 텍스트 (1920 기준 x 890, y 2621) */}
          <Box
            sx={{
              order: { xs: 1, lg: 0 },
              position: { lg: 'absolute' },
              top: { lg: 32 },
              left: { lg: pct(650) },
              lineHeight: 'normal',
            }}
          >
            <Typography component="h2" sx={{ fontSize: { xs: 34, lg: 46 }, fontWeight: 500, color: COLORS.green, lineHeight: 'normal' }}>
              SOOTHING LINE
            </Typography>
            <Typography sx={{ mt: { xs: '10px', lg: '15px' }, fontSize: { xs: 20, lg: 26 }, fontWeight: 500, color: COLORS.sub, lineHeight: 'normal' }}>
              세 단계로 완성하는 티트리 진정 루틴.
            </Typography>
            <Typography sx={{ mt: '16px', fontSize: { xs: 15, md: 16 }, color: COLORS.body, letterSpacing: '0.48px', lineHeight: '23px' }}>
              호주 티트리 잎에서 얻은 오일을 중심으로, 피부를
              <br />
              진정시키는 데 필요한 성분만 담았습니다.
            </Typography>
          </Box>

          {/* 상품 카드 337 × 552, 간격 18 (1920 기준 x 634, y 2826) */}
          <Box
            sx={{
              order: 3,
              position: { lg: 'absolute' },
              top: { lg: 237 },
              left: { lg: pct(394) },
              width: { lg: pct(1047) },
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(3, 72%)', sm: 'repeat(3, 1fr)' },
              gap: { xs: '12px', lg: '18px' },
              overflowX: { xs: 'auto', sm: 'visible' },
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
              '& > *': { scrollSnapAlign: 'start' },
              pb: { xs: '8px', sm: 0 },
            }}
          >
            {PRODUCTS.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
