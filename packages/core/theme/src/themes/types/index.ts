import base from '../base';

import { ComponentsTheme } from './components';

type BaseTheme = typeof base;

type Theme = ComponentsTheme & BaseTheme;

export type { Theme };
export * from './components';
