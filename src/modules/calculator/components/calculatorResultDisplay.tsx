import React, { useEffect, useState } from 'react';
import { LoanPlanCalculator } from '../services/calculatorService';
import { InputLoanData, PaymentDetails } from '../types';
import { NumericFormat } from 'react-number-format';

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
    <dl aria-label="Detalhes do empréstimo" data-testid="result-display">
      <h2>Plano De Pagamento</h2>
      <div>
        <dt>Valor Final:</dt>
        <dd>
          <NumericFormat
            value={(loanDetails.finalLoan / 100).toFixed(2)}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            displayType="text"
          />
        </dd>
      </div>
      <div>
        <dt>Parcelas:</dt>
        <dd>
          <NumericFormat
            value={(loanDetails.installmentValue / 100).toFixed(2)}
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            displayType="text"
          />
        </dd>
      </div>
      <div>
        <dt>Juros ao Mês:</dt>
        <dd>{loanDetails.monthlyInterestRate}</dd>
      </div>
      <div>
        <dt>Juros ao Ano:</dt>
        <dd>{loanDetails.anualInterestRate}</dd>
      </div>
    </dl>
  );
}

export { CalculatorResultDisplay };
