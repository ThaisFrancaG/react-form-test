import { InputLoanData } from '../types/loanDataTypes';

export const handleFormInput = (prevState: InputLoanData): InputLoanData => {
  const newState = {
    initialLoan: Number(prevState['initialLoan']),
    installmentsAmount: Number(prevState['installmentsAmount']),
    birthDate: String(prevState['birthDate']),
  };
  return newState;
};
