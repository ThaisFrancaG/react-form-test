/* eslint-env jest */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CalculatorForm } from '../../../components';
import React from 'react';

it('Loads Form', () => {
  const mockOnSubmit = jest.fn();
  const mockSetLoading = jest.fn();
  const startingValue = { initialLoan: 0, installmentsAmount: 0, birthDate: '', age: 0 };
  render(
    <CalculatorForm
      startingValue={startingValue}
      onSubmit={mockOnSubmit}
      setLoading={mockSetLoading}
    />,
  );
  expect(screen.getByLabelText('Valor Empréstimo')).toHaveValue(startingValue.initialLoan);
  expect(screen.getByLabelText('Pagar em Quantos Meses')).toHaveValue(
    startingValue.installmentsAmount,
  );
  expect(screen.getByLabelText('Data de Nascimento')).toHaveValue(startingValue.birthDate);
});
