# yujin portfolio

React + MUI + Supabase 실습 프로젝트 모음. 한 저장소 안에 여러 프로젝트를 서브폴더로 두고, GitHub Pages로 함께 배포합니다.

## 배포 URL

| 프로젝트 | URL | 설명 |
|---|---|---|
| 랜딩페이지 | <https://yuyujin7844-png.github.io/yujin_portfolio/> | 각 프로젝트로 가는 인덱스 |
| Moviestagram (`mini_sns`) | <https://yuyujin7844-png.github.io/yujin_portfolio/mini_sns/> | 영화·공연 감상 공유 미니 SNS |
| Bloom Champagne (`Bloom_Champagne`) | <https://yuyujin7844-png.github.io/yujin_portfolio/Bloom_Champagne/> | 논알코올 스파클링 브랜드 랜딩페이지 |
| Winter Forest Market (`winter_foreste_market`) | <https://yuyujin7844-png.github.io/yujin_portfolio/winter_foreste_market/> | 태화강 국가정원 크리스마스 마켓 행사 랜딩페이지 |

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 세 프로젝트를 빌드해 자동 배포합니다 (약 1~2분 소요).

## 프로젝트 구조

```
yujin_portfolio/
├── mini_sns/                 # Moviestagram (Vite + React + MUI + Supabase)
├── Bloom_Champagne/          # Bloom Champagne 랜딩페이지 (Vite + React + MUI + Supabase)
├── winter_foreste_market/    # Winter Forest Market 크리스마스 마켓 랜딩페이지 (Vite + React + MUI + Supabase)
├── deploy/index.html         # 배포 시 사이트 루트에 올라가는 랜딩페이지
└── .github/workflows/
    └── deploy.yml            # GitHub Pages 배포 워크플로
```

## 로컬 실행 방법

각 프로젝트는 독립적으로 실행합니다. **Node.js 20 이상** 필요.

### mini_sns

```bash
cd mini_sns
npm install
npm run dev
```

- 개발 서버: <http://localhost:5173/yujin_portfolio/mini_sns/>
  (`vite.config.js`의 `base` 때문에 루트 `/`는 이 경로로 리다이렉트됩니다)
- 프로덕션 빌드 미리보기: `npm run build && npm run preview`

### Bloom_Champagne

```bash
cd Bloom_Champagne
npm install
npm run dev
```

- 개발 서버: <http://localhost:5173/yujin_portfolio/Bloom_Champagne/>
- 이미지·영상은 `assets/` 폴더를 `publicDir`로 사용합니다.

### winter_foreste_market

```bash
cd winter_foreste_market
npm install
npm run dev
```

- 개발 서버: <http://localhost:5173/yujin_portfolio/winter_foreste_market/>
- 단일 페이지 랜딩(라우터 없음). 헤더 메뉴는 `#about` 등 해시 앵커로 스크롤합니다.
- 포스터·티켓·심볼 이미지는 `assets/` 폴더를 `publicDir`로 사용합니다.
- 티켓 예약 폼은 더미이며 `wfm_ticket_reservations` 테이블에 INSERT만 합니다 (실결제 없음).

### 공통 스크립트

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 (HMR) |
| `npm run build` | `dist/`로 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 로컬 미리보기 |
| `npm run lint` | ESLint 검사 |

## Supabase 설정

두 프로젝트 모두 같은 Supabase 프로젝트를 사용합니다.

- API URL: `https://nfwoyrgbqhpobmbikeud.supabase.co`
- 대시보드: <https://supabase.com/dashboard/project/nfwoyrgbqhpobmbikeud>

### 환경변수 (선택)

`src/supabase.js`(`mini_sns`) / `src/lib/supabase.js`(`Bloom_Champagne`)에 기본값이 하드코딩되어 있어
환경변수 없이도 동작합니다. 다른 Supabase 프로젝트에 연결하려면 각 프로젝트 루트에 `.env`를 만드세요.

```env
VITE_SUPABASE_URL=https://<your-project>.supabase.co
VITE_SUPABASE_ANON_KEY=<your-anon-key>
```

> `anon` 키는 클라이언트에 노출되어도 되는 공개 키입니다. 데이터 보호는 각 테이블의 RLS 정책으로 합니다.
> `.env` 파일은 `.gitignore` 처리되어 있습니다.

### DB 스키마 (마이그레이션)

| 프로젝트 | 마이그레이션 파일 | 테이블 |
|---|---|---|
| `mini_sns` | `supabase/migrations/20260901000000_mini_sns_initial_schema.sql` | `ms_users`, `ms_posts`, `ms_comments` |
| `Bloom_Champagne` | `supabase/migrations/20260901000000_bloom_reservations_schema.sql` | `bloom_reservations` |
| `winter_foreste_market` | `supabase/migrations/20260901000000_wfm_ticket_reservations_schema.sql` | `wfm_ticket_reservations` |

새 Supabase 프로젝트에 적용하려면 대시보드 SQL Editor에 해당 파일 내용을 붙여넣어 실행하거나,
Supabase CLI로 `supabase db push` 하세요. (데모용이라 RLS 정책이 느슨하게 열려 있습니다.)

## 라우팅

두 프로젝트 모두 `react-router`의 **HashRouter**를 사용합니다.
GitHub Pages 프로젝트 사이트는 서브폴더 SPA 폴백(`404.html`)을 지원하지 않아,
경로가 `#/` 뒤에 오도록 해서 새로고침 시에도 404가 나지 않게 했습니다.
