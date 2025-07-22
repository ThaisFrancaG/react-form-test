import { render, screen } from '@testing-library/react';
import { CalculatorInputDisplay } from '../../../components';
import React from 'react';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from 'styled-components';
import { LoadingProvider } from '../../../../../contexts/loading/loadingProvider';
import { lightTheme } from '../../../../../contexts/theme/style';

describe('CalculatorInputDisplay', () => {
  const mockData = createCalculatorFormData();

  it('displays the proper data from form', () => {
    render(
      <LoadingProvider>
        <ThemeProvider theme={lightTheme}>
          <CalculatorInputDisplay data={mockData} />
        </ThemeProvider>
      </LoadingProvider>,
    );

    expect(screen.getByText(/Empréstimo:/i)).toBeInTheDocument();
    expect(screen.getByText(/Meses:/i)).toBeInTheDocument();
    expect(screen.getByText(/Data de nascimento:/i)).toBeInTheDocument();
  });
});
