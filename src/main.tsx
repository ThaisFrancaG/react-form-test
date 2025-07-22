import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import './shared/styles/themes.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme/themeProvider';
import { LoadingProvider } from './contexts/loading/loadingProvider';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
