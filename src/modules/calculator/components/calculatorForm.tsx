import React, { useState } from 'react';
import { FormProps } from '../types/loanDataTypes';
import { handleFormInput } from '../actions/handleSubmit';
import { formatBRL } from '../../../shared/utils/numeric.utils';
import { sleep } from '../../../shared/utils/sleep';
import { calculatorFormSchema } from '../schemas/calculatorFormSchema';
import {
  handleBirthDateChangeValue,
  handleInitialLoanChangeValue,
  handleInstallmentsChange,
} from '../handlers/formHandlers';

function CalculatorForm({ startingValue, onSubmit, setLoading, loading }: FormProps) {
  const [formData, setFormData] = useState(startingValue);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (name === 'initialLoan') {
      setFormData((prev) => ({
        ...prev,
        initialLoan: handleInitialLoanChangeValue(prev.initialLoan.toString(), value),
      }));
    }

    if (name === 'birthDate') {
      setFormData((prev) => ({
        ...prev,
        birthDate: handleBirthDateChangeValue(value, prev.birthDate),
      }));
    }

    if (name === 'installmentsAmount') {
      setFormData((prev) => ({
        ...prev,
        installmentsAmount: handleInstallmentsChange(value),
      }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    await sleep(1000);
    const validationResult = calculatorFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setLoading(false);
      return;
    }

    const preparedData = {
      ...formData,
      initialLoan: Number(formData.initialLoan),
      installmentsAmount: Number(formData.installmentsAmount),
    };

    const processedData = handleFormInput(preparedData);

    await onSubmit(processedData);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} data-testid="form" noValidate>
      <label htmlFor="initialLoan">Valor Empréstimo</label>
      <input
        id="initialLoan"
        name="initialLoan"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="R$ 0,00"
        value={formData.initialLoan === 0 ? '' : formatBRL(formData.initialLoan)}
        onChange={handleChange}
        aria-invalid={!!errors.initialLoan}
        aria-describedby={errors.initialLoan ? 'error-initialLoan' : undefined}
      />
      {errors.initialLoan && (
        <span id="error-initialLoan" style={{ color: 'red' }} role="alert">
          {errors.initialLoan}
        </span>
      )}

      <label htmlFor="installmentsAmount">Parcelas</label>
      <input
        id="installmentsAmount"
        name="installmentsAmount"
        type="text"
        inputMode="numeric"
        placeholder="Número de parcelas"
        value={formData.installmentsAmount || ''}
        onChange={handleChange}
        aria-invalid={!!errors.installmentsAmount}
        aria-describedby={errors.installmentsAmount ? 'error-installmentsAmount' : undefined}
      />
      {errors.installmentsAmount && (
        <span id="error-installmentsAmount" style={{ color: 'red' }} role="alert">
          {errors.installmentsAmount}
        </span>
      )}

      <label htmlFor="birthDate">Data de Nascimento</label>
      <input
        id="birthDate"
        name="birthDate"
        type="text"
        inputMode="numeric"
        placeholder="dd/mm/aaaa"
        value={formData.birthDate}
        onChange={handleChange}
        aria-invalid={!!errors.birthDate}
        aria-describedby={errors.birthDate ? 'error-birthDate' : undefined}
        maxLength={10}
      />
      {errors.birthDate && (
        <span id="error-birthDate" style={{ color: 'red' }} role="alert">
          {errors.birthDate}
        </span>
      )}

      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </form>
  );
}

export { CalculatorForm };
