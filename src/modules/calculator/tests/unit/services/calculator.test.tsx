import { describe, it, beforeEach, expect } from 'vitest';
import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { LoanPlanCalculator } from '../../../services/calculatorService';
import { InputLoanData } from '../../../types';
import { ILoanPlanCalculator } from '../../../interfaces/services.interface';

describe('LoanPlanCalculator Service', () => {
  let calculator: ILoanPlanCalculator;
  let mockInput: InputLoanData;

  beforeEach(() => {
    mockInput = createCalculatorFormData();
    calculator = new LoanPlanCalculator(mockInput);
  });

  it('calcula empréstimo com juros corretamente', async () => {
    const result = await calculator.calculateLoanPayment();

    expect(result.finalLoan).toBeGreaterThan(mockInput.initialLoan);
    expect(result.monthlyInterestRate).toBeGreaterThan(0);
    expect(result.installmentValue).toBeGreaterThan(0);
  });

  it('trata corretamente o caso de parcela única', async () => {
    const singleInstallmentInput = { ...mockInput, installmentsAmount: 1 };
    const singleInstallmentCalc = new LoanPlanCalculator(singleInstallmentInput);
    const result = await singleInstallmentCalc.calculateLoanPayment();

    expect(result.installmentsAmount).toBe(1);
    expect(result.installmentValue).toBeGreaterThan(0);
    expect(result.finalLoan).toBeCloseTo(result.installmentValue, 2);
  });

  it('finalLoan should be montlhyPayment × installmentsAmount', async () => {
    const result = await calculator.calculateLoanPayment();

    const expectedFinalLoan = result.installmentValue * result.installmentsAmount;
    expect(result.finalLoan).toBeCloseTo(expectedFinalLoan, 2);
  });
});
