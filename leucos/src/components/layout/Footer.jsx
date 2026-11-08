import { Box, Link, Typography } from '@mui/material';
import Container from '../ui/Container.jsx';
import { COLORS } from '../../theme.js';
import { SNS } from '../../data/content.js';
import { asset } from '../../utils/asset.js';

// 푸터 로고 (215 × 63) — LEUCOS 워드마크 + TEA TREE SKINCARE 두 조각
function FooterLogo() {
  return (
    <Box role="img" aria-label="LEUCOS TEA TREE SKINCARE" sx={{ position: 'relative', width: 215, height: 63, flexShrink: 0 }}>
      <Box
        component="img"
        src={asset('ic/footer-logo-top.svg')}
        alt=""
        width={164.213}
        height={27.775}
        sx={{ position: 'absolute', left: 0, top: 0, width: '98.33%', height: '56.68%' }}
      />
      <Box
        component="img"
        src={asset('ic/footer-logo-bottom.svg')}
        alt=""
        width={164}
        height={11.6786}
        sx={{ position: 'absolute', left: 0, top: '76.21%', width: '98.2%', height: '23.83%' }}
      />
    </Box>
  );
}

export default function Footer() {
  return (
    <Box component="footer" id="footer" sx={{ mt: { xs: '120px', md: '140px', lg: '196px' }, bgcolor: COLORS.footerBg }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: '36px', md: '24px' },
          pt: { xs: '48px', lg: '78px' },
          pb: { xs: '40px', lg: '59px' },
        }}
      >
        <Box sx={{ pt: { md: '17px' } }}>
          <FooterLogo />
          <Box sx={{ mt: { xs: '28px', lg: '46px' }, fontSize: { xs: 14, md: 16 }, color: COLORS.footerText, lineHeight: 'normal' }}>
            <Typography sx={{ font: 'inherit' }}>(주)레우코스 | 서울특별시 ○○구 ○○로 00</Typography>
            <Typography sx={{ font: 'inherit', mt: '4px' }}>소비자상담실 1588-0000 | www.leucos.kr</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'flex-start', md: 'flex-end' }, lineHeight: 'normal' }}>
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: COLORS.forest, lineHeight: 'normal', mr: { lg: '4px' } }}>
            CONTACT WITH US
          </Typography>
          <Link
            href="tel:1588-0000"
            underline="none"
            sx={{ mt: '7px', fontSize: { xs: 28, lg: 32 }, fontWeight: 600, color: COLORS.forest, lineHeight: 'normal' }}
          >
            1588 - 0000
          </Link>
          <Box sx={{ mt: '15px', display: 'flex', gap: '10px', fontSize: 14, color: COLORS.body }}>
            <span>평일 10:00 ~ 17:00</span>
            <span>토, 일 공휴일 휴무</span>
          </Box>
          <Box sx={{ mt: '29px', display: 'flex', gap: '11px' }}>
            {SNS.map((sns) => (
              <Link
                key={sns.key}
                href="#"
                aria-label={sns.label}
                sx={{ display: 'block', transition: 'opacity .2s', '&:hover': { opacity: 0.7 } }}
              >
                <Box component="img" src={asset(sns.icon)} alt="" width={44} height={44} />
              </Link>
            ))}
          </Box>
        </Box>
      </Container>

      {/* 카피라이트 바 47px */}
      <Box
        sx={{
          bgcolor: COLORS.footerBar,
          minHeight: 47,
          px: '20px',
          py: { xs: '12px', md: '15px' },
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          columnGap: '10px',
          rowGap: '4px',
          fontSize: { xs: 12, md: 14 },
          lineHeight: 'normal',
          textAlign: 'center',
        }}
      >
        <Box component="span" sx={{ color: COLORS.copyright }}>© 2026 LEUCOS. All rights reserved.</Box>
        <Box component="span" sx={{ color: COLORS.notice }}>본 사이트는 포트폴리오용으로 제작한 가상 브랜드입니다.</Box>
      </Box>
    </Box>
  );
}
