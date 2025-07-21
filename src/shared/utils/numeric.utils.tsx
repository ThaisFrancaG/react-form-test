const writeCentsAsFinancial = (value: number) => {
  const reais = value / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(reais);
};

export { writeCentsAsFinancial };
