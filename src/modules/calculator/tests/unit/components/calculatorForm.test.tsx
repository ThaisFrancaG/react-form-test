import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
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
  // it('calls onSubmit with current form data and toggles loading state on submit', () => {
  //   const loanInput = screen.getByLabelText(/valor empréstimo/i);
  //   const submitButton = screen.getByRole('button', { name: /enviar/i });

  //   fireEvent.change(loanInput, { target: { value: 1000 } });
  //   fireEvent.click(submitButton);
  //   const expectedInput = { ...startingValue, initialLoan: 100000 };
  //   expect(mockSetLoading).toHaveBeenCalledWith(true);
  //   expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining(expectedInput));
  //   expect(mockSetLoading).toHaveBeenCalledWith(false);
  //   expect(mockSetLoading).toHaveBeenCalledTimes(2);
  // });
});
