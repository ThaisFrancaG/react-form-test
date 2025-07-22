import React, { useState, useCallback } from 'react';
import { ErrorContext } from './errorContext';

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showError = useCallback((message: string) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  }, []);

  const clearError = () => setErrorMessage(null);

  return (
    <ErrorContext.Provider value={{ errorMessage, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
