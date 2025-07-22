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

export { handleInitialLoanChangeValue, handleBirthDateChangeValue, handleInstallmentsChange };
