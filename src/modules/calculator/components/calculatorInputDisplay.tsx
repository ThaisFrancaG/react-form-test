import { formatBRL } from '../../../shared/utils/numeric.utils';
import { InputLoanData } from '../types';
import React from 'react';

function CalculatorInputDisplay({ data }: { data: InputLoanData }) {
  return (
    <section aria-label="Resumo dos dados fornecidos" data-testid="input-display">
      <h2>Dados do Empréstimo</h2>
      <dl>
        <dt>Empréstimo:</dt>
        <dd>{formatBRL(data.initialLoan)}</dd>

        <dt>Meses:</dt>
        <dd>{data.installmentsAmount}</dd>

        <dt>Data de nascimento:</dt>
        <dd>{data.birthDate}</dd>
      </dl>
    </section>
  );
}

export { CalculatorInputDisplay };
