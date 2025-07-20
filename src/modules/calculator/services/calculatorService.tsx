import { ILoanPlanCalculator } from '../tests/unit/components/interfaces/services.interface';
import { InputLoanData, PaymentDetails } from '../types';
import { differenceInCalendarMonths } from 'date-fns';

export class LoanPlanCalculator implements ILoanPlanCalculator {
  private loanStarterInfo: InputLoanData;
  constructor(loan: InputLoanData) {
    this.loanStarterInfo = loan;
  }
  async calculateLoanPayment(): Promise<PaymentDetails> {
    const { initialLoan, installmentsAmount, birthDate } = this.loanStarterInfo;

    const age = this.calculateAge(birthDate);

    const anualInterest = this.getInterestByAge(age);
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

  private calculateAge = (birthDate: string): number => {
    console.log({ birthDate });
    const now = new Date();
    const birthDateArray = birthDate.split('/');
    const birthDateDate = new Date(
      Number(birthDateArray[2]),
      Number(birthDateArray[1]),
      Number(birthDateArray[0]),
    );
    const totalAgeMonths = differenceInCalendarMonths(now, birthDateDate);
    const ageCompletedYears = Math.floor(totalAgeMonths / 12);

    return ageCompletedYears;
  };
}
