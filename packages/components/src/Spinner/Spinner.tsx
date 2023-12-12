import { HTMLAttributes } from 'react';
import { CTAVariants, IconSize } from '@interlay/theme';

import { StyledSpinner } from './Spinner.style';

type Props = {
  thickness?: number;
  color?: CTAVariants;
  size?: IconSize | string;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type SpinnerProps = Props & NativeAttrs;

const Spinner = ({ size = 'md', thickness = 4, color = 'primary', ...props }: SpinnerProps): JSX.Element => (
  <StyledSpinner {...props} $color={color} $size={size} $thickness={thickness} role='progressbar' />
);

export { Spinner };
export type { SpinnerProps };
