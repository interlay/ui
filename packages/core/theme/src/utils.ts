const rem = (value: number, base = 16) => `${(1 / base) * value}rem`;

const style =
  <T extends Record<string, any>>(baseStyle: T) =>
  (key: keyof typeof baseStyle, unit: 'rem' | 'px' = 'rem', base = 16) => {
    if (unit === 'px') {
      return `${baseStyle[key]}px`;
    }

    return rem(baseStyle[key], base);
  };

// MEMO: only supports 6 digits hex
const hexToRgba = (hex: string, opacity: number) => {
  const tempHex = hex.replace('#', '');
  const r = parseInt(tempHex.substring(0, 2), 16);
  const g = parseInt(tempHex.substring(2, 4), 16);
  const b = parseInt(tempHex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

export { rem, style, hexToRgba };
