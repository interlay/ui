import { CardTheme } from '../../components';
import { transition } from '../../core';

import { color } from './colors';

const card: CardTheme = {
  base: {
    color: color('light'),
    border: `1px solid ${color('grey-400')}`,
    boxShadow: '0px 1px 3px 0px #0000001a, 0px 1px 2px 0px #0000000f',
    backgroundColor: color('grey-500'),
    ...transition('common', 'normal')
  },
  focus: {
    border: `1px solid ${color('light')}`,
    boxShadow: `0 0 0 1px ${color('light')}`
  }
};

export { card };
