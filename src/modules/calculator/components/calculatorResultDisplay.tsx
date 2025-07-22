import React, { useEffect, useState } from 'react';
import { LoanPlanCalculator } from '../services/calculatorService';
import { InputLoanData, PaymentDetails } from '../types';
import { NumericFormat } from 'react-number-format';
import { Section, Title, DescriptionList, Term, Description } from '../styles/displayStyles';

function CalculatorResultDisplay({
  data,
  onCalculate,
  outputData,
}: {
  data: InputLoanData;
  onCalculate: (data: PaymentDetails) => void;
  outputData: PaymentDetails;
}) {
  const [loanDetails, setLoanDetails] = useState<PaymentDetails>(outputData);

  useEffect(() => {
    async function calculate() {
      const loanPlanCalculator = new LoanPlanCalculator(data);
      const loanPayment = await loanPlanCalculator.calculateLoanPayment();
      setLoanDetails(loanPayment);
      onCalculate(loanPayment);
    }

    calculate();
  }, [data]);

  return (
    <Section aria-label="Detalhes do empréstimo" data-testid="result-display">
      <Title>Plano De Pagamento</Title>
      <DescriptionList>
        <div>
          <Term>Valor Final:</Term>
          <Description>
            <NumericFormat
              value={(loanDetails.finalLoan / 100).toFixed(2)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              displayType="text"
            />
          </Description>
        </div>
        <div>
          <Term>Parcelas:</Term>
          <Description>
            <NumericFormat
              value={(loanDetails.installmentValue / 100).toFixed(2)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              suffix="%"
              displayType="text"
            />
          </Description>
        </div>
        <div>
          <Term>Juros ao Mês:</Term>
          <Description>{loanDetails.monthlyInterestRate} %</Description>
        </div>
        <div>
          <Term>Juros ao Ano:</Term>
          <Description>{loanDetails.anualInterestRate} %</Description>
        </div>
      </DescriptionList>
    </Section>
  );
}

export { CalculatorResultDisplay };
