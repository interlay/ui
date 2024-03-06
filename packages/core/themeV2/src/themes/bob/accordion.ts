import { fontWeight, rounded, spacing, typography } from '../../core';
import { AccordionTheme } from '../../components';

import { color } from './colors';

const accordion: AccordionTheme = {
  item: {
    button: {
      padding: spacing('xl')
    },
    heading: {
      ...typography('lg'),
      fontWeight: fontWeight('medium')
    },
    content: {
      paddingTop: spacing('none'),
      paddingLeft: spacing('xl'),
      paddingRight: spacing('xl'),
      paddingBottom: spacing('xl')
    }
  },
  variant: {
    light: { base: {}, item: { base: {} } },
    splitted: {
      base: {
        gap: spacing('md')
      },
      item: {
        base: {
          borderRadius: rounded('xl'),
          border: `1px solid ${color('grey-400')}`,
          background: color('grey-500')
        }
      }
    }
  }
};

export { accordion };
