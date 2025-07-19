import React, { ReactNode, useActionState } from 'react';
import { useFormStatus } from 'react-dom';

//!Criar tipo do formulário
type CalculatorFormState = {
  loanAmount: number;
  loanPaymentMonths: number;
  birthDate: number;
};
const handleAction = (prevState: CalculatorFormState, formData: FormData): CalculatorFormState => {
  console.log({ prevState, formData });
  const newState: CalculatorFormState = {
    loanAmount: Number(formData.get('loanAmount')),
    loanPaymentMonths: Number(formData.get('loanPaymentMonths')),
    birthDate: Number(formData.get('birthDate')),
  };
  console.log(newState);
  return newState;
};

//! Criar validação formulário
function CalculatorForm(): ReactNode {
  const startingValue = { loanAmount: 0, loanPaymentMonths: 0, birthDate: 12 };
  const { pending } = useFormStatus();
  const [formState, formAction] = useActionState<CalculatorFormState, FormData>(
    handleAction,
    startingValue,
  );
  const valuesToUseOnCalculation = formState;
  console.log({ valuesToUseOnCalculation });

  return (
    <>
      <form action={formAction}>
        <div>
          <label htmlFor="loanAmount">Valor Empréstimo</label>
          <input id="loanAmount" name="loanAmount" disabled={pending}></input>
          <label htmlFor="loanPaymentMonths">Pagar em Quantos Meses</label>
          <input id="loanPaymentMonths" name="loanPaymentMonths" disabled={pending}></input>
          <label htmlFor="birthDate">Data de Nascimento</label>
          <input id="birthDate" name="birthDate" disabled={pending}></input>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}

export { CalculatorForm };
