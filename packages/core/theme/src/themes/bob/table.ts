import { hexToRgba } from '../../utils';
import { fontWeight, spacing, typography } from '../../core';
import { TableTheme } from '../../components';

import { color } from './colors';

const table: TableTheme = {
  base: {},
  columnHeader: {
    paddingTop: spacing('lg'),
    paddingLeft: spacing('lg'),
    paddingBottom: spacing('lg'),
    color: color('light'),
    fontWeight: fontWeight('bold'),
    ...typography('xs'),
    '&:last-of-type': {
      textAlign: 'right',
      paddingRight: spacing('lg')
    }
  },
  cell: {
    paddingTop: spacing('md'),
    paddingLeft: spacing('md'),
    paddingBottom: spacing('md'),
    color: color('light'),
    ...typography('s'),
    '&:last-of-type': {
      textAlign: 'right',
      paddingRight: spacing('md')
    }
  },
  headerRow: {
    backgroundColor: color('grey-800')
  },
  row: {
    odd: {
      base: {
        backgroundColor: color('grey-500')
      },
      hover: {
        backgroundColor: hexToRgba(color('grey-500'), 70)
      }
    },
    even: {
      base: {
        backgroundColor: color('grey-700')
      },
      hover: {
        backgroundColor: hexToRgba(color('grey-700'), 70)
      }
    },
    selected: {
      backgroundColor: hexToRgba(color('primary-500'), 50)
    }
  }
};

export { table };
