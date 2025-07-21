import { InputLoanData } from '../types';
import React from 'react';
import { writeCentsAsFinancial } from '../../../shared/utils/numeric.utils';

function CalculatorInputDisplay({ data }: { data: InputLoanData }) {
  return (
    <section aria-label="Resumo dos dados fornecidos" data-testid="input-display">
      <h2>Dados do Empréstimo</h2>
      <dl>
        <dt>Empréstimo:</dt>
        <dd>{writeCentsAsFinancial(data.initialLoan)}</dd>

        <dt>Meses:</dt>
        <dd>{data.installmentsAmount}</dd>

        <dt>Data de nascimento:</dt>
        <dd>{data.birthDate}</dd>
      </dl>
    </section>
  );
}

export { CalculatorInputDisplay };
