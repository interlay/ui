import { css } from 'styled-components';

import { style } from '../utils';

import { fontSize } from './font-size';
import { lineHeight } from './line-height';

type Typography = keyof typeof typographyBase;

const typographyBase = {
  xs: css({
    fontSize: fontSize('xs', 'rem'),
    lineHeight: lineHeight('xs', 'rem')
  }),
  s: css({
    fontSize: fontSize('s', 'rem'),
    lineHeight: lineHeight('s', 'rem')
  }),
  md: css({
    fontSize: fontSize('md', 'rem'),
    lineHeight: lineHeight('md', 'rem')
  }),
  lg: css({
    fontSize: fontSize('lg', 'rem'),
    lineHeight: lineHeight('lg', 'rem')
  }),
  xl: css({
    fontSize: fontSize('xl', 'rem'),
    lineHeight: lineHeight('xl', 'rem')
  }),
  '2xl': css({
    fontSize: fontSize('2xl', 'rem'),
    lineHeight: lineHeight('2xl', 'rem')
  }),
  '3xl': css({
    fontSize: fontSize('3xl', 'rem'),
    lineHeight: lineHeight('3xl', 'rem')
  }),
  '4xl': css({
    fontSize: fontSize('4xl', 'rem'),
    lineHeight: lineHeight('4xl', 'rem')
  }),
  '5xl': css({
    fontSize: fontSize('5xl', 'rem'),
    lineHeight: lineHeight('5xl', 'rem')
  }),
  '6xl': css({
    fontSize: fontSize('6xl', 'rem'),
    lineHeight: lineHeight('6xl', 'rem')
  }),
  '7xl': css({
    fontSize: fontSize('7xl', 'rem'),
    lineHeight: lineHeight('7xl', 'rem')
  })
};

const typography = style(typographyBase);

export { typography };
export type { Typography };
