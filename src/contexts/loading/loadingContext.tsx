import { createContext } from 'react';
import { LoadingContextProps } from './types';

export const LoadingContext = createContext<LoadingContextProps | undefined>(undefined);
