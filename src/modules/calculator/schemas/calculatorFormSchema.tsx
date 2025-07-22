import { z } from 'zod';

/**
 * Zod schema used to validate loan calculator form input.
 * Ensures the data is complete, within allowed ranges, and formatted correctly.
 */
const calculatorFormSchema = z.object({
  /**
   * Initial loan amount in cents.
   * Must be greater than 0.
   */
  initialLoan: z.number().min(1, {
    message: 'O valor do empréstimo deve ser maior que 0',
  }),

  /**
   * Number of installments.
   * Must be between 1 and 120.
   */
  installmentsAmount: z
    .number()
    .min(1, {
      message: 'O número de parcelas deve ser maior que 0',
    })
    .max(120, {
      message: 'O número de parcelas deve ser menor que 120',
    }),

  /**
   * User's birth date in the format 'DD/MM/YYYY'.
   * Must match the regular expression.
   */
  birthDate: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
});

export { calculatorFormSchema };
