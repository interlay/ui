type ColorShade = 50 | 75 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type PrimaryColors = Record<`primary-${ColorShade}`, string>;

type GreyColors = Record<`grey-${ColorShade}`, string>;

type Palette = {
  light: string;
  dark: string;
} & PrimaryColors &
  GreyColors;

type Color = keyof Palette;

const color = (colors: Palette) => (color: Color) => colors[color];

export { color };
export type { Color, Palette, PrimaryColors, GreyColors };
