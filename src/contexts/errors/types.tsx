interface ErrorContextProps {
  errorMessage: string | null;
  showError: (message: string) => void;
  clearError: () => void;
}
export type { ErrorContextProps };
