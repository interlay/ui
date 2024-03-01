import type { Palette } from './core';

import {
  fontSize,
  typography,
  fontWeight,
  lineHeight,
  rounded,
  spacing,
  breakpoints,
  transition,
  color,
  icon
} from './core';
import {
  ButtonTheme,
  InputTheme,
  AccordionTheme,
  AlertTheme,
  CardTheme,
  DialogTheme,
  DividerTheme,
  DrawerTheme,
  ListTheme,
  RadioTheme,
  SwitchTheme,
  SpinnerTheme
} from './components';

const baseTheme = {
  fontSize,
  fontWeight,
  lineHeight,
  rounded,
  spacing,
  typography,
  transition,
  ...breakpoints
};

type ThemeParams = {
  colors: Palette;
  accordion: AccordionTheme;
  alert: AlertTheme;
  button: ButtonTheme;
  card: CardTheme;
  dialog: DialogTheme;
  divider: DividerTheme;
  drawer: DrawerTheme;
  input: InputTheme;
  list: ListTheme;
  radio: RadioTheme;
  switch: SwitchTheme;
  spinner: SpinnerTheme;
};

const defineTheme = ({ colors, ...theme }: ThemeParams) => ({
  ...baseTheme,
  ...theme,
  icon: icon(colors),
  color: color(colors)
});

type Theme = ReturnType<typeof defineTheme>;

export { baseTheme, defineTheme };
export type { Theme };