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

## 페이지 구성

Vite 멀티 페이지로 빌드합니다 (`vite.config.js`의 `rollupOptions.input`).

| 페이지 | URL | 엔트리 | 피그마 |
|---|---|---|---|
| 메인 | `/arkhe_robotics/` | `index.html` → `src/main.jsx` → `pages/MainPage.jsx` | node 170-306 |
| 회사소개 | `/arkhe_robotics/company/` | `company/index.html` → `src/company.jsx` → `pages/CompanyPage.jsx` | node 179-518 |

헤더 GNB의 Company, 플로팅 메뉴의 회사소개서가 회사소개 페이지로 연결됩니다.

## 섹션 구성 (메인)

| # | 섹션 | 파일 |
|---|---|---|
| 1 | Hero — The Beginning of Physical AI | `sections/main/HeroSection.jsx` |
| 2 | Business — 4개 제품 라인업 | `sections/main/BusinessSection.jsx` |
| 3 | Core Technology — NOUS 원형 다이어그램 | `sections/main/CoreTechSection.jsx` |
| 4 | Arkhe in Numbers — 성과 지표 | `sections/main/NumbersSection.jsx` |
| 5 | Newsroom — 최신 소식 | `sections/main/NewsroomSection.jsx` |
| 6 | Contact / Career | `sections/main/ContactCareerSection.jsx` |

### 회사소개 (`sections/company/`)

| # | 섹션 | 파일 |
|---|---|---|
| 1 | Hero — 사람과 로봇이 함께 일하는 내일의 시작 | `CompanyHero.jsx` |
| 2 | 만물의 근원을 묻다 (Why ARKHE) | `WhyArkheSection.jsx` |
| 3 | Core Values — 정밀함 / 협력 / 진화 (hover 시 설명 노출) | `CoreValuesSection.jsx` |
| 4 | History — 사옥 이미지 + 연혁 (패널 내부 스크롤) | `HistorySection.jsx` |

공통 레이아웃: `Header`(active 메뉴), `Footer`(tone: dark/light), `FloatingMenu`(우측 퀵메뉴)

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
