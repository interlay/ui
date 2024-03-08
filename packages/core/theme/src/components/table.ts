import { StyledObject } from 'styled-components';

type TableTheme = {
  tab: {
    base: StyledObject<object>;
    item: {
      base: StyledObject<object>;
      hover: StyledObject<object>;
      focus: StyledObject<object>;
      selected: StyledObject<object>;
    };
  };
};

export type { TableTheme };
