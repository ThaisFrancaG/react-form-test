import React from 'react';
import { InputLoanData } from '../types/loanDataTypes';

function CalculatorInputDisplay({ data }: { data: InputLoanData }) {
  return (
    <section aria-label="Resumo dos dados fornecidos">
      <dl>
        <dt>Empréstimo:</dt>
        <dd>{data.initialLoan}</dd>

        <dt>Meses:</dt>
        <dd>{data.installmentsAmount}</dd>

        <dt>Data de nascimento:</dt>
        <dd>{data.birthDate}</dd>
      </dl>
    </section>
  );
}

export { CalculatorInputDisplay };
