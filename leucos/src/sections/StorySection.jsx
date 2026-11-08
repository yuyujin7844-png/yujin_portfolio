import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Container from '../components/ui/Container.jsx';
import { COLORS } from '../theme.js';
import { STORIES, STORY_CARD } from '../data/content.js';
import { asset } from '../utils/asset.js';

const pct = (v, base) => `${(v / base) * 100}%`;

// 카드보다 크게 놓고 잘라낸 사진 (좌우 반전 / -90° 회전 포함)
function StoryImage({ image }) {
  const { box } = image;
  return (
    <Box
      sx={{
        position: 'absolute',
        left: pct(box.left, STORY_CARD.width),
        top: pct(box.top, STORY_CARD.height),
        width: pct(box.width, STORY_CARD.width),
        height: pct(box.height, STORY_CARD.height),
      }}
    >
      <Box
        component="img"
        src={asset(image.src)}
        alt=""
        loading="lazy"
        sx={{
          position: 'absolute',
          maxWidth: 'none',
          objectFit: 'cover',
          ...(image.rotate
            ? {
                // 세로 사진을 -90° 돌려 가로 박스(827 × 617)를 채움
                left: '50%',
                top: '50%',
                width: pct(box.height, box.width),
                height: pct(box.width, box.height),
                transform: 'translate(-50%, -50%) rotate(-90deg)',
              }
            : { inset: 0, width: '100%', height: '100%', transform: image.flip ? 'scaleX(-1)' : 'none' }),
        }}
      />
    </Box>
  );
}

function StoryCard({ story, active, onActivate }) {
  return (
    <Box
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: `${STORY_CARD.width} / ${STORY_CARD.height}`,
        cursor: 'pointer',
        outline: 'none',
        '&:focus-visible': { outline: `2px solid ${COLORS.green}`, outlineOffset: 2 },
      }}
    >
      <StoryImage image={story.image} />

      {story.bottomShade && (
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '17.65%', // 108 / 612
            background: 'linear-gradient(180deg, rgba(138,138,134,0) 0%, #666362 100%)',
          }}
        />
      )}

      {/* 기본 상태: 원형 배지 */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '49.2%',
          width: 104,
          height: 104,
          transform: 'translate(-50%, -50%)',
          display: 'grid',
          placeItems: 'center',
          backgroundImage: `url(${asset(story.badge)})`,
          backgroundSize: '100% 100%',
          opacity: active ? 0 : 1,
          transition: 'opacity .35s',
        }}
      >
        <Typography sx={{ fontSize: 25, color: COLORS.white, lineHeight: 'normal' }}>{story.title}</Typography>
      </Box>

      {/* 활성 상태: 녹색 오버레이 + 문구 (피그마 Gentle 카드) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: COLORS.overlay,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          color: '#EEEEEE',
          opacity: active ? 1 : 0,
          transition: 'opacity .35s',
        }}
      >
        <Typography sx={{ fontSize: 28, fontWeight: 500, lineHeight: 'normal' }}>{story.title}</Typography>
        <Typography sx={{ fontSize: 18, lineHeight: 'normal' }}>{story.desc}</Typography>
      </Box>
    </Box>
  );
}

// OUR STORY — 타이틀 + 문단 + 카드 3장
export default function StorySection() {
  const [active, setActive] = useState('gentle');

  return (
    <Box component="section" id="story" sx={{ pt: { xs: '96px', md: '160px', lg: '235px' } }}>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: 34, lg: 46 }, fontWeight: 500, color: COLORS.green, lineHeight: 'normal' }}
          >
            OUR STORY
          </Typography>
          <Box sx={{ mt: { xs: '32px', lg: '71px' }, color: COLORS.story, fontSize: { xs: 15, md: 16 }, lineHeight: 'normal' }}>
            <Typography sx={{ font: 'inherit', letterSpacing: '0.8px' }}>
              티트리의 학명 Melaleuca는 &apos;검다&apos;와 &apos;희다&apos;라는 뜻의 그리스어에서 왔습니다.
            </Typography>
            <Typography sx={{ font: 'inherit', letterSpacing: '-0.8px', mt: '8px' }}>
              겉은 거칠어도 속은 희고 맑은 나무처럼, LEUCOS는 예민해진 피부 속을 차분하게 돌봅니다.
            </Typography>
          </Box>
        </Box>

        {/* 카드: 데스크톱 3열(간격 19) / 모바일 가로 스크롤 */}
        <Box
          sx={{
            mt: { xs: '48px', lg: '101px' },
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(3, 78%)', sm: 'repeat(3, 1fr)' },
            gap: { xs: '12px', lg: '19px' },
            overflowX: { xs: 'auto', sm: 'visible' },
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            '& > *': { scrollSnapAlign: 'start' },
          }}
        >
          {STORIES.map((story) => (
            <StoryCard
              key={story.key}
              story={story}
              active={active === story.key}
              onActivate={() => setActive(story.key)}
            />
          ))}
        </Box>

        {/* 하단 그라데이션 라인 + 캡션 */}
        <Box component="img" src={asset('ic/line47.svg')} alt="" width={1438} height={1} sx={{ mt: '15px', width: '100%' }} />
        <Typography sx={{ mt: '2px', textAlign: 'right', fontSize: 14, color: COLORS.caption, lineHeight: 'normal' }}>
          Black bark, white heart
        </Typography>
      </Container>
    </Box>
  );
}
