import { style } from '../utils';

type Spacing = keyof typeof baseSpacing;

const baseSpacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
  '7xl': 64,
  '8xl': 80,
  '9xl': 96,
  '10xl': 128,
  '11xl': 160
};

const spacing = style(baseSpacing);

export { spacing };
export type { Spacing };
