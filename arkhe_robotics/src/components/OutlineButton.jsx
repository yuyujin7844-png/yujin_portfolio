import Button from '@mui/material/Button'

/** 시안의 VIEW MORE 류 사각 버튼 */
function OutlineButton({ children = 'VIEW MORE', variant = 'outline', sx, ...rest }) {
  const isSolid = variant === 'solid'

  return (
    <Button
      sx={{
        minWidth: 160,
        px: 3,
        py: 1.4,
        borderRadius: 0,
        fontSize: '0.8125rem',
        letterSpacing: '0.12em',
        color: isSolid ? '#FFFFFF' : 'text.primary',
        bgcolor: isSolid ? '#121314' : 'transparent',
        border: '1px solid',
        borderColor: isSolid ? '#121314' : 'rgba(255,255,255,0.5)',
        transition: 'all 0.25s ease',
        '&:hover': {
          bgcolor: 'primary.main',
          borderColor: 'primary.main',
          color: '#FFFFFF',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default OutlineButton
