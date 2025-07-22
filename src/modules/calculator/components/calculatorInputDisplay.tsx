import { formatBRL } from '../../../shared/utils/numeric.utils';
import { Section, Title, DescriptionList, Description, Term } from '../styles/displayStyles';
import { InputLoanData } from '../types';
import React from 'react';

function CalculatorInputDisplay({ data }: { data: InputLoanData }) {
  return (
    <Section aria-label="Resumo dos dados fornecidos" data-testid="input-display">
      <Title>Dados do Empréstimo</Title>
      <DescriptionList>
        <Term>Empréstimo:</Term>
        <Description>{formatBRL(data.initialLoan)}</Description>

        <Term>Meses:</Term>
        <Description>{data.installmentsAmount}</Description>

        <Term>Data de nascimento:</Term>
        <Description>{data.birthDate}</Description>
      </DescriptionList>
    </Section>
  );
}

export { CalculatorInputDisplay };
