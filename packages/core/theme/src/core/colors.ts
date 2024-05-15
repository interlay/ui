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

type NativeColor = 'inherit' | 'unset' | string;

type PaletteColor = keyof Palette;

type Color = PaletteColor | NativeColor;

const color = (colors: Palette) => (color: Color) => colors[color as PaletteColor] || color;

export { color };
export type { Color, Palette, PrimaryColors, PaletteColor, GreyColors, BlueColors, GreenColors, RedColors };
