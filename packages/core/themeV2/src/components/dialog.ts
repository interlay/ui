import { Rounded, Spacing } from '../core';

type DialogSize = 's' | 'md' | 'lg';

type DialogSizeParams = {
  width: Spacing | string;
  header: {
    padding: Spacing;
  };
  body: {
    paddingY: Spacing;
    paddingX: Spacing;
  };
  footer: {
    padding: Spacing;
  };
};

type DialogTheme = {
  bg: string;
  border: string;
  rounded: Rounded;
  size: Record<DialogSize, DialogSizeParams>;
};

export type { DialogTheme };
