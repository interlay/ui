import { StyledObject } from 'styled-components';

type InputSizes = 's' | 'md' | 'lg';

type InputTheme = {
  base: StyledObject<object>;
  hover: StyledObject<object>;
  focus: StyledObject<object>;
  error: StyledObject<object>;
  disabled: StyledObject<object>;
  size: Record<InputSizes, StyledObject<object>>;
};

export type { InputSizes, InputTheme };
