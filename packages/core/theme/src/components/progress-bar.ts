import { StyledObject } from 'styled-components';

type ProgressBarSize = 's' | 'md' | 'lg';

type ProgressBarTheme = {
  track: StyledObject<object>;
  fill: StyledObject<object>;
  size: Record<ProgressBarSize, { track: StyledObject<object>; fill: StyledObject<object> }>;
};

export type { ProgressBarTheme, ProgressBarSize };
