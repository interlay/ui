import { TableTheme } from 'src/components';

import { rounded, typography, spacing } from '../../core';

import { color } from './colors';

const table: TableTheme = {
  item: {
    base: {
      borderRadius: rounded('md'),
      color: color('light'),
      padding: `${spacing('md')} ${spacing('lg')}`,
      ...typography('md')
    },
    hover: {
      backgroundColor: color('grey-600')
    },
    selected: {
      backgroundColor: color('light'),
      color: color('dark')
    }
  }
};

export { table };
