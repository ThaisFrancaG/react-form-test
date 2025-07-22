import { calculatorFormSchema } from '../schemas/calculatorFormSchema';
import { InputLoanData } from '../types';

function handleInitialLoanChangeValue(_: string, input: string): number {
  const onlyDigits = input.replace(/\D/g, '').replace(/^0+/, '') || '0';
  return parseInt(onlyDigits, 10);
}

function handleBirthDateChangeValue(value: string, prevValue: string): string {
  let val = value.replace(/[^0-9/]/g, '');
  if (val.length === 2 && prevValue.length < val.length) val += '/';
  if (val.length === 5 && prevValue.length < val.length) val += '/';
  return val.slice(0, 10);
}

function handleInstallmentsChange(value: string): number {
  const onlyDigits = value.replace(/\D/g, '').replace(/^0+/, '') || '0';
  return parseInt(onlyDigits, 10);
}

function handleFieldChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<InputLoanData>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
) {
  const { name, value } = e.target;

  setFormData((prev: InputLoanData) => {
    let updatedForm = { ...prev };

    if (name === 'initialLoan') {
      const parsed = handleInitialLoanChangeValue(prev.initialLoan.toString(), value);
      updatedForm.initialLoan = parsed;

      const result = calculatorFormSchema.shape.initialLoan.safeParse(parsed);
      setErrors((prev) => ({
        ...prev,
        initialLoan: result.success ? '' : result.error?.issues[0].message,
      }));
    }

    if (name === 'birthDate') {
      const formatted = handleBirthDateChangeValue(value, prev.birthDate);
      updatedForm.birthDate = formatted;

      const result = calculatorFormSchema.shape.birthDate.safeParse(formatted);
      setErrors((prev) => ({
        ...prev,
        birthDate: result.success ? '' : result.error?.issues[0].message,
      }));
    }

    if (name === 'installmentsAmount') {
      const parsed = handleInstallmentsChange(value);
      updatedForm.installmentsAmount = parsed;

      const result = calculatorFormSchema.shape.installmentsAmount.safeParse(parsed);
      setErrors((prev) => ({
        ...prev,
        installmentsAmount: result.success ? '' : result.error?.issues[0].message,
      }));
    }

    return updatedForm;
  });
}

export { handleFieldChange };
