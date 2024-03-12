import { HTMLAttributes } from 'react';
import { Color, FontSize, FontWeight } from '@interlay/theme';

import { NormalAlignments } from '../../../core/theme/src';

type Props = {
  color?: Color | 'inherit';
  size?: FontSize;
  align?: NormalAlignments;
  weight?: FontWeight;
  rows?: number;
  noWrap?: boolean;
  fontFamily?: string;
};

type NativeAttrs<T = unknown> = Omit<HTMLAttributes<T>, keyof Props>;

type TextProps<T = unknown> = Props & NativeAttrs<T>;

export type { TextProps };
