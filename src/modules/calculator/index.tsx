import React, { useState } from 'react';
import { CalculatorForm, CalculatorInputDisplay, CalculatorResultDisplay } from './components';
import { CalculatorFormState } from './types/loanDataTypes';
// import { format } from 'date-fns';
import { PaymentDetails } from './types/loanPaymentTypes';

export default function CalculatorModule() {
  const [inputData, setInputData] = useState<CalculatorFormState>({
    initialLoan: 1000,
    installmentsAmount: 2,
    // birthDate: String(format(new Date(), 'dd/MM/yyyy')),
    birthDate: '20/08/1994',

    age: 0,
  });

  const [outputData, setOutputData] = useState<PaymentDetails>({
    initialLoan: 0,
    monthlyInterestRate: 0,
    installmentsAmount: 0,
    finalLoan: 0,
    installmentValue: 0,
    anualInterestRate: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleFormSubmit = (inputData: CalculatorFormState) => {
    setInputData(inputData);
  };
  return (
    <div>
      <CalculatorForm
        startingValue={inputData}
        onSubmit={handleFormSubmit}
        setLoading={setLoading}
      />
      {inputData.initialLoan > 0 && <CalculatorInputDisplay data={inputData} />}
      {inputData.initialLoan > 0 && !loading && (
        <CalculatorResultDisplay
          data={inputData}
          onCalculate={setOutputData}
          outputData={outputData}
        />
      )}
    </div>
  );
}
