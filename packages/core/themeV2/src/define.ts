import { fontSize, fontWeight, lineHeight, rounded, spacing, breakpoints } from './core';
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
  ...fontSize,
  ...fontWeight,
  ...lineHeight,
  ...rounded,
  ...spacing,
  ...breakpoints
};

type Theme = {
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

const defineTheme = (theme: Theme) => ({
  ...baseTheme,
  ...theme
});

export { baseTheme, defineTheme };
