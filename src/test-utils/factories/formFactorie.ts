// src/modules/calculator/tests/__mocks__/formFactory.ts
import { faker } from '@faker-js/faker';

export function createCalculatorFormData(overrides = {}) {
  const mock = {
    initialLoan: faker.number.int({ min: 1000, max: 100000 }),
    installmentsAmount: faker.number.int({ min: 6, max: 60 }),
    birthDate: faker.date
      .birthdate({ min: 18, max: 70, mode: 'age' })
      .toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    ...overrides,
  };

  return mock;
}
