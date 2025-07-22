import { PaymentDetails } from '../types';

/**
 * Interface for calculating loan payment plans.
 */
interface ILoanPlanCalculator {
  /**
   * Calculates the full payment details based on internal loan logic.
   * @returns A Promise that resolves to a `PaymentDetails` object.
   */
  calculateLoanPayment(): Promise<PaymentDetails>;

  /**
   * Calculates the installment value based on the given payment plan data.
   * @param paymentPlanData - The detailed payment plan used to compute the value of each installment.
   * @returns The value of each installment.
   */
  getInstallmentsValue(paymentPlanData: PaymentDetails): number;
}

export type { ILoanPlanCalculator };
