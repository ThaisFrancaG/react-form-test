import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import CalculatorModule from '../../..';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
describe('CalculatorIndex', () => {
  beforeEach(() => {
    render(<CalculatorModule />);
  });
  it('loads only form on start', () => {
    const inputSummaryHeader = screen.queryByText(/dados do empréstimo/i);
    const resultSummaryHeader = screen.queryByText(/plano de pagamento/i);

    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(inputSummaryHeader).not.toBeInTheDocument();
    expect(resultSummaryHeader).not.toBeInTheDocument();
  });
  it('should load input display if input is given', async () => {
    const mockInput = createCalculatorFormData();
    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    const installmentsInput = screen.getByLabelText(/pagar em quantos meses/i);
    const birthDate = screen.getByLabelText(/data de nascimento/i);

    fireEvent.change(loanInput, { target: { value: mockInput.initialLoan } });
    fireEvent.change(installmentsInput, { target: { value: mockInput.installmentsAmount } });
    fireEvent.change(birthDate, { target: { value: mockInput.birthDate } });

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByTestId('input-display')).toBeInTheDocument();
      expect(screen.queryByTestId('result-display')).toBeInTheDocument();
    });
  });
  it('does not display any result if loan is zero', () => {
    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    fireEvent.change(loanInput, { target: { value: 0 } });
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.click(submitButton);

    expect(screen.queryByTestId('input-display')).not.toBeInTheDocument();
    expect(screen.queryByTestId('result-display')).not.toBeInTheDocument();
  });
});
