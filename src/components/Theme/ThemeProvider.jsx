/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { lightTheme } from './themes';
import { GlobalStyle } from '../../styles/GlobalStyle';

export default function ThemeProvider({ children }) {
  return (
    <EmotionThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </EmotionThemeProvider>
  );
}
