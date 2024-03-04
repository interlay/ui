import { fontWeight, rounded, spacing, typography, transition } from '../../core';
import { InputTheme } from '../../components';

import { color } from './colors';

const input: InputTheme = {
  base: {
    color: color('light'),
    backgroundColor: color('grey-500'),
    border: `1px solid ${color('grey-200')}`,
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
    border: `1px solid ${color('grey-200')}`
  },
  focus: {
    border: `1px solid ${color('light')}`,
    boxShadow: `0 0 0 1px ${color('light')}`
  },
  placeholder: {
    color: color('grey-100')
  },
  disabled: {
    opacity: 0.5
  },
  error: {
    base: {
      border: `1px solid ${'#FF0000'}`
    },
    hover: {
      border: `1px solid ${'#FF0000'}`
    },
    focus: {
      boxShadow: `0 0 0 1px ${'#FF0000'}`
    }
  }
};

export { input };
