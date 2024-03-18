import { StyledObject } from 'styled-components';

type TableTheme = {
  base: StyledObject<object>;
  columnHeader: StyledObject<object>;
  cell: StyledObject<object>;
  headerRow: StyledObject<object>;
  row: {
    odd: {
      base: StyledObject<object>;
      hover: StyledObject<object>;
    };
    even: {
      base: StyledObject<object>;
      hover: StyledObject<object>;
    };
    selected: StyledObject<object>;
  };
};

export type { TableTheme };
