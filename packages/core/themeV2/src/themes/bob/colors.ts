import { ColorHue, ColorShade, Colors } from '../../core';

const colorsBase: Colors = {
  light: '#ffffff',
  dark: '#030303',
  primary: {
    50: '#ffefe6',
    75: '#ffbf97',
    100: '#ffa56c',
    200: '#ff7e2c',
    300: '#ff6301',
    400: '#b34501',
    500: '#9c3c01'
  },
  grey: {
    50: '#e8e8e9',
    75: '#9fa2a6',
    100: '#787b81',
    200: '#3e424b',
    300: '#161b26',
    400: '#0f131b',
    500: '#0d1017'
  }
};

const colors = (hue: ColorHue, shade: ColorShade = 500) => {
  if (hue === 'light' || hue === 'dark') {
    return colorsBase[hue];
  }

  return colorsBase[hue][shade];
};

export { colors };
