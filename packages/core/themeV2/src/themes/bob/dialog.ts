import { rounded, spacing } from '../../core';
import { DialogTheme } from '../../components';

import { color } from './colors';

const dialog: DialogTheme = {
  base: {
    background: color('grey-300'),
    border: `1px solid ${color('grey-200')}`,
    borderRadius: rounded('md')
  },
  size: {
    s: {
      base: {
        width: '400px'
      },
      header: {
        padding: `${spacing('md')} ${spacing('lg')} ${spacing('s')} ${spacing('md')}`
      },
      body: {
        padding: `${spacing('md')} ${spacing('xs')}`
      },
      footer: {
        padding: `${spacing('xs')} ${spacing('md')} ${spacing('md')}`
      }
    },
    md: {
      base: {
        width: '32rem'
      },
      header: {
        padding: `${spacing('md')} ${spacing('lg')} ${spacing('md')} ${spacing('md')}`
      },
      body: {
        padding: `${spacing('s')} ${spacing('md')}`
      },
      footer: {
        padding: `${spacing('md')} ${spacing('lg')} ${spacing('lg')}`
      }
    },
    lg: {
      base: {
        width: '32rem'
      },
      header: {
        padding: `${spacing('md')} ${spacing('lg')} ${spacing('md')} ${spacing('md')}`
      },
      body: {
        padding: `${spacing('s')} ${spacing('md')}`
      },
      footer: {
        padding: `${spacing('md')} ${spacing('lg')} ${spacing('lg')}`
      }
    }
  }
};

export { dialog };
