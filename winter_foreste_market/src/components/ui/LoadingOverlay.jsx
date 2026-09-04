import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// ── 로딩 화면 전용 컬러 (본문 테마와 별개, 로딩.pages 스펙 값) ──────
const BURGUNDY_DEEP = '#5b1018'; // 오버레이 배경
const PROGRESS_GOLD = '#b6862d'; // 상단 진행 라인
const PERCENT_CREAM = '#fceedf'; // 퍼센트 숫자

const snowflake = `${import.meta.env.BASE_URL}snowflake.svg`;
const symbolFull = `${import.meta.env.BASE_URL}symbol-full.svg`;

// ── 타이밍 (ms) ────────────────────────────────────────────────
const COUNT_MS = 1400; // 0 → 100 카운트업
const HOLD_MS = 300; // 100% 도달 후 대기
const FADE_MS = 600; // 오버레이 페이드아웃

// 눈송이/광원 레이어의 느린 깜빡임 — snowflake.svg 자체 투명도에 곱해짐
const twinkle = keyframes`
  0%, 100% { opacity: 0.42; }
  50%      { opacity: 0.85; }
`;

export default function LoadingOverlay() {
  // prefers-reduced-motion: 애니메이션 없이 즉시 본문 노출
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const [pct, setPct] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    if (reduced) {
      setGone(true);
      return;
    }

    // 로딩 중에는 본문 스크롤 잠금
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let raf = 0;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / COUNT_MS);
      setPct(Math.round(progress * 100));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      // 100% 도달 → 대기 후 페이드아웃 → DOM 제거
      timers.current.push(
        setTimeout(() => {
          setFading(true);
          timers.current.push(setTimeout(() => setGone(true), FADE_MS));
        }, HOLD_MS)
      );
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.style.overflow = prevOverflow;
    };
  }, [reduced]);

  if (gone || reduced) return null;

  return (
    <Box
      role="progressbar"
      aria-label="페이지 로딩 중"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: (theme) => theme.zIndex.modal + 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: BURGUNDY_DEEP,
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? 'none' : 'auto',
        transition: `opacity ${FADE_MS}ms ease`,
      }}
    >
      {/* 눈송이 + 흐릿한 원형 광원 배경 — snowflake.svg 를 그대로 사용,
          서로 다른 주기/딜레이의 두 레이어로 겹쳐 동시에 깜빡이지 않게 함 */}
      <Box
        aria-hidden
        component="img"
        src={snowflake}
        alt=""
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.55,
          animation: `${twinkle} 7s ease-in-out infinite`,
        }}
      />
      <Box
        aria-hidden
        component="img"
        src={snowflake}
        alt=""
        sx={{
          position: 'absolute',
          top: '-6%',
          left: '-6%',
          width: '112%',
          height: '112%',
          objectFit: 'cover',
          opacity: 0.4,
          transform: 'scaleX(-1)',
          animation: `${twinkle} 4.5s ease-in-out 1.2s infinite`,
        }}
      />

      {/* 상단에서 40px 지점, 화면 전체 폭의 가로 진행 라인 (퍼센트와 동기화) */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 40,
          left: 0,
          height: '1.5px',
          width: `${pct}%`,
          backgroundColor: PROGRESS_GOLD,
          transition: 'width .08s linear',
        }}
      />

      {/* 중앙: 심볼 + 퍼센트 숫자 */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, md: 4 },
        }}
      >
        <Box
          component="img"
          src={symbolFull}
          alt="Winter Forest Market in Taehwa 심볼"
          sx={{ width: { xs: 200, md: 320 }, height: 'auto' }}
        />
        <Typography
          component="p"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 32,
            lineHeight: 1,
            color: PERCENT_CREAM,
          }}
        >
          {pct} %
        </Typography>
      </Box>
    </Box>
  );
}
