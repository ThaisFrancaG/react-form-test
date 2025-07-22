// src/contexts/theme/themeWrapper.tsx
import React, { useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themeStyle';
import { ThemeContext } from './themeContext';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('ThemeWrapper must be used within a ThemeProvider');

  const { theme } = context;
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>;
};
