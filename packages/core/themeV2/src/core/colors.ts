type ColorHue = keyof Colors;

type ColorShade = 50 | 75 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Colors = {
  light: string;
  dark: string;
  primary: Record<ColorShade, string>;
  // secondary: Color;
  grey: Record<ColorShade, string>;
  // success: Color;
  // error: Color;
};

const color =
  (colors: Colors) =>
  (hue: ColorHue, shade: ColorShade = 500) => {
    if (hue === 'light' || hue === 'dark') {
      return colors[hue];
    }

    return colors[hue][shade];
  };

export { color };
export type { Colors, ColorHue, ColorShade };
