import { Box, Typography } from '@mui/material';
import Container from '../components/ui/Container.jsx';
import CroppedImage from '../components/ui/CroppedImage.jsx';
import { COLORS } from '../theme.js';
import { SET_PRODUCT, won } from '../data/content.js';
import { asset } from '../utils/asset.js';

// 화면에는 숨기고 스크린리더만 읽는 텍스트 (sx에서 width: 1은 100%라 '1px'로 지정)
const visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  m: '-1px',
  p: 0,
  border: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
};

// 세트 상품 — 이미지(921 × 499) + 정보 박스(512 × 499), 간격 7
export default function SetSection() {
  return (
    <Box component="section" id="set" sx={{ pt: { xs: '120px', md: '160px', lg: '267px' } }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '921fr 512fr' },
            gap: '7px',
          }}
        >
          <CroppedImage
            src={asset('img/all-product.webp')}
            alt="티트리 가지와 돌 위에 놓인 수딩 토너, 세럼, 크림 세트"
            crop={{ left: 1.78, top: -19.99, width: 931.62, height: 519.94 }}
            frameW={921}
            frameH={499}
            sx={{ aspectRatio: '921 / 499' }}
          />

          <Box
            sx={{
              bgcolor: COLORS.mint,
              display: 'flex',
              flexDirection: 'column',
              p: { xs: '32px 20px 28px', lg: '88px 52px 48px 44px' },
              lineHeight: 'normal',
            }}
          >
            <Typography
              component="h2"
              sx={{ fontSize: { xs: 24, md: 26, lg: 34 }, fontWeight: 500, color: COLORS.greenDeep, lineHeight: 'normal' }}
            >
              {SET_PRODUCT.name}
            </Typography>
            <Typography sx={{ mt: { xs: '24px', lg: '42px' }, fontSize: { xs: 18, lg: 21 }, color: COLORS.text, lineHeight: 'normal' }}>
              {SET_PRODUCT.line}
            </Typography>
            <Typography sx={{ mt: '13px', fontSize: { xs: 15, md: 16 }, color: COLORS.body, lineHeight: 'normal' }}>
              {SET_PRODUCT.desc}
            </Typography>

            {/* 정가 → 할인가 */}
            <Box
              sx={{
                mt: { xs: '32px', md: 'auto' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: '16px',
              }}
            >
              <Typography
                component="del"
                sx={{ fontSize: { xs: 18, lg: 24 }, color: COLORS.priceOld, lineHeight: 'normal' }}
              >
                <Box component="span" sx={visuallyHidden}>
                  정가
                </Box>
                {won(SET_PRODUCT.originalPrice)}
              </Typography>
              {/* 피그마에서 상하 반전된 화살표 */}
              <Box component="img" src={asset('ic/arrow.svg')} alt="" width={32} height={7} sx={{ transform: 'scaleY(-1)', mt: '6px' }} />
              <Typography sx={{ fontSize: { xs: 24, lg: 29 }, fontWeight: 500, color: COLORS.priceSet, lineHeight: 'normal' }}>
                <Box component="span" sx={visuallyHidden}>
                  할인가
                </Box>
                {won(SET_PRODUCT.price)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
