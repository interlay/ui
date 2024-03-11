import { rounded, spacing } from '../../core';
import { AlertTheme } from '../../components';

import { color } from './colors';

const alert: AlertTheme = {
  base: {
    color: color('dark'),
    padding: spacing('md'),
    borderRadius: rounded('md')
  },
  status: {
    error: {
      backgroundColor: color('red-300'),
      border: `1px solid ${color('red-600')}`,
      color: color('red-300')
    },
    info: {
      backgroundColor: color('blue-300'),
      border: `1px solid ${color('blue-600')}`,
      color: color('red-300')
    },
    success: {
      backgroundColor: color('green-200'),
      border: `1px solid ${color('green-600')}`,
      color: color('red-300')
    },
    warning: {
      backgroundColor: color('red-300'),
      border: `1px solid ${color('red-600')}`,
      color: color('red-300')
    }
  }
};

export { alert };
