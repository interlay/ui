export const trimDecimals = (value: string, decimals: number) => {
  const decimalGroups = value.split('.');

  if (decimalGroups.length <= 1) {
    return value;
  }

  const offsetDecimals = decimalGroups[1].length - decimals;

  return offsetDecimals > 0 ? value.slice(0, value.length - offsetDecimals) : value;
};
