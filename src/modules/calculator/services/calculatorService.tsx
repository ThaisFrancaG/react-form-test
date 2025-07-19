import { CalculatorFormState } from '../types/loanDataTypes';
import { PaymentDetails } from '../types/loanPaymentTypes';

export class LoanPlanCalculator {
  loanStarterInfo: CalculatorFormState;
  constructor(loan: CalculatorFormState) {
    this.loanStarterInfo = loan;
  }
  async calculateLoanPayment(): Promise<PaymentDetails> {
    const { age, initialLoan, installmentsAmount } = this.loanStarterInfo;

    const anualInterest = this.getInterestByAge(age);
    //todo: deal with floor
    const monthlyInterestRate = anualInterest / 12;
    const paymentPlanData: PaymentDetails = {
      initialLoan,
      monthlyInterestRate,
      installmentsAmount,
      installmentValue: 0,
      finalLoan: 0,
      anualInterestRate: anualInterest,
    };
    const monthlyPaymentValue = this.getInstallmentsValue(paymentPlanData);
    paymentPlanData.finalLoan = monthlyPaymentValue * installmentsAmount;
    paymentPlanData.installmentValue = monthlyPaymentValue;
    paymentPlanData.anualInterestRate = anualInterest;

    return paymentPlanData;
  }
  private getInterestByAge(age: number) {
    if (age <= 25) {
      return 5;
    }
    if (age >= 26 && age <= 40) {
      return 3;
    }
    if (age >= 41 && age <= 60) {
      return 2;
    }
    return 4;
  }
  getInstallmentsValue(paymentPlanData: PaymentDetails): number {
    const { initialLoan, monthlyInterestRate, installmentsAmount } = paymentPlanData;
    const numerator = (initialLoan * monthlyInterestRate) / 100;
    const denominator = 1 - (1 + monthlyInterestRate / 100) ** -installmentsAmount;
    const monthlyPayment = numerator / denominator;
    return monthlyPayment;
  }
}
