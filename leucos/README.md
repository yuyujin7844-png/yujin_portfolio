# LEUCOS

티트리 진정 스킨케어 가상 브랜드 **LEUCOS**의 메인 페이지입니다. (포트폴리오용)

- 배포: <https://yuyujin7844-png.github.io/yujin_portfolio/leucos/>
- 디자인: Figma `LEUCOS_main` (1920 기준) — 이미지·아이콘은 피그마에서 내려받아 `assets/`에 저장
- 스택: Vite 5 · React 18 · MUI v9 (`sx`) · Pretendard

## 실행

```bash
npm install
npm run dev     # 개발 서버
npm run build   # dist/ 빌드
npm run lint
```

## 구조

```
src/
├── App.jsx                     # 섹션 조립
├── theme.js                    # 컬러/폰트/레이아웃 토큰
├── data/content.js             # 메뉴·스토리·상품·SNS 데이터
├── components/
│   ├── layout/  Header · Footer · ScrollTopButton
│   └── ui/      Container · CroppedImage · ProductCard · LikeButton
└── sections/    Hero · Story · SoothingLine · Set
```

## 반응형

| 구간 | 주요 변화 |
|---|---|
| lg (1200~) | 시안 배치 그대로 — 수딩 라인 카드가 사진 위로 겹침 |
| md (900~1199) | 사진 → 카드 3열로 세로 배치 |
| xs·sm (~899) | 햄버거 메뉴, 스토리·상품 카드 가로 스와이프, 세트/푸터 세로 배치 |

## 인터랙션

- 스토리 카드: 마우스를 올리거나 탭하면 녹색 오버레이 + 문구 (시안의 Gentle 카드 상태)
- 상품 카드 하트: 찜 토글 (토너는 시안처럼 찜된 상태로 시작)
- 맨 위로 버튼: 히어로를 지나면 나타남
- GNB: 각 섹션으로 이동 (SHOP → 세트, ABOUT → 스토리, INGREDIENT → 수딩 라인, JOURNAL → 푸터)
