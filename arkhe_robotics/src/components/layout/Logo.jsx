import Typography from '@mui/material/Typography'

/** ARKHE 워드마크 */
function Logo({ size = '1.5rem', color = '#FFFFFF', sx }) {
  return (
    <Typography
      component="a"
      href="#hero"
      sx={{
        fontFamily: 'Unbounded, sans-serif',
        fontWeight: 700,
        fontSize: size,
        letterSpacing: '0.06em',
        color,
        lineHeight: 1,
        ...sx,
      }}
    >
      ARKHE
    </Typography>
  )
}

export default Logo
