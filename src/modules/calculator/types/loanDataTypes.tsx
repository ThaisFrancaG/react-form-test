type InputLoanData = {
  initialLoan: number;
  installmentsAmount: number;
  birthDate: string;
};

type StartLoanData = InputLoanData & {
  age: number;
};

type PaymentDetails = {
  initialLoan: number;
  monthlyInterestRate: number;
  anualInterestRate: number;
  installmentsAmount: number;
  finalLoan: number;
  installmentValue: number;
};

type Props = {
  startingValue: InputLoanData;
  loading: boolean;
  onSubmit: (formData: InputLoanData) => void;
  setLoading: (isLoading: boolean) => void;
};

export type { Props, InputLoanData, PaymentDetails, StartLoanData };
