const getFormatUSDNotation = (amount: number) => {
  const amountLength = amount.toFixed(0).length;

  return amountLength >= 6 ? 'compact' : 'standard';
};

// TODO: use react-aria i18n utils and make handle 8 demicals usd
const formatUSD = (amount: number, options?: { compact?: boolean }): string => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: options?.compact ? getFormatUSDNotation(amount) : undefined
  });

  return numberFormat.format(amount);
};

export { formatUSD };
