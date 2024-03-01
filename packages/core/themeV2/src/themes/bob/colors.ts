import { Palette, GreyColors, PrimaryColors, color as baseColor } from '../../core';

const primary: PrimaryColors = {
  'primary-50': '#ffefe6',
  'primary-75': '#ffbf97',
  'primary-100': '#ffa56c',
  'primary-200': '#ff7e2c',
  'primary-300': '#ff6301',
  'primary-400': '#b34501',
  'primary-500': '#9c3c01',
  'primary-600': '#9c3c01',
  'primary-700': '#9c3c01',
  'primary-800': '#9c3c01',
  'primary-900': '#9c3c01'
};

const grey: GreyColors = {
  'grey-50': '#e8e8e9',
  'grey-75': '#9fa2a6',
  'grey-100': '#787b81',
  'grey-200': '#3e424b',
  'grey-300': '#161b26',
  'grey-400': '#0f131b',
  'grey-500': '#0d1017',
  'grey-600': '#0d1017',
  'grey-700': '#0d1017',
  'grey-800': '#0d1017',
  'grey-900': '#0d1017'
};

const colors: Palette = {
  light: '#ffffff',
  dark: '#030303',
  ...primary,
  ...grey
};

const color = baseColor(colors);

export { color, colors };
