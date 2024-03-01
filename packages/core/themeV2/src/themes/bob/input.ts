import { fontWeight, rounded, spacing, typography } from '../../core';
import { InputTheme } from '../../components';

import { color } from './colors';

// color: 'var(--colors-input-text)',
// background: 'var(--colors-input-background)',
// height: '4rem',
// default: {
//   border: '1px solid var(--colors-input-default-border)'
// },
// hover: {
//   border: '1px solid var(--colors-input-hover-border)'
// },
// focus: {
//   border: '1px solid var(--colors-input-focus-border)',
//   boxShadow: '0 0 0 1px var(--colors-input-focus-border)'
// },
// error: {
//   color: 'var(--colors-error-dark)',
//   border: '1px solid var(--colors-error-dark)'
// },
// disabled: {
//   color: 'var(--colors-input-disabled-text)',
//   bg: 'var(--colors-input-disabled-bg)',
//   border: '1px solid var(--colors-input-disabled-border)'
// },
// helperText: {
//   error: {
//     color: 'var(--colors-error-dark)'
//   }
// },
// sall: {
//   text: 'var(--text-s)',
//   maxHeight: 'var(--spacing-8)',
//   weight: 'var(--font-weights-book)'
// },
// medium: {
//   text: 'var(--text-base)',
//   maxHeight: 'var(--spacing-10)',
//   weight: 'var(--font-weights-book)'
// },
// large: {
//   text: 'var(--text-4xl)',
//   maxHeight: 'var(--spacing-16)',
//   weight: 'var(--font-weights-medium)'
// },
// overflow: {
//   large: {
//     text: 'var(--text-2xl)'
//   }
// },
// paddingX: {
//   s: '2rem',
//   md: '4rem',
//   lg: '6.25rem',
//   xl: '8rem',
//   xl2: '9.5rem'
// }

const input: InputTheme = {
  base: {
    color: color('light'),
    backgroundColor: color('grey-500'),
    border: `1px solid ${color('grey-200')}`,
    borderRadius: rounded('md')
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
      fontWeight: fontWeight('semibold'),
      paddingLeft: spacing('lg'),
      paddingRight: spacing('lg'),
      paddingTop: spacing('md'),
      paddingBottom: spacing('md')
    }
  }
};

export { input };
