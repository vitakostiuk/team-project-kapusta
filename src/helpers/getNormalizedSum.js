export const getNormalizedSum = number => {
  return Number(number)
    .toLocaleString('cs-CZ', {
      style: 'currency',
      currency: 'UAH',
    })
    .replace(',', '.');
};
