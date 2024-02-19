import { Rounded } from '../core';

type ListTheme = {
  bg: string;
  item: {
    rounded: Rounded;
    border: string;
    hover: {
      bg: string;
    };
    selected: {
      bg: string;
    };
  };
};

export type { ListTheme };
