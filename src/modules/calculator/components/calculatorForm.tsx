import React, { useState } from 'react';
import { FormProps } from '../types/loanDataTypes';
import { formatBRL } from '../../../shared/utils/numeric.utils';
import { handleFieldChange } from '../handlers/formInputHandlers';
import { ErrorMessage, FormWrapper, Input, Label, SubmitButton } from '../styles/formStyle';
import { handleSubmit } from '../handlers/formSubmitHandlers';

function CalculatorForm({ startingValue, onSubmit, setLoading, loading }: FormProps) {
  const [formData, setFormData] = useState(startingValue);
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <FormWrapper
      onSubmit={(e) => {
        handleSubmit(e, formData, setErrors, setLoading, onSubmit);
      }}
      data-testid="form"
      noValidate
    >
      <Label htmlFor="initialLoan">Valor Empréstimo</Label>
      {errors.initialLoan && (
        <ErrorMessage id="error-initialLoan" style={{ color: 'red' }} role="alert">
          {errors.initialLoan}
        </ErrorMessage>
      )}
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

      <Label htmlFor="installmentsAmount">Parcelas</Label>
      {errors.installmentsAmount && (
        <ErrorMessage id="error-installmentsAmount" style={{ color: 'red' }} role="alert">
          {errors.installmentsAmount}
        </ErrorMessage>
      )}
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

      <Label htmlFor="birthDate">Data de Nascimento</Label>
      {errors.birthDate && (
        <ErrorMessage id="error-birthDate" style={{ color: 'red' }} role="alert">
          {errors.birthDate}
        </ErrorMessage>
      )}
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

      <SubmitButton type="submit" disabled={loading}>
        Enviar
      </SubmitButton>
    </FormWrapper>
  );
}

export { CalculatorForm };
