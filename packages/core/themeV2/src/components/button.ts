type ButtonSizes = 's' | 'md' | 'lg' | 'xl' | '2xl';

type ButtonSizeParams = {
  padding: string;
  fontSize: string;
  lineHeight: string;
  height: string;
};

type ButtonColors = 'default' | 'primary';

type ButtonColorsParams = {
  color: string;
  bg: string;
  border?: string;
  hover: {
    bg: string;
  };
  active: {
    bg: string;
  };
  focus?: {
    boxShadow: string;
  };
  disabled: {
    color: string;
    bg?: string;
    border?: string;
  };
};

type ButtonVariants = 'solid' | 'outline' | 'ghost';

type ButtonVariantParams = {
  color: Record<ButtonColors, ButtonColorsParams>;
};

type ButtonTheme = {
  rounded: string;
  fontWeight: number;
  size: Record<ButtonSizes, ButtonSizeParams>;
  variant: Record<ButtonVariants, ButtonVariantParams>;
};

export type { ButtonSizes, ButtonTheme, ButtonColors, ButtonVariants };
