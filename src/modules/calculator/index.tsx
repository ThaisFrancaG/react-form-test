import React, { useState } from 'react';
import { CalculatorForm, CalculatorInputDisplay, CalculatorResultDisplay } from './components';
import { format } from 'date-fns';
import { InputLoanData, PaymentDetails } from './types';

export default function CalculatorModule() {
  const [inputData, setInputData] = useState<InputLoanData>({
    initialLoan: 0,
    installmentsAmount: 0,
    birthDate: String(format(new Date(), 'dd/MM/yyyy')),
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
  const handleFormSubmit = (inputData: InputLoanData) => {
    setInputData(inputData);
  };
  return (
    <div>
      <CalculatorForm
        startingValue={inputData}
        onSubmit={handleFormSubmit}
        setLoading={setLoading}
        loading={loading}
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
