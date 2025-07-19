import React, { useEffect, useState } from 'react';
import { CalculatorFormState } from '../types/loanDataTypes';
import { LoanPlanCalculator } from '../services/calculatorService';
import { PaymentDetails } from '../types/loanPaymentTypes';

function CalculatorResultDisplay({
  data,
  onCalculate,
  outputData,
}: {
  data: CalculatorFormState;
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
  }, [data]); // ← Adiciona dependência segura

  //   if (!loanDetails) return <p>Calculando...</p>;

  return (
    <div>
      <p>Valor Final: {loanDetails.finalLoan}</p>
      <p>Parcelas: {loanDetails.installmentValue}</p>
      <p>Juros ao Mês: {loanDetails.monthlyInterestRate}</p>
      <p>Juros ao Ano: {loanDetails.anualInterestRate}</p>
    </div>
  );
}

export { CalculatorResultDisplay };
