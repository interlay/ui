import { hexToRgba } from '../../utils';
import { rounded, typography, spacing, transition } from '../../core';
import { ListTheme } from '../../components';

import { color } from './colors';

const list: ListTheme = {
  item: {
    base: {
      borderRadius: rounded('md'),
      color: color('light'),
      padding: `${spacing('md')} ${spacing('lg')}`,
      ...typography('md'),
      ...transition('common', 'normal')
    },
    hover: {
      backgroundColor: hexToRgba(color('grey-300'), 20)
    },
    active: {
      backgroundColor: hexToRgba(color('grey-300'), 30)
    },
    selected: {
      backgroundColor: color('light'),
      color: color('dark')
    }
  }
};

export { list };
