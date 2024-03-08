import { StyledObject } from 'styled-components';

import { InputSizes } from './input';

type TokenInputSize = InputSizes;

type TokenInputTheme = {
  balance: StyledObject<object>;
  addorment: { token: { base: StyledObject<object>; img?: StyledObject<object> }; usd: StyledObject<object> };
  list: {
    item: {
      ticker: StyledObject<object>;
      usd: StyledObject<object>;
      selected: {
        ticker: StyledObject<object>;
        usd: StyledObject<object>;
      };
    };
  };
  size: Record<
    TokenInputSize,
    {
      addornment: {
        token: { base: StyledObject<object>; img: StyledObject<object> };
      };
    }
  >;
};

export type { TokenInputTheme, TokenInputSize };
