import { rounded, typography, spacing } from '../../core';
import { ListTheme } from '../../components';

import { color } from './colors';

const list: ListTheme = {
  item: {
    base: {
      borderRadius: rounded('md'),
      color: color('light'),
      padding: spacing('lg'),
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

export { list };
