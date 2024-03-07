import { StyledObject } from 'styled-components';

import { InputSizes } from './input';

type TokenInputSize = InputSizes;

type TokenInputTheme = {
  balance: StyledObject<object>;
  addorment: { token: { base: StyledObject<object>; img?: StyledObject<object> } };
  size: Record<
    TokenInputSize,
    {
      addornment: {
        bottom: StyledObject<object>;
        token: { base: StyledObject<object>; img: StyledObject<object> };
      };
    }
  >;
};

export type { TokenInputTheme, TokenInputSize };
