import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CalculatorResultDisplay } from '../../../components';
import React, { act } from 'react';
import {
  createCalculatorFormData,
  createPaymentPlanData,
} from '../../../../../test-utils/factories/formFactorie';
import { PaymentDetails } from '../../../types';

describe('CalculatorResultDisplay', () => {
  let mockInputData = createCalculatorFormData();
  let mockOutputData: PaymentDetails;
  let mockOnCalculate: jest.Mock;

  beforeEach(async () => {
    mockOutputData = await createPaymentPlanData(mockInputData);
    mockOnCalculate = jest.fn();

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
    await act(async () =>
      render(
        <CalculatorResultDisplay
          data={newInputData}
          onCalculate={mockOnCalculate}
          outputData={newOutputData}
        />,
      ),
    );

    expect(mockOnCalculate).toHaveBeenCalledTimes(2);
  });
});
