import React, { useState } from 'react';
import { FormProps } from '../types/loanDataTypes';
import { handleFormInput } from '../actions/handleSubmit';
import { formatBRL } from '../../../shared/utils/numeric.utils';
import { sleep } from '../../../shared/utils/sleep';
import { calculatorFormSchema } from '../schemas/calculatorFormSchema';
import { handleFieldChange } from '../handlers/formHandlers';
import { ErrorMessage, FormWrapper, Input, Label, SubmitButton } from '../styles/formStyle';

function CalculatorForm({ startingValue, onSubmit, setLoading, loading }: FormProps) {
  const [formData, setFormData] = useState(startingValue);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    <FormWrapper onSubmit={handleSubmit} data-testid="form" noValidate>
      <Label htmlFor="initialLoan">Valor Empréstimo</Label>
      <Input
        id="initialLoan"
        name="initialLoan"
        type="text"
        inputMode="numeric"
        autoComplete="off"
        placeholder="R$ 0,00"
        value={formData.initialLoan === 0 ? '' : formatBRL(formData.initialLoan)}
        onChange={(e) => handleFieldChange(e, setFormData, setErrors)}
        aria-invalid={!!errors.initialLoan}
        aria-describedby={errors.initialLoan ? 'error-initialLoan' : undefined}
      />
      {errors.initialLoan && (
        <ErrorMessage id="error-initialLoan" style={{ color: 'red' }} role="alert">
          {errors.initialLoan}
        </ErrorMessage>
      )}

      <Label htmlFor="installmentsAmount">Parcelas</Label>
      <Input
        id="installmentsAmount"
        name="installmentsAmount"
        type="text"
        inputMode="numeric"
        placeholder="Número de parcelas"
        value={formData.installmentsAmount || ''}
        onChange={(e) => handleFieldChange(e, setFormData, setErrors)}
        aria-invalid={!!errors.installmentsAmount}
        aria-describedby={errors.installmentsAmount ? 'error-installmentsAmount' : undefined}
      />
      {errors.installmentsAmount && (
        <ErrorMessage id="error-installmentsAmount" style={{ color: 'red' }} role="alert">
          {errors.installmentsAmount}
        </ErrorMessage>
      )}

      <Label htmlFor="birthDate">Data de Nascimento</Label>
      <Input
        id="birthDate"
        name="birthDate"
        type="text"
        inputMode="numeric"
        placeholder="dd/mm/aaaa"
        value={formData.birthDate}
        onChange={(e) => handleFieldChange(e, setFormData, setErrors)}
        aria-invalid={!!errors.birthDate}
        aria-describedby={errors.birthDate ? 'error-birthDate' : undefined}
        maxLength={10}
      />
      {errors.birthDate && (
        <ErrorMessage id="error-birthDate" style={{ color: 'red' }} role="alert">
          {errors.birthDate}
        </ErrorMessage>
      )}

      <SubmitButton type="submit" disabled={loading}>
        Enviar
      </SubmitButton>
    </FormWrapper>
  );
}

export { CalculatorForm };
