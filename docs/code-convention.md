# 코드 컨벤션

`_template_settings`의 ESLint 설정(`eslint.config.js`)을 기준으로 합니다.

## 1. 파일/폴더 구조

```
src/
├── main.jsx      # 엔트리포인트, ThemeProvider/CssBaseline 설정
├── App.jsx       # 최상위 App 컴포넌트
├── theme.js      # MUI 테마 정의
├── index.css     # 전역 CSS
└── assets/       # 이미지 등 정적 리소스
```

- 컴포넌트가 늘어나면 `src/components/`, 페이지는 `src/pages/` 등으로 분리합니다.
- 파일명은 컴포넌트와 동일하게 `PascalCase.jsx`를 사용합니다. (예: `UserCard.jsx`)

## 2. React 컴포넌트 작성 규칙

- 함수형 컴포넌트 + Hooks만 사용합니다. 클래스형 컴포넌트는 사용하지 않습니다.
- 컴포넌트 export는 default export를 기본으로 합니다.
- Props는 구조 분해 할당으로 받습니다.

```jsx
function UserCard({ name, role }) {
  return (
    <Card>
      <Typography>{name}</Typography>
    </Card>
  )
}

export default UserCard
```

## 3. Hooks 규칙

- `eslint-plugin-react-hooks`의 `recommended` 규칙을 따릅니다 (조건문/반복문 안에서 Hook 호출 금지 등).
- Fast Refresh를 위해 컴포넌트 파일에는 컴포넌트만 export합니다 (`react-refresh/only-export-components` 경고 참고, 상수 export는 허용).

## 4. 네이밍

| 대상 | 규칙 | 예 |
|---|---|---|
| 컴포넌트 | PascalCase | `UserCard` |
| 함수/변수 | camelCase | `handleClick`, `userList` |
| 상수 | UPPER_SNAKE_CASE | `MAX_ITEM_COUNT` |
| 커스텀 훅 | `use` 접두사 + camelCase | `useUserData` |

## 5. 스타일링

- 인라인 스타일 객체 대신 MUI의 `sx` prop을 사용합니다.
- 색상/간격 값은 [디자인 시스템](./design-system.md)의 테마 토큰을 참조합니다.

## 6. Lint

- 커밋 전 `npm run lint`로 ESLint 검사를 통과시킵니다.
- `dist` 폴더는 lint 대상에서 제외됩니다.
