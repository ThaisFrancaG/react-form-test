import React, { useState } from 'react';
import { Props } from '../types/loanDataTypes';
import { handleAction } from '../actions/handleSubmit';

function CalculatorForm({ startingValue, onSubmit }: Props) {
  const [formData, setFormData] = useState(startingValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newState = handleAction(formData);
    onSubmit(newState); // Passa os dados para M
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="loanAmount">Valor Empréstimo</label>
      <input
        id="loanAmount"
        name="loanAmount"
        type="number"
        value={formData.loanAmount}
        onChange={handleChange}
      />

      <label htmlFor="loanPaymentMonths">Pagar em Quantos Meses</label>
      <input
        id="loanPaymentMonths"
        name="loanPaymentMonths"
        type="number"
        placeholder={String(formData.loanPaymentMonths)}
        value={formData.loanPaymentMonths}
        onChange={handleChange}
      />

      <label htmlFor="birthDate">Data de Nascimento</label>
      <input
        id="birthDate"
        name="birthDate"
        type="string"
        placeholder={formData.birthDate}
        value={formData.birthDate}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export { CalculatorForm };
