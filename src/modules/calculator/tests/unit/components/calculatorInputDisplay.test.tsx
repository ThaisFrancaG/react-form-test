import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CalculatorInputDisplay } from '../../../components';
import React from 'react';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { writeCentsAsFinancial } from '../../../../../shared/utils/numeric.utils';

describe('Calculator Input Display', () => {
  const mockData = createCalculatorFormData();

  it('displays the proper data from form', () => {
    render(<CalculatorInputDisplay data={mockData} />);

    expect(screen.getByText(/Empréstimo:/i)).toBeInTheDocument();
    expect(screen.getByText(writeCentsAsFinancial(mockData.initialLoan))).toBeInTheDocument();

    expect(screen.getByText(/Meses:/i)).toBeInTheDocument();
    expect(screen.getByText(mockData.installmentsAmount)).toBeInTheDocument();

    expect(screen.getByText(/Data de nascimento:/i)).toBeInTheDocument();
    expect(screen.getByText(mockData.birthDate)).toBeInTheDocument();
  });
});
