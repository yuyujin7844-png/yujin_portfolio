import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
// 중앙 심볼: 글자/다이아몬드 별을 개별 회전시키려 인라인 SVG로 넣는다.
// (사이트 본문은 assets/symbol-full.svg 를 <img>로 쓰므로 src 쪽에 사본을 둠)
import symbolRaw from '../../assets/symbol-full.svg?raw';

// ── 로딩 화면 전용 컬러 (본문 테마와 별개, 수정.pages 스펙 값) ──────
const BURGUNDY_DEEP = '#5b1018'; // 오버레이 배경 (유지)
const PROGRESS_GOLD = '#b6862d'; // 상단 진행 라인 (유지)
const PERCENT_CREAM = '#fceedf'; // 퍼센트 숫자 (유지)

const SYMBOL_MID = 118.3; // viewBox 236.6 의 중심
const SYMBOL_TURNS = 2; // 로딩 동안 심볼이 도는 바퀴 수 (100%에서 제자리 복귀)
const symbolInlineHtml = symbolRaw.replace(/<\?xml[^>]*\?>\s*/i, '');

// ── 타이밍 (ms) ────────────────────────────────────────────────
const COUNT_MS = 5800; // 0 → 100 카운트업
const HOLD_MS = 1000; // 100% 도달 후 대기
const FADE_MS = 800; // 오버레이 페이드아웃 (총 7.6초)

// ── 카운트 속도 곡선 ──────────────────────────────────────────
// 0~70% 빠르게 → 70~95% 느리게 → 95~100% 다시 빠르게 (구간별 ease-out)
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
function countProgress(t) {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  if (t < 0.35) return 0.7 * easeOutCubic(t / 0.35); // 빠르게 70까지
  if (t < 0.9) return 0.7 + 0.25 * ((t - 0.35) / 0.55); // 느린 크롤 70→95
  return 0.95 + 0.05 * easeOutCubic((t - 0.9) / 0.1); // 95→100 스냅
}

// ── 눈송이 SVG (19세기 판화풍 육각 결정, 6방향 대칭 · 가는 선 위주) ──
// 한 팔(arm) 경로만 정의하고 60°씩 6번 회전해 사용
const ARM_PATHS = [
  // 0 — 단순
  ['M50 50V14', 'M50 22l-6-5M50 22l6-5', 'M50 32l-4.5-4M50 32l4.5-4'],
  // 1 — 중간
  ['M50 50V10', 'M50 16l-8-6M50 16l8-6', 'M50 26l-6-5M50 26l6-5', 'M50 36l-4-3.5M50 36l4-3.5'],
  // 2 — 복잡
  [
    'M50 50V8',
    'M50 13l-9-6M50 13l9-6',
    'M50 22l-7-5M50 22l7-5',
    'M50 22l-4 4M50 22l4 4',
    'M50 32l-6-4M50 32l6-4',
    'M50 41l-3.5-3M50 41l3.5-3',
    'M50 6l-2.2 3.5l2.2 3.5l2.2-3.5Z',
  ],
  // 3 — 장식적
  [
    'M50 50V6',
    'M50 12l-9-6M50 12l9-6',
    'M41 6l2 4M59 6l-2 4',
    'M50 20l-8-5M50 20l8-5',
    'M50 28l-5.5-4M50 28l5.5-4',
    'M50 28l-4 4M50 28l4 4',
    'M50 37l-5-3.5M50 37l5-3.5',
    'M50 44l-3-2.5M50 44l3-2.5',
    'M50 4l-3 5l3 5l3-5Z',
  ],
];
const CENTER_HEX = 'M56 50L53 55.2L47 55.2L44 50L47 44.8L53 44.8Z';

function Snowflake({ variant }) {
  const paths = ARM_PATHS[variant] || ARM_PATHS[0];
  return (
    <Box
      component="svg"
      viewBox="0 0 100 100"
      aria-hidden
      focusable="false"
      sx={{ display: 'block', width: '100%', height: '100%', overflow: 'visible' }}
    >
      <g
        fill="none"
        stroke="#fff"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            {paths.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        ))}
        {(variant === 1 || variant === 3) && <path d={CENTER_HEX} />}
      </g>
    </Box>
  );
}

// ── 배치 데이터 생성 (애니메이션은 전부 CSS, JS는 위치/타이밍 값만) ──
function buildFlakes() {
  const count = 24 + Math.floor(Math.random() * 9); // 24~32개
  // 가장자리로 값을 밀어내는 분포
  const edgeBias = (v) =>
    v < 0.5 ? 0.5 * Math.pow(v * 2, 1.7) : 1 - 0.5 * Math.pow((1 - v) * 2, 1.7);

  const flakes = [];
  let guard = 0;
  while (flakes.length < count && guard < count * 40) {
    guard += 1;
    const x = edgeBias(Math.random()) * 100;
    const y = edgeBias(Math.random()) * 100;
    // 중앙 심볼 주변(타원 영역)은 비워둔다
    const dx = (x - 50) / 30;
    const dy = (y - 50) / 34;
    if (dx * dx + dy * dy < 1) continue;
    flakes.push({
      x,
      y,
      size: 10 + Math.random() * 46, // 10~56px
      base: 0.06 + Math.random() * 0.08, // 6~14%
      dur: 3 + Math.random() * 4, // 3~7초
      delay: Math.random() * 5, // 0~5초
      rot: Math.random() * 60,
      variant: Math.floor(Math.random() * 4),
      spin: false,
    });
  }
  // 5~6개만 아주 느린 미세 회전
  const spinCount = Math.min(5 + Math.round(Math.random()), flakes.length);
  const pool = [...flakes.keys()];
  for (let i = 0; i < spinCount; i += 1) {
    const k = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
    flakes[k].spin = true;
  }
  return flakes;
}

function buildOrbs() {
  return Array.from({ length: 10 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 40 + Math.random() * 100, // 40~140px
    base: 0.04 + Math.random() * 0.05, // 4~9%
    dur: 8 + Math.random() * 4, // 8~12초
    delay: Math.random() * 6,
  }));
}

// ── 키프레임 (opacity / transform 만 사용) ─────────────────────
const flakeTwinkle = keyframes`
  0%, 100% { opacity: var(--o); }
  50%      { opacity: calc(var(--o) * 2.5); }
`;
const flakeSpin = keyframes`
  0%, 100% { transform: rotate(calc(var(--r) * 1deg - 8deg)); }
  50%      { transform: rotate(calc(var(--r) * 1deg + 8deg)); }
`;
const orbTwinkle = keyframes`
  0%, 100% { opacity: var(--o); }
  50%      { opacity: calc(var(--o) * 2); }
`;

export default function LoadingOverlay() {
  // prefers-reduced-motion: 애니메이션 없이 즉시 본문 노출
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const flakes = useMemo(buildFlakes, []);
  const orbs = useMemo(buildOrbs, []);

  const [pct, setPct] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);
  const timers = useRef([]);

  // 인라인 심볼에서 회전시킬 조각을 잡아둔다.
  // 가운데 WFM 글자와 두 개의 원(링)은 고정, 둥근 글자와 다이아몬드 별만 회전.
  const symbolRef = useRef(null);
  const spinParts = useRef(null);

  useLayoutEffect(() => {
    if (reduced) return;
    const svg = symbolRef.current?.querySelector('svg');
    const group =
      svg?.querySelector('#Layer_1-2 > g') || svg?.querySelector('g > g');
    if (!group) return;

    // 구조: [0 WFM글자, 1 안쪽원, 2 바깥원, 3 위쪽호글자, 4 아래호글자, 5 다이아몬드, 6 다이아몬드]
    const kids = group.children;
    // 둥근 글자 2그룹 + 다이아몬드 별 2개 → 모두 심볼 중심 기준으로 함께 회전
    spinParts.current = [kids[3], kids[4], kids[5], kids[6]].filter(Boolean);
  }, [reduced]);

  // 로딩 중에만 본문 스크롤 잠금 — 오버레이가 사라지면(gone) 반드시 원복해
  // 스크롤 이동이 다시 동작하도록 별도 이펙트로 분리한다.
  useEffect(() => {
    if (reduced || gone) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [reduced, gone]);

  useEffect(() => {
    if (reduced) {
      setGone(true);
      return undefined;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const prog = countProgress(t);
      setPct(Math.round(prog * 100));

      // 로딩 진행률에 맞춰 둥근 글자 + 다이아몬드 별을 심볼 중심으로 회전
      // (진행률 곡선을 그대로 타므로 카운트 속도와 함께 빨라졌다 느려짐)
      // 100%에서는 SYMBOL_TURNS 바퀴를 정확히 채워 % 360 = 0, 제자리 복귀
      const parts = spinParts.current;
      if (parts) {
        const rot = `rotate(${(prog * SYMBOL_TURNS * 360) % 360} ${SYMBOL_MID} ${SYMBOL_MID})`;
        for (let i = 0; i < parts.length; i += 1) {
          parts[i].setAttribute('transform', rot);
        }
      }

      if (t < 1) {
        raf = requestAnimationFrame(tick);
        return;
      }
      timers.current.push(
        setTimeout(() => {
          setFading(true);
          timers.current.push(setTimeout(() => setGone(true), FADE_MS));
        }, HOLD_MS)
      );
    };

    raf = requestAnimationFrame(tick);

    const pending = timers.current;
    return () => {
      cancelAnimationFrame(raf);
      pending.forEach(clearTimeout);
      pending.length = 0;
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
      {/* 흐릿한 원형 광원 10개 */}
      {orbs.map((o, i) => (
        <Box
          key={`orb-${i}`}
          aria-hidden
          sx={{
            position: 'absolute',
            left: `${o.x}%`,
            top: `${o.y}%`,
            width: o.size,
            height: o.size,
            ml: `${-o.size / 2}px`,
            mt: `${-o.size / 2}px`,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 70%)',
            filter: `blur(${Math.round(o.size / 12)}px)`,
            opacity: o.base,
            '--o': o.base,
            willChange: 'opacity',
            animation: `${orbTwinkle} ${o.dur}s ease-in-out ${o.delay}s infinite`,
          }}
        />
      ))}

      {/* 눈송이 24~32개 — 가장자리에 더 많이, 중앙은 비움 */}
      {flakes.map((f, i) => (
        <Box
          key={`flake-${i}`}
          aria-hidden
          sx={{
            position: 'absolute',
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            ml: `${-f.size / 2}px`,
            mt: `${-f.size / 2}px`,
            opacity: f.base,
            '--o': f.base,
            willChange: 'opacity',
            animation: `${flakeTwinkle} ${f.dur}s ease-in-out ${f.delay}s infinite`,
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              transformOrigin: 'center',
              '--r': f.rot,
              ...(f.spin
                ? {
                    willChange: 'transform',
                    animation: `${flakeSpin} 20s ease-in-out ${f.delay}s infinite`,
                  }
                : { transform: `rotate(${f.rot}deg)` }),
            }}
          >
            <Snowflake variant={f.variant} />
          </Box>
        </Box>
      ))}

      {/* 상단에서 40px 지점, 화면 전체 폭의 가로 진행 라인 (현재 그대로) */}
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

      {/* 중앙: 심볼 + 퍼센트 숫자 (현재 그대로) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, md: 4 },
        }}
      >
        <Box
          ref={symbolRef}
          role="img"
          aria-label="Winter Forest Market in Taehwa 심볼"
          dangerouslySetInnerHTML={{ __html: symbolInlineHtml }}
          sx={{
            width: { xs: 200, md: 320 },
            '& svg': { display: 'block', width: '100%', height: 'auto' },
          }}
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
