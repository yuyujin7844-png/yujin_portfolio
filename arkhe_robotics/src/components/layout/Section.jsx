import Box from '@mui/material/Box'
import { LAYOUT, SECTION_X } from '../../theme'

/**
 * 1920 기준 12컬럼 / margin 240 / gutter 20 그리드를 제공하는 섹션 래퍼.
 * grid=false 로 주면 그리드 없이 가운데 정렬 컨테이너로만 동작합니다.
 */
function Section({ id, grid = true, sx, innerSx, children, ...rest }) {
  return (
    <Box component="section" id={id} sx={{ width: '100%', px: SECTION_X, ...sx }} {...rest}>
      <Box
        sx={{
          width: '100%',
          maxWidth: `${LAYOUT.contentWidth}px`,
          mx: 'auto',
          ...(grid && {
            display: 'grid',
            gridTemplateColumns: `repeat(${LAYOUT.columns}, 1fr)`,
            columnGap: `${LAYOUT.gutter}px`,
          }),
          ...innerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Section
