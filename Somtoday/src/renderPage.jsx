import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme.js';

// 각 페이지 엔트리에서 공통으로 쓰는 렌더 함수 (테마 + CssBaseline 적용)
export default function renderPage(Page) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </React.StrictMode>
  );
}
