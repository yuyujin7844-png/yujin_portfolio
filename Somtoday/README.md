# Sometoday

키즈 사진 스튜디오 **Sometoday(썸투데이)** 의 예약 메인 페이지입니다.
[Figma 시안](https://www.figma.com/design/sNAyB4iCa6zz6oOMJHXVWO/?node-id=218-261)(1920 기준)을 React + MUI로 구현했습니다.

- 배포: <https://yuyujin7844-png.github.io/yujin_portfolio/Somtoday/>

## 페이지 구성

Vite 멀티 페이지로 빌드합니다 (`vite.config.js`의 `rollupOptions.input`).

| 페이지 | URL | 엔트리 | 피그마 |
|---|---|---|---|
| 메인 | `/Somtoday/` | `index.html` → `src/main.jsx` → `pages/Home.jsx` | node 218-261 |
| 예약하기 | `/Somtoday/reservation/` | `reservation/index.html` → `src/reservation.jsx` → `pages/ReservationPage.jsx` | node 1-10 (+ 옵션 85-641, 달력 77-15) |

메인의 GNB '예약하기', 히어로 '예약 하기', 플로팅 '바로 예약'이 예약 페이지로 연결되고,
메인 컨셉 카드를 누르면 `?concept=03`처럼 해당 컨셉이 선택된 상태로 열립니다.

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

### 예약하기 (`components/reservation/`)

| Step | 화면 | 파일 | 비고 |
|---|---|---|---|
| 1 | 컨셉 선택 (6개 카드) | `ConceptStep.jsx` | 시안 그대로 |
| 2 | 옵션 선택 (컨셉 추가·인원·보정·인화·액자·앨범) | `OptionStep.jsx`, `QuantityStepper.jsx` | 시안 그대로 |
| 3 | 총액 확인 (금액 내역) | `SummaryStep.jsx` | 시안 없음 → 같은 톤으로 구성 |
| 4 | 날짜·시간 선택 + 예약자 정보 | `DateTimeStep.jsx`, `Calendar.jsx` | 달력은 시안, 시간·입력폼은 추가 |
| 5 | 예약 완료 (예약번호·요약) | `CompleteStep.jsx` | 시안 없음 → 같은 톤으로 구성 |

- 가격·시간대·공휴일은 `src/data/reservation.js` 한 곳에서 관리합니다.
  기본 촬영비(100,000원)와 인화 단가(3,000원)는 시안에 없어 임의로 정한 값입니다.
- 지난 날짜·당일은 '마감', 공휴일은 휴무로 선택할 수 없고, 오늘부터 3개월까지 예약할 수 있습니다.
- 시간대 '마감'은 데모용으로 날짜마다 고정된 규칙으로 만듭니다 (`utils/calendar.js`).
- 서버 저장 없이 화면에서만 동작하는 데모입니다 (실제 예약·결제 없음).

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
