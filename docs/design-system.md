# 디자인 시스템 가이드

이 프로젝트는 **MUI(Material UI) v9** + **Emotion**을 기반으로 한 디자인 시스템을 사용합니다.
테마 정의는 `_template_settings/src/theme.js`에 있으며, 새 프로젝트를 만들 때 이 파일을 복사해서 시작합니다.

## 1. 컬러 팔레트

| 용도 | 토큰 | 값 |
|---|---|---|
| Primary | `palette.primary.main` | `#1976d2` |
| Secondary | `palette.secondary.main` | `#dc004e` |

- 컴포넌트에서 색상을 직접 하드코딩(`#1976d2` 등)하지 말고 `theme.palette.primary.main` 형태로 참조합니다.
- 새 색상이 필요하면 `theme.js`의 `palette`에 토큰을 추가하고, 컴포넌트에서는 항상 토큰을 통해 사용합니다.

## 2. 타이포그래피

- 기본 폰트: `Roboto` (`@fontsource/roboto`, 300/400/500/700 weight를 `main.jsx`에서 로드)
- 폰트 스택: `"Roboto", "Helvetica", "Arial", sans-serif`
- 헤딩 등 타이포 변형이 필요하면 `theme.js`의 `typography` 객체에 정의합니다. (예: `h1.fontSize`, `h1.fontWeight`)

## 3. Spacing

- MUI 기본 spacing 단위: `theme.spacing(1) = 8px`
- 여백/간격은 매직 넘버(px) 대신 `theme.spacing(n)` 또는 `sx={{ p: n, m: n }}` 형태로 지정합니다.

## 4. 컴포넌트 사용 원칙

- 버튼, 입력, 카드 등 기본 UI 요소는 직접 만들지 않고 `@mui/material` 컴포넌트를 우선 사용합니다.
- 아이콘은 `@mui/icons-material`에서 가져옵니다.
- 커스텀 스타일이 필요하면 `sx` prop을 우선 사용하고, 복잡한 재사용 스타일만 `@emotion/styled`로 분리합니다.

## 5. 전역 설정

- `CssBaseline`을 `ThemeProvider` 내부에 항상 포함해 브라우저 기본 스타일을 리셋합니다.
- 앱 최상단(`main.jsx`)에서 `ThemeProvider`로 `App`을 감싸 테마를 전역 적용합니다.

```jsx
<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```
