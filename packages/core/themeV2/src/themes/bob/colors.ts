import { Colors, color as baseColor } from '../../core';

const colors: Colors = {
  light: '#ffffff',
  dark: '#030303',
  primary: {
    50: '#ffefe6',
    75: '#ffbf97',
    100: '#ffa56c',
    200: '#ff7e2c',
    300: '#ff6301',
    400: '#b34501',
    500: '#9c3c01',
    600: '#9c3c01',
    700: '#9c3c01',
    800: '#9c3c01',
    900: '#9c3c01'
  },
  grey: {
    50: '#e8e8e9',
    75: '#9fa2a6',
    100: '#787b81',
    200: '#3e424b',
    300: '#161b26',
    400: '#0f131b',
    500: '#0d1017',
    600: '#0d1017',
    700: '#0d1017',
    800: '#0d1017',
    900: '#0d1017'
  }
};

const color = baseColor(colors);

export { color, colors };
