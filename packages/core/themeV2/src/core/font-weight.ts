type FontWeight = keyof typeof fontWeightBase;

const fontWeightBase = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

const fontWeight = (key: FontWeight) => fontWeightBase[key];

export { fontWeight };
export type { FontWeight };
