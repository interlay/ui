import { rounded, spacing, transition } from '../../core';
import { SwitchTheme } from '../../components';

import { color } from './colors';

const getSizeStyles = (width: string, height: string, percentage: string): SwitchTheme['size']['s'] => ({
  base: {
    width,
    height
  },
  indicator: {
    width: `calc(${height} * ${percentage})`,
    height: `calc(${height} * ${percentage})`,
    transform: `translateX(calc(${width} / 15))`,
    top: `calc(50% - (${height} * 0.35))`,
    left: 0
  },
  checked: {
    indicator: {
      transform: `translateX(calc(${width} - ${width} / 15 - ${height} * ${percentage}))`
    }
  }
});

const _switch: SwitchTheme = {
  base: {
    borderRadius: rounded('full'),
    margin: `${spacing('xs')} 0`,
    backgroundColor: color('grey-300'),
    ...transition('common', 'normal')
  },
  indicator: { backgroundColor: color('light'), borderRadius: rounded('full'), ...transition('common', 'normal') },
  checked: {
    backgroundColor: color('primary-500')
  },
  focusVisible: `2px solid ${color('primary-500')}`,
  size: {
    s: getSizeStyles(spacing('4xl'), spacing('2xl'), '0.7'),
    md: getSizeStyles(spacing('5xl'), spacing('3xl'), '0.75'),
    lg: getSizeStyles(spacing('7xl'), spacing('4xl'), '0.75')
  }
};

export { _switch };
