import { Styles } from 'styled-components/dist/types';
import { css } from 'styled-components';

import { spacing } from './space';
import { Color, Palette, color } from './colors';

type IconsSizes = 'xs' | 's' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

const iconSizeBase: Record<IconsSizes, Styles<object>> = {
  xs: {
    height: spacing('xl'),
    width: spacing('xl')
  },
  s: {
    height: spacing('2xl'),
    width: spacing('2xl')
  },
  md: {
    height: spacing('3xl'),
    width: spacing('3xl')
  },
  lg: {
    height: spacing('3xl'),
    width: spacing('3xl')
  },
  xl: {
    height: spacing('4xl'),
    width: spacing('4xl')
  },
  '2xl': {
    height: spacing('5xl'),
    width: spacing('5xl')
  },
  '3xl': {
    height: spacing('6xl'),
    width: spacing('6xl')
  },
  '4xl': {
    height: spacing('7xl'),
    width: spacing('7xl')
  }
};

const icon = (colors: Palette) => {
  const getColor = color(colors);

  return (size: IconsSizes, color: Color = 'light') => css`
    ${iconSizeBase[size]}
    color: ${getColor(color)};
  `;
};

export { icon };
export type { IconsSizes };
