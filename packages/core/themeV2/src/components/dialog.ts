import { StyledObject } from 'styled-components';

type DialogSize = 's' | 'md' | 'lg';

type DialogSizeParams = {
  base: StyledObject<object>;
  header: StyledObject<object>;
  body: StyledObject<object>;
  footer: StyledObject<object>;
};

type DialogTheme = {
  base: StyledObject<object>;
  size: Record<DialogSize, DialogSizeParams>;
};

export type { DialogTheme, DialogSize };
