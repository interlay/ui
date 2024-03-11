import { style } from '../utils';

type FontSize = keyof typeof fontSizeBase;

const fontSizeBase = {
  xs: 12,
  s: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72
};

const fontSize = style(fontSizeBase);

export { fontSize };
export type { FontSize };
