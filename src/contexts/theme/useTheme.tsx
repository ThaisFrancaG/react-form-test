import { useContext } from 'react';
import { ThemeContextProps } from './types';
import { ThemeContext } from './themeProvider';

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
