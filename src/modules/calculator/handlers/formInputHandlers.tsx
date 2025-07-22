import { calculatorFormSchema } from '../schemas/calculatorFormSchema';
import { InputLoanData } from '../types';

/**
 * Converts a raw input string into a numeric loan value in cents.
 * Strips all non-digit characters and leading zeros.
 *
 * @param _ - Unused placeholder (may be the previous value).
 * @param input - The raw input string (e.g., "R$ 1.000,00").
 * @returns The loan value as a number in cents.
 */
function handleInitialLoanChangeValue(_: string, input: string): number {
  const onlyDigits = input.replace(/\D/g, '').replace(/^0+/, '') || '0';
  return parseInt(onlyDigits, 10);
}

/**
 * Formats the birth date field as the user types.
 * Adds slashes automatically at the correct positions to match 'dd/MM/yyyy'.
 *
 * @param value - The current raw input.
 * @param prevValue - The previous input value, used to detect typing direction.
 * @returns The formatted birth date string, limited to 10 characters.
 */
function handleBirthDateChangeValue(value: string, prevValue: string): string {
  let val = value.replace(/[^0-9/]/g, '');
  if (val.length === 2 && prevValue.length < val.length) val += '/';
  if (val.length === 5 && prevValue.length < val.length) val += '/';
  return val.slice(0, 10);
}

/**
 * Converts a string input into a valid number of installments.
 * Removes non-digit characters and leading zeros.
 *
 * @param value - The raw input string.
 * @returns The parsed number of installments.
 */
function handleInstallmentsChange(value: string): number {
  const onlyDigits = value.replace(/\D/g, '').replace(/^0+/, '') || '0';
  return parseInt(onlyDigits, 10);
}

/**
 * Handles form field changes, updates the state, and runs field-level validation using Zod schema.
 *
 * @param e - The input change event.
 * @param setFormData - React state setter for form data.
 * @param setErrors - React state setter for field error messages.
 */
function handleFieldChange(
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<InputLoanData>>,
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
) {
  const { name, value } = e.target;

  setFormData((prev: InputLoanData) => {
    let updatedForm = { ...prev };

    // Handle initial loan formatting and validation
    if (name === 'initialLoan') {
      const parsed = handleInitialLoanChangeValue(prev.initialLoan.toString(), value);
      updatedForm.initialLoan = parsed;

      const result = calculatorFormSchema.shape.initialLoan.safeParse(parsed);
      setErrors((prev) => ({
        ...prev,
        initialLoan: result.success ? '' : result.error?.issues[0].message,
      }));
    }

    // Handle birth date formatting and validation
    if (name === 'birthDate') {
      const formatted = handleBirthDateChangeValue(value, prev.birthDate);
      updatedForm.birthDate = formatted;

      const result = calculatorFormSchema.shape.birthDate.safeParse(formatted);
      setErrors((prev) => ({
        ...prev,
        birthDate: result.success ? '' : result.error?.issues[0].message,
      }));
    }

    // Handle installments parsing and validation
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
