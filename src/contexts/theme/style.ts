import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    background: '#f5f7fa',
    text: '#111111',
    primary: '#007bff',
    primaryHover: '#0056b3',
    buttonText: '#ffffff',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    background: '#1e1e1e',
    text: '#f1f1f1',
    primary: '#4c8aff',
    primaryHover: '#3661c9',
    buttonText: '#ffffff',
  },
};
