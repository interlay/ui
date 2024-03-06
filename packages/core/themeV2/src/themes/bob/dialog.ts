import { maxWidth, rounded, spacing } from '../../core';
import { DialogTheme } from '../../components';

import { color } from './colors';

const dialog: DialogTheme = {
  base: {
    background: color('grey-500'),
    border: `1px solid ${color('grey-400')}`,
    borderRadius: rounded('md')
  },
  header: {
    padding: `${spacing('xl')} ${spacing('2xl')} ${spacing('s')} ${spacing('2xl')}`
  },
  body: {
    padding: `${spacing('md')} ${spacing('2xl')}`
  },
  footer: {
    padding: `${spacing('xl')} ${spacing('2xl')}`
  },
  size: {
    xs: {
      maxWidth: maxWidth('xs')
    },
    s: {
      maxWidth: maxWidth('s')
    },
    md: {
      maxWidth: maxWidth('md')
    },
    lg: {
      maxWidth: maxWidth('lg')
    },
    xl: {
      maxWidth: maxWidth('xl')
    },
    '2xl': {
      maxWidth: maxWidth('2xl')
    },
    '3xl': {
      maxWidth: maxWidth('3xl')
    },
    '4xl': {
      maxWidth: maxWidth('4xl')
    },
    '5xl': {
      maxWidth: maxWidth('5xl')
    },
    '6xl': {
      maxWidth: maxWidth('6xl')
    },
    '7xl': {
      maxWidth: maxWidth('7xl')
    }
  }
};

export { dialog };
