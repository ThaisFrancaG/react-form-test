function formatBRL(cents: number) {
  const reais = (cents / 100).toFixed(2);
  return Number(reais).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export { formatBRL };
