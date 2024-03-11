import { StyledObject } from 'styled-components/dist/types';

type ButtonSizes = 's' | 'md' | 'lg' | 'xl' | '2xl';

type ButtonColors = 'default' | 'primary';

type ButtonColorsParams = {
  base: StyledObject<object>;
  hover: StyledObject<object>;
  active: StyledObject<object>;
  focus?: StyledObject<object>;
  focusVisible?: StyledObject<object>;
  disabled: StyledObject<object>;
};

type ButtonVariantParams = {
  color: Record<ButtonColors, ButtonColorsParams>;
};

type ButtonVariants = 'solid' | 'outline' | 'ghost';

type ButtonTheme = {
  base: StyledObject<object>;
  size: Record<ButtonSizes, StyledObject<object>>;
  variant: Record<ButtonVariants, ButtonVariantParams>;
};

export type { ButtonSizes, ButtonTheme, ButtonColors, ButtonVariants };
