import { render, screen } from '@testing-library/react';
import { CalculatorInputDisplay } from '../../../components';
import React from 'react';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { describe, it, expect } from 'vitest';

describe('CalculatorInputDisplay', () => {
  const mockData = createCalculatorFormData();

  it('displays the proper data from form', () => {
    render(<CalculatorInputDisplay data={mockData} />);

    expect(screen.getByText(/Empréstimo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Meses:/i)).toBeInTheDocument();
    expect(screen.getByText(/Data de nascimento:/i)).toBeInTheDocument();
  });
});
