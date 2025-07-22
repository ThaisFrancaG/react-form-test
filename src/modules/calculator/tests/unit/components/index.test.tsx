import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import CalculatorModule from '../../..';
import { describe, it, beforeEach, expect } from 'vitest';
import { LoadingProvider } from '../../../../../contexts/loading/loadingProvider';
import { ThemeProvider } from '../../../../../contexts/theme';

describe('CalculatorIndex', () => {
  beforeEach(() => {
    render(
      <LoadingProvider>
        <ThemeProvider>
          <CalculatorModule />
        </ThemeProvider>
      </LoadingProvider>,
    );
  });

  it('loads only form on start', () => {
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.queryByText(/dados do empréstimo/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/plano de pagamento/i)).not.toBeInTheDocument();
  });

  it('does not display any result if loan is zero', async () => {
    fireEvent.change(screen.getByLabelText(/valor empréstimo/i), {
      target: { value: 0 },
    });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.queryByTestId('input-display')).not.toBeInTheDocument();
      expect(screen.queryByTestId('result-display')).not.toBeInTheDocument();
    });
  });
});
