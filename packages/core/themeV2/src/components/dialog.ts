import { MaxWidth } from 'src/core';
import { StyledObject } from 'styled-components';

type DialogSize = MaxWidth;

type DialogTheme = {
  base: StyledObject<object>;
  header: StyledObject<object>;
  body: StyledObject<object>;
  footer: StyledObject<object>;
  size: Record<DialogSize, StyledObject<object>>;
};

export type { DialogTheme, DialogSize };
