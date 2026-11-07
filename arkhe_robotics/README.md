# ARKHE Robotics

피지컬 AI 로보틱스 기업 **ARKHE Robotics**의 메인 페이지입니다.
[Figma 시안](https://www.figma.com/design/sNAyB4iCa6zz6oOMJHXVWO/?node-id=170-306)(1920 기준)을 기준으로 React + Tailwind CSS로 구현했습니다.
색상·폰트·간격은 피그마 값을 그대로 `tailwind.config.js` 토큰으로 옮겼습니다.

## 기술 스택

- React 18 + Vite 5
- Tailwind CSS 3.4 (PostCSS)
- 폰트: **Unbounded**(영문 헤드라인, Google Fonts) / **Pretendard**(국문 본문, jsDelivr CDN)

## 그리드 시스템

| 항목 | 값 |
|---|---|
| 기준 해상도 | 1920px |
| 컬럼 | 12 |
| 마진(좌/우) | 240px |
| 거터 | 20px |
| 콘텐츠 폭 | 1440px |
| 1컬럼 폭 | 101.67px |

콘텐츠 폭은 `.container-content`(max-width 1440 + 좌우 20px) 유틸리티로 통일합니다.

## 섹션 구성

| # | 섹션 | 파일 |
|---|---|---|
| 1 | Hero — The Beginning of Physical AI | `sections/HeroSection.jsx` |
| 2 | Business — 4개 제품 라인업 | `sections/BusinessSection.jsx` |
| 3 | Core Technology — NOUS 원형 다이어그램 | `sections/CoreTechSection.jsx` |
| 4 | Arkhe in Numbers — 성과 지표 | `sections/NumbersSection.jsx` |
| 5 | Newsroom — 최신 소식 | `sections/NewsroomSection.jsx` |
| 6 | Contact / Career | `sections/ContactCareerSection.jsx` |

공통 레이아웃: `Header`, `Footer`, `FloatingMenu`(우측 퀵메뉴)

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run lint     # ESLint
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 확인
```

## 에셋

- 모두 Figma MCP로 내려받은 원본입니다.
- `assets/img/` — 원본 PNG(11~19MB)를 표시 크기 2배 해상도의 WebP로 변환 (비율 유지)
- `assets/ic/` — 피그마 SVG 아이콘 그대로 사용 (한글 레이어명은 영문 파일명으로: 인지→cognition, 판단→judgment, 행동→action, 학습→learning)
