import { StyledObject } from 'styled-components';

import { Typography } from '../core';

type RadioSize = 's' | 'md' | 'lg';

type RadioTheme = {
  button: { base: StyledObject<object>; inside: StyledObject<object> };
  selected: { button: { base: StyledObject<object>; inside: StyledObject<object> } };
  size: Record<
    RadioSize,
    {
      button: { base: StyledObject<object>; inside?: StyledObject<object> };
      label: Typography;
      selected: { button: { inside: StyledObject<object> } };
    }
  >;
};

export type { RadioTheme, RadioSize };
