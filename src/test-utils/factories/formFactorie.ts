import { faker } from '@faker-js/faker';
import { InputLoanData, PaymentDetails } from '../../modules/calculator/types';
import { LoanPlanCalculator } from '../../modules/calculator/services/calculatorService';

export function createCalculatorFormData(overrides = {}): InputLoanData {
  const mock = {
    initialLoan: faker.number.int({ min: 1000, max: 100000000 }),
    installmentsAmount: faker.number.int({ min: 6, max: 120 }),
    birthDate: faker.date
      .birthdate({ min: 18, max: 70, mode: 'age' })
      .toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    ...overrides,
  };

  return mock;
}

export async function createPaymentPlanData(
  startingData: InputLoanData,
  overrides = {},
): Promise<PaymentDetails> {
  const loanPlanCalculator = new LoanPlanCalculator(startingData);

  const paymentPlan = await loanPlanCalculator.calculateLoanPayment();

  const mock = { ...paymentPlan, ...overrides };

  return mock;
}
