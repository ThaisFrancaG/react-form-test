import { PaymentDetails } from '../types';

interface ILoanPlanCalculator {
  calculateLoanPayment(): Promise<PaymentDetails>;
  getInstallmentsValue(paymentPlanData: PaymentDetails): number;
}

export type { ILoanPlanCalculator };
