import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

/** 섹션 공통 헤딩: 영문 타이틀(레드) + 국문 서브 + 설명 */
function SectionHeading({ title, subtitle, description, align = 'center', sx }) {
  const isCenter = align === 'center'

  return (
    <Box sx={{ textAlign: align, mx: isCenter ? 'auto' : 0, ...sx }}>
      <Typography variant="h2" sx={{ color: 'primary.main', fontSize: 'clamp(1.5rem, 1.7vw, 2rem)' }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle2" sx={{ mt: 1.5, color: 'text.primary', fontWeight: 500 }}>
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </Box>
  )
}

export default SectionHeading
