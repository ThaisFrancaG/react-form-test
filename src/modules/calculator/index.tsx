import React, { useState } from 'react';
import { CalculatorForm, CalculatorInputDisplay } from './components';
import { CalculatorFormState } from './types/loanDataTypes';
import { format } from 'date-fns';

export default function CalculatorModule() {
  const [dataForm, setDataForm] = useState<CalculatorFormState>({
    loanAmount: 0,
    loanPaymentMonths: 0,
    birthDate: String(format(new Date(), 'dd/MM/yyyy')),
    age: 0,
  });

  const handleFormSubmit = (formData: CalculatorFormState) => {
    setDataForm(formData);
  };

  return (
    <div>
      <CalculatorForm startingValue={dataForm} onSubmit={handleFormSubmit} />
      {dataForm.loanAmount > 0 && <CalculatorInputDisplay data={dataForm} />}
    </div>
  );
}
