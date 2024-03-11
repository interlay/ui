import { Palette, GreyColors, PrimaryColors, color as baseColor, BlueColors, GreenColors, RedColors } from '../../core';

const primary: PrimaryColors = {
  'primary-50': '#ffefe6',
  'primary-100': '#ffcfb0',
  'primary-200': '#ffb78a',
  'primary-300': '#ff9655',
  'primary-400': '#ff8234',
  'primary-500': '#ff6301',
  'primary-600': '#e85a01',
  'primary-700': '#b54601',
  'primary-800': '#8c3601',
  'primary-900': '#6b2a00'
};

const grey: GreyColors = {
  'grey-50': '#e8e8e9',
  'grey-100': '#b7b8bc',
  'grey-200': '#94969b',
  'grey-300': '#63666e',
  'grey-400': '#454951',
  'grey-500': '#161b26',
  'grey-600': '#141923',
  'grey-700': '#10131b',
  'grey-800': '#0c0f15',
  'grey-900': '#090b10'
};

const blue: BlueColors = {
  'blue-50': '#e6f0fa',
  'blue-100': '#b0d0ef',
  'blue-200': '#8ab9e7',
  'blue-300': '#5498dc',
  'blue-400': '#3385d5',
  'blue-500': '#0066cb',
  'blue-600': '#005db9',
  'blue-700': '#004890',
  'blue-800': '#003870',
  'blue-900': '#002b55'
};

const green: GreenColors = {
  'green-50': '#e8f7f0',
  'green-100': '#b8e7cf',
  'green-200': '#95dcb8',
  'green-300': '#65cc97',
  'green-400': '#47c283',
  'green-500': '#19b364',
  'green-600': '#17a35b',
  'green-700': '#127f47',
  'green-800': '#0e6237',
  'green-900': '#0b4b2a'
};

const red: RedColors = {
  'red-50': '#feeceb',
  'red-100': '#fac5c1',
  'red-200': '#f8a9a3',
  'red-300': '#f5827a',
  'red-400': '#f36960',
  'red-500': '#f04438',
  'red-600': '#da3e33',
  'red-700': '#aa3028',
  'red-800': '#84251f',
  'red-900': '#651d18'
};

const colors: Palette = {
  light: '#ffffff',
  dark: '#030303',
  ...primary,
  ...grey,
  ...blue,
  ...green,
  ...red
};

const color = baseColor(colors);

export { color, colors };
