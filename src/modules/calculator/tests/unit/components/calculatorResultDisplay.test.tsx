import { render, waitFor } from '@testing-library/react';
import { CalculatorResultDisplay } from '../../../components';
import React from 'react';
import {
  createCalculatorFormData,
  createPaymentPlanData,
} from '../../../../../test-utils/factories/formFactorie';
import { PaymentDetails } from '../../../types';
import { describe, it, beforeEach, expect, vi } from 'vitest';

describe('CalculatorResultDisplay', () => {
  let mockInputData = createCalculatorFormData();
  let mockOutputData: PaymentDetails;
  let mockOnCalculate: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    mockOutputData = await createPaymentPlanData(mockInputData);
    mockOnCalculate = vi.fn();

    render(
      <CalculatorResultDisplay
        data={mockInputData}
        onCalculate={mockOnCalculate}
        outputData={mockOutputData}
      />,
    );
  });

  it('should update display when data is changed', async () => {
    expect(mockOnCalculate).toHaveBeenCalledTimes(1);

    const newInputData = createCalculatorFormData({
      initialLoan: mockInputData.initialLoan + 1000,
    });
    const newOutputData = await createPaymentPlanData(newInputData);

    await waitFor(async () => {
      render(
        <CalculatorResultDisplay
          data={newInputData}
          onCalculate={mockOnCalculate}
          outputData={newOutputData}
        />,
      );
    });

    expect(mockOnCalculate).toHaveBeenCalledTimes(2);
  });
});
