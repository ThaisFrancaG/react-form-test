import React from 'react';
import { CalculatorFormState } from '../types/loanDataTypes';

function CalculatorInputDisplay({ data }: { data: CalculatorFormState }) {
  return (
    <div>
      <p>Empréstimo: {data.loanAmount}</p>
      <p>Meses: {data.loanPaymentMonths}</p>
      <p>Nascimento: {data.birthDate}</p>
    </div>
  );
}

export { CalculatorInputDisplay };
