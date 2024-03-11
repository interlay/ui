import { style } from '../utils';

type LineHeight = keyof typeof lineHeightBase;

const lineHeightBase = {
  none: 1,
  xs: 18,
  s: 20,
  md: 24,
  lg: 28,
  xl: 30,
  '2xl': 32,
  '3xl': 38,
  '4xl': 44,
  '5xl': 60,
  '6xl': 72,
  '7xl': 90
};

const lineHeight = style(lineHeightBase);

export { lineHeight };
export type { LineHeight };
