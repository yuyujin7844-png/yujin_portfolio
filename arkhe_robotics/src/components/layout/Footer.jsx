import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Section from './Section'
import Logo from './Logo'

function Footer() {
  return (
    <Box component="footer" sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 8, pb: 10 }}>
      <Section grid={false}>
        <Logo size="1.5rem" />

        <Typography variant="caption" component="p" sx={{ mt: 3, color: 'text.secondary' }}>
          (주)아르케 로보틱스 | 대표이사 OOO | 사업자등록번호 000-00-00000
        </Typography>
        <Typography variant="caption" component="p" sx={{ mt: 0.5, color: 'text.secondary' }}>
          서울특별시 OO구 OO로 00 | T. 02-000-0000 |{' '}
          <Box component="a" href="mailto:contact@arkherobotics.com" sx={{ textDecoration: 'underline' }}>
            contact@arkherobotics.com
          </Box>
        </Typography>
        <Typography variant="caption" component="p" sx={{ mt: 2.5, color: 'text.disabled' }}>
          © 2026 ARKHE Robotics. All Rights Reserved.
        </Typography>
      </Section>
    </Box>
  )
}

export default Footer
