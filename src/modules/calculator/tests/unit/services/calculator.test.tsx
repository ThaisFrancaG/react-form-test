import { createCalculatorFormData } from '../../../../../test-utils/factories/formFactorie';
import { LoanPlanCalculator } from '../../../services/calculatorService';
import { InputLoanData } from '../../../types';
import { ILoanPlanCalculator } from '../components/interfaces/services.interface';

describe('Calculator Service', () => {
  let loanPlanCalculator: ILoanPlanCalculator;
  let mockInput: InputLoanData;
  beforeEach(async () => {
    mockInput = createCalculatorFormData();
    loanPlanCalculator = new LoanPlanCalculator(mockInput);
  });
  it('returns loan value with interest', async () => {
    const loanPaymentInfo = await loanPlanCalculator.calculateLoanPayment();
    expect(loanPaymentInfo.finalLoan).toBeGreaterThan(mockInput.initialLoan);
    expect(loanPaymentInfo.monthlyInterestRate).toBeGreaterThan(0);
  });
  it('handles single installment correctly', async () => {
    mockInput.installmentsAmount = 1;
    const calculator = new LoanPlanCalculator(mockInput);
    const result = await calculator.calculateLoanPayment();

    expect(result.installmentsAmount).toBe(1);
    expect(result.installmentValue).toBeGreaterThan(0);
  });
  it('final loan should be installmentValue * installmentsAmount', async () => {
    const calculator = new LoanPlanCalculator(mockInput);
    const result = await calculator.calculateLoanPayment();

    const expectedFinalLoan = result.installmentValue * result.installmentsAmount;
    expect(result.finalLoan).toBeCloseTo(expectedFinalLoan, 2);
  });
});
