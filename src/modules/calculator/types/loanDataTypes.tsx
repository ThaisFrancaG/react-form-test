type CalculatorFormState = {
  initialLoan: number;
  installmentsAmount: number;
  birthDate: string;
  age?: number;
};

type Props = {
  startingValue: CalculatorFormState;
  onSubmit: (formData: CalculatorFormState) => void;
  setLoading: (isLoading: boolean) => void;
};

export type { Props, CalculatorFormState };
