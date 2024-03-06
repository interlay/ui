type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type PrimaryColors = Record<`primary-${ColorShade}`, string>;

type GreyColors = Record<`grey-${ColorShade}`, string>;

type BlueColors = Record<`blue-${ColorShade}`, string>;

type GreenColors = Record<`green-${ColorShade}`, string>;

type RedColors = Record<`red-${ColorShade}`, string>;

type Palette = {
  light: string;
  dark: string;
} & PrimaryColors &
  GreyColors &
  BlueColors &
  GreenColors &
  RedColors;

type Color = keyof Palette;

const color = (colors: Palette) => (color: Color) => colors[color];

export { color };
export type { Color, Palette, PrimaryColors, GreyColors, BlueColors, GreenColors, RedColors };
