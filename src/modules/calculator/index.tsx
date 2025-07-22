import React, { useState } from 'react';
import { CalculatorForm, CalculatorInputDisplay, CalculatorResultDisplay } from './components';
import { format } from 'date-fns';
import { InputLoanData, PaymentDetails } from './types';
import { useLoading } from '../../contexts/loading/useLoading';
import { GlobalLoading } from '../../contexts/loading/loadingComponent';

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

  const { isLoading, setLoading } = useLoading();

  const handleFormSubmit = (inputData: InputLoanData) => {
    setInputData(inputData);
  };
  return (
    <div>
      <CalculatorForm
        startingValue={inputData}
        onSubmit={handleFormSubmit}
        setLoading={setLoading}
        loading={isLoading}
      />
      {inputData.initialLoan > 0 && <CalculatorInputDisplay data={inputData} />}
      <>{isLoading && <GlobalLoading />}</>
      {inputData.initialLoan > 0 && !isLoading && (
        <CalculatorResultDisplay
          data={inputData}
          onCalculate={setOutputData}
          outputData={outputData}
        />
      )}
    </div>
  );
}
