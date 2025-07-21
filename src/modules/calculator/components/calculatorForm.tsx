import React, { useState } from 'react';
import { Props } from '../types/loanDataTypes';
import { handleFormInput } from '../actions/handleSubmit';
import { calculatorFormSchema } from '../types';
import { formatBRL } from '../../../shared/utils/numeric.utils';

function CalculatorForm({ startingValue, onSubmit, setLoading, loading }: Props) {
  const [formData, setFormData] = useState(startingValue);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleInitialLoanChange(e: React.ChangeEvent<HTMLInputElement>) {
    let onlyDigits = e.target.value.replace(/\D/g, '');

    onlyDigits = onlyDigits.replace(/^0+/, '') || '0';

    setFormData((prev) => ({
      ...prev,
      initialLoan: parseInt(onlyDigits, 10),
    }));

    setErrors((prev) => ({ ...prev, initialLoan: '' }));
  }

  function handleInstallmentsChange(e: React.ChangeEvent<HTMLInputElement>) {
    let onlyDigits = Number(e.target.value.replace(/\D/g, ''));

    setFormData((prev) => ({
      ...prev,
      installmentsAmount: onlyDigits,
    }));

    setErrors((prev) => ({ ...prev, installmentsAmount: '' }));
  }

  function handleBirthDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.target.value;

    val = val.replace(/[^0-9/]/g, '');

    if (val.length === 2 && formData.birthDate.length < val.length) {
      val += '/';
    }
    if (val.length === 5 && formData.birthDate.length < val.length) {
      val += '/';
    }
    if (val.length > 10) {
      val = val.slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, birthDate: val }));
    setErrors((prev) => ({ ...prev, birthDate: '' }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

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
      {/* Valor Empréstimo */}
      <label htmlFor="initialLoan">Valor Empréstimo</label>
      <input
        id="initialLoan"
        name="initialLoan"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="R$ 0,00"
        value={formData.initialLoan === 0 ? '' : formatBRL(formData.initialLoan)}
        onChange={handleInitialLoanChange}
        aria-invalid={!!errors.initialLoan}
        aria-describedby={errors.initialLoan ? 'error-initialLoan' : undefined}
      />
      {errors.initialLoan && (
        <span id="error-initialLoan" style={{ color: 'red' }} role="alert">
          {errors.initialLoan}
        </span>
      )}

      {/* Parcelas */}
      <label htmlFor="installmentsAmount">Parcelas</label>
      <input
        id="installmentsAmount"
        name="installmentsAmount"
        type="text"
        inputMode="numeric"
        placeholder="Número de parcelas"
        value={formData.installmentsAmount || ''}
        onChange={handleInstallmentsChange}
        aria-invalid={!!errors.installmentsAmount}
        aria-describedby={errors.installmentsAmount ? 'error-installmentsAmount' : undefined}
      />
      {errors.installmentsAmount && (
        <span id="error-installmentsAmount" style={{ color: 'red' }} role="alert">
          {errors.installmentsAmount}
        </span>
      )}

      {/* Data de Nascimento */}
      <label htmlFor="birthDate">Data de Nascimento</label>
      <input
        id="birthDate"
        name="birthDate"
        type="text"
        inputMode="numeric"
        placeholder="dd/mm/aaaa"
        value={formData.birthDate}
        onChange={handleBirthDateChange}
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
