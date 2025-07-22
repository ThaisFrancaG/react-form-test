import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CalculatorForm } from '../../../components';
import React from 'react';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { formatBRL } from '../../../../../shared/utils/numeric.utils';

describe('CalculatorForm', () => {
  const startingValue = createCalculatorFormData();

  let mockOnSubmit: jest.Mock;
  let mockSetLoading: jest.Mock;

  beforeEach(() => {
    mockOnSubmit = jest.fn();
    mockSetLoading = jest.fn();

    render(
      <CalculatorForm
        startingValue={startingValue}
        onSubmit={mockOnSubmit}
        setLoading={mockSetLoading}
        loading={false}
      />,
    );
  });

  it('updates value on input change and calls setLoading', () => {
    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    fireEvent.change(loanInput, { target: { value: 100 } });

    expect(loanInput).toHaveValue(formatBRL(100));
  });

  it('calls onSubmit with correct data when form is valid', async () => {
    fireEvent.change(screen.getByLabelText(/valor empréstimo/i), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText(/parcelas/i), { target: { value: '12' } });
    fireEvent.change(screen.getByLabelText(/data de nascimento/i), {
      target: { value: '01/01/1990' },
    });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  it('calls onSubmit with current form data and toggles loading state on submit', async () => {
    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(loanInput, { target: { value: 1000 } });
    fireEvent.click(submitButton);
    await waitFor(() => expect(mockSetLoading).toHaveBeenCalledWith(true));
    await waitFor(() => expect(mockSetLoading).toHaveBeenCalledWith(false));
  });
});
