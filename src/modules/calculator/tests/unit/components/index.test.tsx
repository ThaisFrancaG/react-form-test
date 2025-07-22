import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import CalculatorModule from '../../..';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
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

  it('should load input display if input is given', async () => {
    const mockInput = createCalculatorFormData();

    fireEvent.change(screen.getByLabelText(/valor empréstimo/i), {
      target: { value: mockInput.initialLoan },
    });
    fireEvent.change(screen.getByLabelText(/parcelas/i), {
      target: { value: mockInput.installmentsAmount },
    });
    fireEvent.change(screen.getByLabelText(/data de nascimento/i), {
      target: { value: mockInput.birthDate },
    });

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }));

    await waitFor(() => {
      expect(screen.getByText('Dados do Empréstimo')).toBeInTheDocument();
      expect(screen.getByText('Plano De Pagamento')).toBeInTheDocument();
    });
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
