import { CalculatorFormState } from '../types/loanDataTypes';
import { PaymentDetails } from '../types/loanPaymentTypes';

export class LoanPlanCalculator {
  loanStarterInfo: CalculatorFormState;
  constructor(loan: CalculatorFormState) {
    this.loanStarterInfo = loan;
  }
  calculateLoanPayment() {
    const { age, initialLoan, installmentsAmount } = this.loanStarterInfo;

    const anualInterest = this.getInterestByAge(age);
    //todo: deal with floor
    const monthlyInterestRate = anualInterest / 12;
    const paymentPlanData: PaymentDetails = {
      initialLoan,
      monthlyInterestRate,
      installmentsAmount,
    };
    const monthlyPaymentValue = this.getInstallmentsValue(paymentPlanData);

    return { monthlyPaymentValue, anualInterest };
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
  private getInstallmentsValue(paymentPlanData: PaymentDetails): number {
    const { initialLoan, monthlyInterestRate, installmentsAmount } = paymentPlanData;
    const numerator = initialLoan * monthlyInterestRate;
    const denominator = (1 - (1 + monthlyInterestRate)) ^ -installmentsAmount;
    const monthlyPayment = numerator / denominator;
    return monthlyPayment;
  }
}
