import { Styles } from 'styled-components/dist/types';

type ButtonSizes = 's' | 'md' | 'lg' | 'xl' | '2xl';

type ButtonColors = 'default' | 'primary';

type ButtonColorsParams = {
  base: Styles<object>;
  hover: Styles<object>;
  active: Styles<object>;
  focus?: Styles<object>;
  focusVisible?: Styles<object>;
  disabled: Styles<object>;
};

type ButtonVariantParams = {
  color: Record<ButtonColors, ButtonColorsParams>;
};

type ButtonVariants = 'solid' | 'outline' | 'ghost';

type ButtonTheme = {
  base: Styles<object>;
  size: Record<ButtonSizes, Styles<object>>;
  variant: Record<ButtonVariants, ButtonVariantParams>;
};

export type { ButtonSizes, ButtonTheme, ButtonColors, ButtonVariants };
