import { Box, Link, Typography } from '@mui/material';
import { COLORS, FONT_EN } from '../../theme.js';
import { asset } from '../../utils/asset.js';

const SOCIALS = [
  { label: '인스타그램', icon: 'ic/insta.svg', size: 32 },
  { label: '유튜브', icon: 'ic/youtube.svg', size: 38 },
  { label: '페이스북', icon: 'ic/facebook.svg', size: 32 },
  { label: '블로그', icon: 'ic/blog.svg', size: 32 },
];

const INFO = [
  '썸투데이 스튜디오',
  '울산광역시 동구 전하로35 101동 305호',
  'T. 052-123-456',
  'F. 052-984-654',
  'E.sometoday@gmail.com',
];

const textSx = { fontFamily: FONT_EN, fontSize: 16, lineHeight: '19px' };

export default function Footer() {
  return (
    <Box component="footer" id="footer">
      <Box
        sx={{
          bgcolor: COLORS.footerBg,
          minHeight: 376,
          pt: '118px',
          pb: '94px',
          px: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="img" src={asset('ic/footer-logo.svg')} alt="SomeToday" width={215.477} height={40.4802} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', mt: '17.5px', height: 38 }}>
          {SOCIALS.map((s) => (
            <Link
              key={s.label}
              href="#"
              aria-label={s.label}
              sx={{ display: 'block', transition: 'opacity .2s', '&:hover': { opacity: 0.6 } }}
            >
              <Box component="img" src={asset(s.icon)} alt="" width={s.size} height={s.size} />
            </Link>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            columnGap: '15px',
            rowGap: '4px',
            mt: '49px',
          }}
        >
          {INFO.map((item) => (
            <Typography key={item} sx={{ ...textSx, color: COLORS.footerText }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={{ bgcolor: COLORS.ink, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ ...textSx, color: COLORS.copyright }}>
          COPYRIGHT(C) SomeToday All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
