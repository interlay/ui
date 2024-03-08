import { rounded, spacing, typography } from '../../core';
import { TooltipTheme } from '../../components';

import { color } from './colors';

const tooltip: TooltipTheme = {
  backgroundColor: color('grey-400'),
  padding: `${spacing('s')} ${spacing('md')}`,
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.21)',
  borderRadius: rounded('md'),
  ...typography('s')
};

export { tooltip };
