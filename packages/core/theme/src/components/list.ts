import { StyledObject } from 'styled-components';

type ListTheme = {
  item: {
    base: StyledObject<object>;
    hover: StyledObject<object>;
    active: StyledObject<object>;
    selected: StyledObject<object>;
  };
};

export type { ListTheme };
