import { StyledObject } from 'styled-components/dist/types';

type SpinnerSizes = 'xs' | 's' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

type SpinnerColors = 'default' | 'primary';

type SpinnerColorsParams = StyledObject<object>;

type SpinnerTheme = {
  size: Record<SpinnerSizes, StyledObject<object>>;
  color: Record<SpinnerColors, SpinnerColorsParams>;
};

export type { SpinnerColors, SpinnerSizes, SpinnerTheme };
