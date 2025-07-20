export type CalculatorFormState = {
  initialLoan: number;
  installmentsAmount: number;
  birthDate: string;
  age?: number;
};

export type Props = {
  startingValue: CalculatorFormState;
  onSubmit: (formData: CalculatorFormState) => void;
  setLoading: (isLoading: boolean) => void;
};
