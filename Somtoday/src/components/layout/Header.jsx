import { Box, Link } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { NAV_ITEMS } from '../../data/nav.js';
import { asset, pageUrl } from '../../utils/asset.js';

// 히어로 이미지 위에 겹쳐지는 헤더 (높이 157 = 로고 바 94 + GNB 63)
// variant="sub" : 예약하기 등 서브 페이지 — 반투명 배경 이미지, 하단 라인 없음, 현재 메뉴 강조
export default function Header({ variant = 'main', active }) {
  const isSub = variant === 'sub';

  return (
    <Box
      component="header"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 157,
        ...(isSub && {
          backgroundImage: `url(${asset('img/header-bg.png')})`,
          backgroundSize: '100% 100%',
        }),
      }}
    >
      {/* 로고 바 */}
      <Box
        sx={{
          position: 'relative',
          height: 94,
          borderBottom: isSub ? 'none' : `1px solid ${COLORS.headerLine}`,
        }}
      >
        <Link href={pageUrl()} aria-label="Sometoday 홈" sx={{ position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)' }}>
          <Box component="img" src={asset('ic/logo.svg')} alt="SomeToday" width={183.538} height={34.48} />
        </Link>
        <Link
          href="#"
          aria-label="마이페이지"
          sx={{ position: 'absolute', top: 36, right: { xs: 20, lg: 239 } }}
        >
          {/* 피그마에서 좌우 반전된 아이콘 */}
          <Box
            component="img"
            src={asset('ic/person.svg')}
            alt=""
            width={22}
            height={22}
            sx={{ transform: 'scaleX(-1)' }}
          />
        </Link>
      </Box>

      {/* GNB */}
      <Box
        component="nav"
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'center' },
          gap: { xs: '24px', md: '48px', lg: '75px' },
          pt: '20px',
          px: '20px',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.key === active;
          const baseColor = isSub ? COLORS.gnbSub : COLORS.text;
          return (
            <Link
              key={item.key}
              href={item.href}
              underline="none"
              aria-current={isActive ? 'page' : undefined}
              sx={{
                flexShrink: 0,
                fontFamily: FONT_KO,
                fontSize: 16,
                fontWeight: isActive ? 500 : 400,
                lineHeight: 'normal',
                color: isActive ? COLORS.gnbActive : baseColor,
                transition: 'color .2s',
                '&:hover': { color: COLORS.deep },
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
