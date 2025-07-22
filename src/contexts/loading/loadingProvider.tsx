import { useState } from 'react';
import { LoadingContext } from './loadingContext';
import React from 'react';

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value: boolean) => setIsLoading(value);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>{children}</LoadingContext.Provider>
  );
};
