const rem = (value: number, base = 16) => `${(1 / base) * value}rem`;

const style =
  <T extends Record<string, any>>(baseStyle: T) =>
  (key: keyof typeof baseStyle, unit: 'rem' | 'px' = 'rem', base = 16) => {
    if (unit === 'px') {
      return `${baseStyle[key]}px`;
    }

    return rem(baseStyle[key], base);
  };

export { rem, style };
