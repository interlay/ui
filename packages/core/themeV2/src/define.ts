import type { Colors } from './core';

import { fontSize, typography, fontWeight, lineHeight, rounded, spacing, breakpoints, transition } from './core';
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
  SwitchTheme
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
  colors: Colors;
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
};

const defineTheme = (theme: ThemeParams) => ({
  ...baseTheme,
  ...theme
});

type Theme = ReturnType<typeof defineTheme>;

export { baseTheme, defineTheme };
export type { Theme };
