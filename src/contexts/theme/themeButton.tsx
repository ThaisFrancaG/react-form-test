import React from 'react';
import { useTheme } from './useTheme';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Mudar para {theme === 'light' ? 'escuro' : 'claro'}</button>;
};
