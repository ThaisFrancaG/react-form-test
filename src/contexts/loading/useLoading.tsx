import { useContext } from 'react';
import { LoadingContextProps } from './types';
import { LoadingContext } from './loadingContext';

export const useLoading = (): LoadingContextProps => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};
