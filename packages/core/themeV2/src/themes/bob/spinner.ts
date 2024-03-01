import { SpinnerTheme } from '../../components';
import { spacing } from '../../core';

import { color } from './colors';

const spinner: SpinnerTheme = {
  size: {
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
      height: spacing('4xl'),
      width: spacing('4xl')
    },
    xl: {
      height: spacing('5xl'),
      width: spacing('5xl')
    },
    '2xl': {
      height: spacing('6xl'),
      width: spacing('6xl')
    },
    '3xl': {
      height: spacing('7xl'),
      width: spacing('7xl')
    }
  },
  color: {
    default: {
      borderColor: `${color('light')} ${color('light')} ${'transparent'}`
    },
    primary: {
      borderColor: `${color('primary-300')} ${color('primary-300')} ${'transparent'}`
    }
  }
};

export { spinner };
