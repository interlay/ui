type ColorHue = keyof Colors;

type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Colors = {
  light: string;
  dark: string;
  primary: Record<ColorShade, string>;
  // secondary: Color;
  grey: Record<ColorShade, string>;
  // success: Color;
  // error: Color;
};

export type { Colors, ColorHue, ColorShade };
