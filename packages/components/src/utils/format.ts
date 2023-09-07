const getFormatUSDNotation = (amount: number) => {
  const amountLength = amount.toFixed(0).length;

  return amountLength >= 6 ? 'compact' : 'standard';
};

const formatUSD = (amount: number, options?: { compact?: boolean }): string => {
  const numberFormat = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    notation: options?.compact ? getFormatUSDNotation(amount) : undefined
  });

  return numberFormat.format(amount);
};

export { formatUSD };
