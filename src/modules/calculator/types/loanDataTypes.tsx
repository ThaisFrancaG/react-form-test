/**
 * Loan entry data
 * - `initialLoan` in cents (e.g., 100000 = R$1,000.00)
 * - `installmentsAmount` must be between 1 and 36
 * - `birthDate` in the format 'dd-MM-yyyy'
 */
type InputLoanData = {
  initialLoan: number;
  installmentsAmount: number;
  birthDate: string;
};

/**
 * Loan entry data enriched with user's calculated age.
 * Used internally for validation or interest rate adjustments based on age.
 */
type StartLoanData = InputLoanData & {
  age: number;
};

/**
 * Resulting loan calculation details.
 * Contains interest rates, total amount with interest, and per-installment value.
 */
type PaymentDetails = {
  /** Original loan value in cents */
  initialLoan: number;
  /** Monthly interest rate (e.g., 0.02 for 2%) */
  monthlyInterestRate: number;
  /** Annual interest rate (e.g., 0.24 for 24%) */
  anualInterestRate: number;
  /** Total number of installments */
  installmentsAmount: number;
  /** Total loan amount including interest */
  finalLoan: number;
  /** Value of each installment */
  installmentValue: number;
};

/**
 * Props for the CalculatorForm component.
 * Used to capture and submit loan simulation data.
 */
type FormProps = {
  /** Initial form values */
  startingValue: InputLoanData;
  /** Loading state for submit button or async simulation */
  loading: boolean;
  /** Handler function called on form submission */
  onSubmit: (formData: InputLoanData) => void;
  /** Setter to update loading state from the parent component */
  setLoading: (isLoading: boolean) => void;
};

export type { FormProps, InputLoanData, PaymentDetails, StartLoanData };
