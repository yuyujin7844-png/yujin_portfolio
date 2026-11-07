# Sometoday

키즈 사진 스튜디오 **Sometoday(썸투데이)** 의 예약 메인 페이지입니다.
[Figma 시안](https://www.figma.com/design/sNAyB4iCa6zz6oOMJHXVWO/?node-id=218-261)(1920 기준)을 React + MUI로 구현했습니다.

- 배포: <https://yuyujin7844-png.github.io/yujin_portfolio/Somtoday/>

## 기술 스택

- React 18 + Vite 5
- MUI v9 (`sx` prop, 색상은 `src/theme.js`의 `COLORS` 토큰)
- 폰트: **Noto Sans KR**(국문) / **Roboto**(영문) — Google Fonts

## 섹션 구성

| # | 섹션 | 파일 |
|---|---|---|
| - | Header — 로고 + GNB (히어로 위에 겹침) | `components/layout/Header.jsx` |
| 1 | Hero — 언젠가 그리워 할, 오늘 / 예약 하기 | `sections/HeroSection.jsx` |
| 2 | About — Sometoday 소개 | `sections/AboutSection.jsx` |
| 3 | Studio Concept — 6개 컨셉 카드 (드래그·가로 스크롤) | `sections/ConceptSection.jsx` |
| 4 | Review — 6개 후기 카드 (드래그·가로 스크롤, 더보기) | `sections/ReviewSection.jsx` |
| - | Footer / 플로팅 메뉴(톡 상담·바로 예약·맨 위로) | `components/layout/` |

카드 내용은 `src/data/concepts.js`, `src/data/reviews.js`에서 관리합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173/yujin_portfolio/Somtoday/
npm run lint
npm run build
```

## 에셋

- 모두 Figma MCP로 내려받은 원본입니다 (`assets/`를 `publicDir`로 사용).
- `assets/img/` — 원본 PNG(16~24MB)를 표시 크기 2배 해상도의 WebP로 변환 (비율 유지, 총 280MB → 3MB)
- `assets/ic/` — 피그마 SVG 아이콘 그대로 사용
- 피그마의 사각형 마스크는 `overflow: hidden` 프레임으로 대체했습니다 (`components/ui/CroppedImage.jsx`).
