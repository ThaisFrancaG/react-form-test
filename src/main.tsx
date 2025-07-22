import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import './components/shared/themes.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme/themeContext';
import { ErrorProvider } from './contexts/errors/errors';
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
        <ErrorProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </ErrorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
