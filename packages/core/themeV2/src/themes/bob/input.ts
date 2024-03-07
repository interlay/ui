import { fontWeight, rounded, spacing, typography, transition } from '../../core';
import { InputTheme } from '../../components';

import { color } from './colors';

const input: InputTheme = {
  base: {
    color: color('light'),
    backgroundColor: color('grey-600'),
    border: `1px solid ${color('grey-400')}`,
    borderRadius: rounded('md'),
    ...transition('common', 'normal')
  },
  size: {
    s: {
      ...typography('s'),
      fontWeight: fontWeight('normal'),
      paddingLeft: spacing('s'),
      paddingRight: spacing('s'),
      paddingTop: spacing('xs'),
      paddingBottom: spacing('xs')
    },
    md: {
      ...typography('md'),
      fontWeight: fontWeight('medium'),
      paddingLeft: spacing('md'),
      paddingRight: spacing('md'),
      paddingTop: spacing('s'),
      paddingBottom: spacing('s')
    },
    lg: {
      ...typography('xl'),
      fontWeight: fontWeight('medium'),
      paddingLeft: spacing('lg'),
      paddingRight: spacing('lg'),
      paddingTop: spacing('md'),
      paddingBottom: spacing('md')
    }
  },
  hover: {
    border: `1px solid ${color('grey-300')}`
  },
  focus: {
    border: `1px solid ${color('light')}`,
    boxShadow: `0 0 0 1px ${color('light')}`
  },
  placeholder: {
    color: color('grey-300')
  },
  disabled: {
    opacity: 0.5
  },
  error: {
    base: {
      border: `1px solid ${color('red-500')}`
    },
    hover: {
      border: `1px solid ${color('red-500')}`
    },
    focus: {
      boxShadow: `0 0 0 1px ${color('red-500')}`
    }
  }
};

export { input };
