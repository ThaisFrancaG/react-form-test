//!Criar tipo do formulário
export type CalculatorFormState = {
  initialLoan: number;
  installmentsAmount: number;
  birthDate: string;
  age: number;
};

export type Props = {
  startingValue: CalculatorFormState;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: CalculatorFormState) => void;
};
