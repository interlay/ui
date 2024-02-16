import { FontSize, LineHeight, Spacing } from '../core';

type ButtonSizes = 'xs' | 's' | 'md' | 'lg';

type ButtonSizeParams = {
  paddingX: Spacing;
  text: FontSize;
  lineHeight: LineHeight;
  height: Spacing;
};

type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'text';

type ButtonVariantParams = {
  bg: string;
  bgHover: string;
  color: string;
};

type ButtonTheme = {
  size: Record<ButtonSizes, ButtonSizeParams>;
  variant: Record<ButtonVariants, ButtonVariantParams>;
};

export type { ButtonSizes, ButtonTheme, ButtonVariants };
