# ARKHE Robotics

피지컬 AI 로보틱스 기업 **ARKHE Robotics**의 메인 페이지입니다.
`ARKHE Robotics_main.png` 시안을 기준으로 React + MUI로 구현했습니다.

## 기술 스택

- React 18 + Vite 5
- MUI v9 + Emotion
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

`src/theme.js`의 `LAYOUT` / `SECTION_X` 토큰으로 관리하며,
`components/layout/Section.jsx`가 12컬럼 CSS Grid를 제공합니다.
섹션 내부에서는 `gridColumn: '1 / span 6'` 형태로 컬럼을 지정합니다.

## 섹션 구성

| # | 섹션 | 파일 |
|---|---|---|
| 1 | Hero — The Beginning of Physical AI | `sections/HeroSection.jsx` |
| 2 | Business — 4개 제품 라인업 | `sections/BusinessSection.jsx` |
| 3 | Company — 아르케 철학 / 3가지 가치 | `sections/CompanySection.jsx` |
| 4 | Core Technology — NOUS 원형 다이어그램 | `sections/CoreTechSection.jsx` |
| 5 | Arkhe in Numbers — 성과 지표 | `sections/NumbersSection.jsx` |
| 6 | Newsroom — 최신 소식 | `sections/NewsroomSection.jsx` |
| 7 | Contact / Career | `sections/ContactCareerSection.jsx` |

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

- `assets/img/` — 원본 PNG(13~18MB)를 1920px/900px JPG로 리사이즈해 사용
- `assets/ic/` — 시안 SVG 아이콘 (한글 파일명은 영문으로 변경: 인지→cognition, 판단→judgment, 학습→learning, 행동→action)
