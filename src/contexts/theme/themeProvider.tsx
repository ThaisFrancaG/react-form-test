import React, { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { GlobalStyle } from '../../test-utils/style/globalStyle';
import { lightTheme, darkTheme } from './style';

export type Theme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={themeObject}>
        <GlobalStyle />
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  );
};
