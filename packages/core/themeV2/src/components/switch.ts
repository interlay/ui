import { Spacing } from '../core';

type SwitchTheme = {
  width: Spacing;
  height: Spacing;
  bg: string;
  selected: {
    bg: string;
  };
  indicator: {
    bg: string;
  };
};

export type { SwitchTheme };
