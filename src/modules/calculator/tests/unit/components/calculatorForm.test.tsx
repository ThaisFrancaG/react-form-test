import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CalculatorForm } from '../../../components';
import React from 'react';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { formatBRL } from '../../../../../shared/utils/numeric.utils';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { LoadingProvider } from '../../../../../contexts/loading/loadingProvider';
import { ThemeProvider } from '../../../../../contexts/theme';
import userEvent from '@testing-library/user-event';

describe('CalculatorForm', () => {
  const startingValue = createCalculatorFormData();

  let mockOnSubmit: ReturnType<typeof vi.fn>;
  let mockSetLoading: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockOnSubmit = vi.fn().mockResolvedValue(undefined);
    mockSetLoading = vi.fn();

    render(
      <LoadingProvider>
        <ThemeProvider>
          <CalculatorForm
            startingValue={startingValue}
            onSubmit={mockOnSubmit}
            setLoading={mockSetLoading}
            loading={false}
          />
        </ThemeProvider>
      </LoadingProvider>,
    );
  });

  it('updates value on input change and calls setLoading', () => {
    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    fireEvent.change(loanInput, { target: { value: 100 } });

    expect(loanInput).toHaveValue(formatBRL(100));
  });

  it('calls onSubmit with current form data and toggles loading state on submit', async () => {
    const user = userEvent.setup();

    const loanInput = screen.getByLabelText(/valor empréstimo/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    await user.clear(loanInput);
    await user.type(loanInput, '1000');

    await user.click(submitButton);

    await waitFor(() => {
      expect(mockSetLoading).toHaveBeenNthCalledWith(1, true);
      expect(mockSetLoading).toHaveBeenNthCalledWith(2, false);
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
