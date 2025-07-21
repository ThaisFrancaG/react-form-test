import { z } from 'zod';

const calculatorFormSchema = z.object({
  initialLoan: z.number().min(1, { message: 'O valor do empréstimo deve ser maior que 0' }),

  installmentsAmount: z
    .number()
    .min(1, { message: 'O número de parcelas deve ser maior que 0' })
    .max(50, { message: 'O número de parcelas deve ser maior que 0' }),

  birthDate: z.string().regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, {
    message: 'Formato inválido. Use DD/MM/AAAA',
  }),
});

export { calculatorFormSchema };
