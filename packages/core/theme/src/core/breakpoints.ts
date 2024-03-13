// @ts-nocheck
import { css } from 'styled-components';

type BreakPoints = 'base' | 's' | 'md' | 'lg' | 'xl';

type ResponsiveProp<T extends number | string | boolean> = T | Partial<{ [K in BreakPoints]: T }>;

const values: Record<BreakPoints, number> = {
  base: 0, // phone
  s: 600, // tablet
  md: 900, // small laptop
  lg: 1200, // desktop
  xl: 1536 // large screen
};

const breakpoints = {
  values,
  up: (key: BreakPoints): string => `(min-width:${values[key]}px)`,
  down: (key: BreakPoints): string => `(max-width:${values[key]}px)`,
  media: {
    base: (...args) => css`
      @media (min-width: ${values.base}px) {
        ${css(...args)};
      }
    `,
    s: (...args) => css`
      @media (min-width: ${values.s}px) {
        ${css(...args)};
      }
    `,
    md: (...args) => css`
      @media (min-width: ${values.md}px) {
        ${css(...args)};
      }
    `,
    lg: (...args) => css`
      @media (min-width: ${values.lg}px) {
        ${css(...args)};
      }
    `,
    xl: (...args) => css`
      @media (min-width: ${values.xl}px) {
        ${css(...args)};
      }
    `
  }
};

export { breakpoints };
export type { BreakPoints, ResponsiveProp };
