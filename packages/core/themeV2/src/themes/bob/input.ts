import { fontWeight, spacing, typography } from '../../core';
import { InputTheme } from '../../components';

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
// small: {
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
typography;

const input: InputTheme = {
  size: {
    s: {
      ...typography('s'),
      fontWeight: fontWeight('normal'),
      paddingLeft: spacing('md'),
      paddingRight: spacing('md')
    },
    md: {
      ...typography('md'),
      fontWeight: fontWeight('medium'),
      paddingLeft: spacing('xl'),
      paddingRight: spacing('xl')
    },
    lg: {
      ...typography('4xl'),
      fontWeight: fontWeight('medium'),
      paddingLeft: spacing('2xl'),
      paddingRight: spacing('2xl')
    }
  }
};

export { input };
