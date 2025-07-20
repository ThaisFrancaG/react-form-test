import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CalculatorResultDisplay } from '../../../components';
import React from 'react';
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

  it('displays proper calculated values', async () => {
    expect(await screen.findByText(String(mockOutputData.finalLoan))).toBeInTheDocument();
    expect(await screen.findByText(String(mockOutputData.installmentValue))).toBeInTheDocument();
    expect(await screen.findByText(String(mockOutputData.monthlyInterestRate))).toBeInTheDocument();
    expect(await screen.findByText(String(mockOutputData.anualInterestRate))).toBeInTheDocument();
  });

  it('should update display when data is changed', async () => {
    const initialFinalLoan = await screen.findByText(String(mockOutputData.finalLoan));
    expect(initialFinalLoan).toBeInTheDocument();
    expect(mockOnCalculate).toHaveBeenCalledTimes(1);
    const newInputData = createCalculatorFormData({
      initialLoan: mockInputData.initialLoan + 1000,
    });
    const newOutputData = await createPaymentPlanData(newInputData);
    render(
      <CalculatorResultDisplay
        data={newInputData}
        onCalculate={mockOnCalculate}
        outputData={newOutputData}
      />,
    );
    const updatedFinalLoan = await screen.findByText(String(newOutputData.finalLoan));
    expect(updatedFinalLoan).toBeInTheDocument();
    expect(updatedFinalLoan).not.toBe(initialFinalLoan);

    expect(mockOnCalculate).toHaveBeenCalledTimes(2);
  });
});
