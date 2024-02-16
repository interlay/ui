import { fontSize, fontWeight, lineHeight, rounded, spacing, breakpoints } from './core';
import { ButtonTheme } from './components';

const baseTheme = {
  ...fontSize,
  ...fontWeight,
  ...lineHeight,
  ...rounded,
  ...spacing,
  ...breakpoints
};

type Theme = {
  button: ButtonTheme;
};

const defineTheme = (theme: Theme) => ({
  ...baseTheme,
  ...theme
});

export { baseTheme, defineTheme };
