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
import { switch } from './switch';

const theme = defineTheme({
  accordion,
  alert,
  button,
  card,
  dialog,
  divider,
  drawer,
  input,
  list,
  radio,switch
});

export { theme };
