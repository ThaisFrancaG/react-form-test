import { CalculatorFormState } from '../types/loanDataTypes';
import { differenceInCalendarMonths } from 'date-fns';
const calculateAge = (birthDate: string): number => {
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
export const handleAction = (prevState: CalculatorFormState): CalculatorFormState => {
  const newState: CalculatorFormState = {
    initialLoan: Number(prevState['initialLoan']),
    installmentsAmount: Number(prevState['installmentsAmount']),
    birthDate: String(prevState['birthDate']),
    age: calculateAge(String(prevState['birthDate'])),
  };
  return newState;
};
