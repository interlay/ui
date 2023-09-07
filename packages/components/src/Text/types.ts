import { HTMLAttributes } from 'react';
import { Colors, FontSize, FontWeight, NormalAlignments } from '@just_testing13/theme';

type Props = {
  color?: Colors;
  size?: FontSize;
  align?: NormalAlignments;
  weight?: FontWeight;
  rows?: number;
  noWrap?: boolean;
};

type NativeAttrs<T = unknown> = Omit<HTMLAttributes<T>, keyof Props>;

type TextProps<T = unknown> = Props & NativeAttrs<T>;

export type { TextProps };
