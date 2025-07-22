import { useContext } from 'react';
import { ErrorContextProps } from './types';
import { ErrorContext } from './errorContext';

export const useError = (): ErrorContextProps => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within ErrorProvider');
  }
  return context;
};
