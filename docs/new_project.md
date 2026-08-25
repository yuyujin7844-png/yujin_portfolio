# 신규 프로젝트 시작 가이드

새 강의/프로젝트를 시작할 때 `_template_settings`를 기준으로 아래 순서를 따릅니다.

## 1. 템플릿 복사

```bash
cp -r _template_settings <새_프로젝트_폴더>
cd <새_프로젝트_폴더>
```

- `node_modules`는 복사에서 제외하고 새로 설치하는 것을 권장합니다.

## 2. 의존성 설치

```bash
npm install
```

포함된 주요 패키지:
- `react`, `react-dom` (v18)
- `react-router-dom` (v7)
- `@mui/material`, `@mui/icons-material` (v9)
- `@emotion/react`, `@emotion/styled`
- `@fontsource/roboto`

## 3. 개발 서버 실행

```bash
npm run dev
```

Vite 개발 서버가 실행되며, 브라우저에서 결과를 확인합니다.

## 4. 프로젝트 커스터마이징 체크리스트

- [ ] `package.json`의 `name` 필드를 프로젝트명으로 변경
- [ ] `theme.js`의 `palette` 색상을 프로젝트 컨셉에 맞게 조정 ([디자인 시스템](./design-system.md) 참고)
- [ ] `index.html`의 `<title>` 변경
- [ ] `src/App.jsx`부터 기능 구현 시작
- [ ] 코드 작성 시 [코드 컨벤션](./code-convention.md) 준수

## 5. 빌드 & 검증

```bash
npm run lint      # 코드 스타일 검사
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 결과 미리보기
```

## 6. 자주 발생하는 문제

| 증상 | 원인 | 해결 |
|---|---|---|
| MUI 컴포넌트 스타일이 깨짐 | `ThemeProvider`/`CssBaseline` 미적용 | `main.jsx`에서 `App`을 `ThemeProvider`로 감쌌는지 확인 |
| 폰트가 기본 산세리프로 보임 | Roboto CSS 미로드 | `main.jsx`에 `@fontsource/roboto` import 확인 |
| `npm run dev` 실행 안 됨 | 의존성 미설치 | `npm install` 재실행, `node_modules` 삭제 후 재설치 |
