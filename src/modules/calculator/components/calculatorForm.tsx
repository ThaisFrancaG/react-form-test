import React, { useState } from 'react';
import { Props } from '../types/loanDataTypes';
import { handleAction } from '../actions/handleSubmit';

function CalculatorForm({ startingValue, onSubmit, setLoading }: Props) {
  const [formData, setFormData] = useState(startingValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newState = handleAction(formData);
    onSubmit(newState);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="initialLoan">Valor Empréstimo</label>
      <input
        id="initialLoan"
        name="initialLoan"
        type="number"
        value={formData.initialLoan}
        onChange={handleChange}
      />

      <label htmlFor="installmentsAmount">Pagar em Quantos Meses</label>
      <input
        id="installmentsAmount"
        name="installmentsAmount"
        type="number"
        placeholder={String(formData.installmentsAmount)}
        value={formData.installmentsAmount}
        onChange={handleChange}
      />

      <label htmlFor="birthDate">Data de Nascimento</label>
      <input
        id="birthDate"
        name="birthDate"
        type="text"
        placeholder={formData.birthDate}
        value={formData.birthDate}
        onChange={handleChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export { CalculatorForm };
