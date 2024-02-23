import { Styles } from 'styled-components/dist/types';

import { style } from '../utils';

import { fontSize } from './font-size';
import { lineHeight } from './line-height';

type Typography = 'xs' | 's' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

const typographyBase: Record<Typography, Styles<object>> = {
  xs: {
    fontSize: fontSize('xs', 'rem'),
    lineHeight: lineHeight('xs', 'rem')
  },
  s: {
    fontSize: fontSize('s', 'rem'),
    lineHeight: lineHeight('s', 'rem')
  },
  md: {
    fontSize: fontSize('md', 'rem'),
    lineHeight: lineHeight('md', 'rem')
  },
  lg: {
    fontSize: fontSize('lg', 'rem'),
    lineHeight: lineHeight('lg', 'rem')
  },
  xl: {
    fontSize: fontSize('xl', 'rem'),
    lineHeight: lineHeight('xl', 'rem')
  },
  '2xl': {
    fontSize: fontSize('2xl', 'rem'),
    lineHeight: lineHeight('2xl', 'rem')
  },
  '3xl': {
    fontSize: fontSize('3xl', 'rem'),
    lineHeight: lineHeight('3xl', 'rem')
  },
  '4xl': {
    fontSize: fontSize('4xl', 'rem'),
    lineHeight: lineHeight('4xl', 'rem')
  },
  '5xl': {
    fontSize: fontSize('5xl', 'rem'),
    lineHeight: lineHeight('5xl', 'rem')
  },
  '6xl': {
    fontSize: fontSize('6xl', 'rem'),
    lineHeight: lineHeight('6xl', 'rem')
  },
  '7xl': {
    fontSize: fontSize('7xl', 'rem'),
    lineHeight: lineHeight('7xl', 'rem')
  }
};

const typography = style(typographyBase);

export { typography };
export type { Typography };
