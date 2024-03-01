import { defineTheme } from '../../define';

import { button } from './button';
import { input } from './input';
import { accordion } from './accordion';
import { alert } from './alert';
import { card } from './card';
import { dialog } from './dialog';
import { divider } from './divider';
import { drawer } from './drawer';
import { list } from './list';
import { radio } from './radio';
import { colors } from './colors';
import { spinner } from './spinner';
import { _switch } from './switch';

const bobTheme = defineTheme({
  colors,
  accordion,
  alert,
  button,
  card,
  dialog,
  divider,
  drawer,
  input,
  list,
  radio,
  spinner,
  switch: _switch
});

export { bobTheme };