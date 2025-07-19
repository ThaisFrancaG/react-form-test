//!Criar tipo do formulário
export type CalculatorFormState = {
  loanAmount: number;
  loanPaymentMonths: number;
  birthDate: string;
  age: number;
};

export type Props = {
  startingValue: CalculatorFormState;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: CalculatorFormState) => void;
};
