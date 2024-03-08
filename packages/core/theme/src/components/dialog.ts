import { StyledObject } from 'styled-components';

import { MaxWidth } from '../core';

type DialogSize = MaxWidth;

type DialogTheme = {
  base: StyledObject<object>;
  header: StyledObject<object>;
  body: StyledObject<object>;
  footer: StyledObject<object>;
  size: Record<DialogSize, StyledObject<object>>;
};

export type { DialogTheme, DialogSize };
