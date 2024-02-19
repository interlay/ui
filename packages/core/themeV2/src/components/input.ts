import { FontSize, Rounded } from '../core';

type InputSizes = 's' | 'md' | 'lg';

type InputSizeParams = {
  text: FontSize;
};

// TODO: missing paddings
type InputTheme = {
  color: string;
  bg: string;
  rounded: Rounded;
  placeholder: string;
  hover: {
    border: string;
  };
  focus: {
    border: string;
    boxShadow: string;
  };
  error: {
    color: string;
    border: string;
  };
  disabled: {
    color: string;
    bg: string;
    border: string;
  };
  size: Record<InputSizes, InputSizeParams>;
};

export type { InputTheme, InputSizes };
