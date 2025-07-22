export const lightTheme = {
  background: '#c26a6aff',
  text: '#333',
  inputBg: '#fff',
  inputBorder: '#ccc',
  inputFocusBorder: '#007bff',
  inputFocusShadow: 'rgba(0, 123, 255, 0.15)',
  buttonBg: '#007bff',
  buttonHoverBg: '#005dc1',
  buttonDisabledBg: '#b3d4fc',
  buttonText: '#fff',
};

export const darkTheme = {
  background: '#1c1c1e',
  text: '#f1f1f1',
  inputBg: '#2c2c2e',
  inputBorder: '#444',
  inputFocusBorder: '#66b2ff',
  inputFocusShadow: 'rgba(102, 178, 255, 0.2)',
  buttonBg: '#3399ff',
  buttonHoverBg: '#1a75d1',
  buttonDisabledBg: '#3b3b3b',
  buttonText: '#ffffff',
};

export type AppTheme = typeof lightTheme;
