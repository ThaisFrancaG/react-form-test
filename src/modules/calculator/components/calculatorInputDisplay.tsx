import React from 'react';
import { CalculatorFormState } from '../types/loanDataTypes';

function CalculatorInputDisplay({ data }: { data: CalculatorFormState }) {
  return (
    <div>
      <p>Empréstimo: {data.initialLoan}</p>
      <p>Meses: {data.installmentsAmount}</p>
      <p>Nascimento: {data.birthDate}</p>
    </div>
  );
}

export { CalculatorInputDisplay };
