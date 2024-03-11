type Rounded = keyof typeof roundedBase;

const roundedBase = {
  none: 0,
  xxs: 2,
  xs: 4,
  s: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
  '3xl': 20,
  '4xl': 24,
  full: 9999
};

const rounded = (key: Rounded) => `${roundedBase[key]}px`;

export { rounded };
export type { Rounded };
