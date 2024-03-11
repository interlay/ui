import { style } from '../utils';

type MaxWidth = 'xs' | 's' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

const maxWidthBase: Record<MaxWidth, number> = {
  xs: 320,
  s: 384,
  md: 448,
  lg: 512,
  xl: 576,
  '2xl': 672,
  '3xl': 768,
  '4xl': 896,
  '5xl': 1024,
  '6xl': 1152,
  '7xl': 1280
};

const maxWidth = style(maxWidthBase);

export { maxWidth };
export type { MaxWidth };
