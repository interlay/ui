import { HTMLAttributes } from 'react';
import { SpinnerColors, SpinnerSizes } from '@interlay/themev2';

import { StyledSpinner } from './Spinner.style';

const thicknessMap: Record<SpinnerSizes, number> = {
  xs: 3,
  s: 3,
  md: 3,
  lg: 4.5,
  xl: 5,
  '2xl': 6,
  '3xl': 7
};

type Props = {
  thickness?: number;
  color?: SpinnerColors;
  size?: SpinnerSizes | string;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type SpinnerProps = Props & NativeAttrs;

const Spinner = ({ size = 'md', thickness, color = 'default', ...props }: SpinnerProps): JSX.Element => (
  <StyledSpinner
    {...props}
    $color={color}
    $size={size}
    $thickness={thickness || thicknessMap[size as SpinnerSizes] || 4}
    role='progressbar'
  />
);

export { Spinner };
export type { SpinnerProps };
