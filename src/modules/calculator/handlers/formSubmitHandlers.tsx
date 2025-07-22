import React from 'react';
import { calculatorFormSchema } from '../schemas/calculatorFormSchema';
import { InputLoanData, OnSubmit, SetErrors, SetLoading } from '../types';
import { sleep } from '../../../shared/utils/sleep';
import { handleFormInput } from '../actions/handleSubmit';

/**
 * Generic Handler for Form Submission
 *
 * @param e - form submit event
 * @param formData - current form data
 * @param setErrors - state setter to map field errors
 * @param setLoading - state setter for loading state (true/false)
 * @param onSubmit - callback that receives the processed data
 */
export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  formData: InputLoanData,
  setErrors: SetErrors,
  setLoading: SetLoading,
  onSubmit: OnSubmit,
): Promise<void> {
  e.preventDefault();
  setLoading(true);

  // simula atraso de rede/processamento
  await sleep(1000);

  // valida todo o objeto de uma vez
  const validationResult = calculatorFormSchema.safeParse(formData);
  if (!validationResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of validationResult.error.issues) {
      const key = issue.path[0] as string;
      fieldErrors[key] = issue.message;
    }
    setErrors(fieldErrors);
    setLoading(false);
    return;
  }

  // prepara dados convertendo string→number se necessário
  const preparedData: InputLoanData = {
    ...formData,
    initialLoan: Number(formData.initialLoan),
    installmentsAmount: Number(formData.installmentsAmount),
  };

  //  lógica de cálculo / transformação
  const processedData = handleFormInput(preparedData);

  // dispara callback de sucesso
  await onSubmit(processedData);
  setLoading(false);
}
