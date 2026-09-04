import { Box, Container, Typography, Stack, Link as MuiLink } from '@mui/material';
import { GOLD, DEEP_GREEN, CREAM, CONTENT_MAX_WIDTH, SECTION_PX } from '../../theme.js';
import { EVENT } from '../../data/eventInfo.js';

const symbolMini = `${import.meta.env.BASE_URL}symbol-mini.svg`;

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: DEEP_GREEN, color: CREAM, py: { xs: 6, md: 8 }, mt: 6 }}>
      <Container disableGutters maxWidth={false} sx={{ maxWidth: CONTENT_MAX_WIDTH, mx: 'auto', px: SECTION_PX }}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Box component="img" src={symbolMini} alt="Winter Forest Market 심볼" sx={{ width: 48, height: 48, filter: 'brightness(1.6)' }} />
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.3rem', color: GOLD }}>
            {EVENT.nameEn}
          </Typography>

          <Box sx={{ width: 60, height: '1px', backgroundColor: `${GOLD}88` }} />

          <Typography variant="body2" sx={{ color: CREAM }}>
            주최 · {EVENT.host}
          </Typography>
          <Typography variant="body2" sx={{ color: CREAM }}>
            문의 ·{' '}
            <MuiLink href={`tel:${EVENT.contact.replace(/-/g, '')}`} sx={{ color: GOLD, textDecorationColor: `${GOLD}66` }}>
              {EVENT.contact}
            </MuiLink>
          </Typography>
          <Typography variant="body2" sx={{ color: CREAM }}>
            {EVENT.venue} · {EVENT.address}
          </Typography>

          <Stack direction="row" spacing={3} sx={{ pt: 1 }}>
            {['Instagram', 'Facebook', 'Blog'].map((sns) => (
              <MuiLink
                key={sns}
                href="#"
                onClick={(e) => e.preventDefault()}
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  color: `${CREAM}cc`,
                  textDecoration: 'none',
                  '&:hover': { color: GOLD },
                }}
              >
                {sns}
              </MuiLink>
            ))}
          </Stack>

          <Typography variant="caption" sx={{ color: `${CREAM}77`, mt: 2 }}>
            © 2026 {EVENT.nameEn}. 본 페이지는 포트폴리오용 시안이며 티켓 예약은 실제 결제가 이루어지지 않습니다.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
