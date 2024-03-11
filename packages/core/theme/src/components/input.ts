import { StyledObject } from 'styled-components';

type InputSizes = 's' | 'md' | 'lg';

type InputTheme = {
  base: StyledObject<object>;
  hover: StyledObject<object>;
  focus: StyledObject<object>;
  error: {
    base: StyledObject<object>;
    hover: StyledObject<object>;
    focus: StyledObject<object>;
  };
  disabled: StyledObject<object>;
  size: Record<InputSizes, StyledObject<object>>;
  placeholder: StyledObject<object>;
  adornment: StyledObject<object>;
};

export type { InputSizes, InputTheme };
