import { SVGAttributes, forwardRef } from 'react';
import { IconColors, IconsSizes } from '@interlay/themev2';

import { StyledIcon } from './Icon.style';

type Props = {
  size?: IconsSizes;
  color?: IconColors;
};

type NativeAttrs<T = unknown> = Omit<SVGAttributes<T>, keyof Props>;

type IconProps<T = unknown> = Props & NativeAttrs<T>;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', color = 'light', ...props }, ref): JSX.Element => (
    <StyledIcon ref={ref} $color={color} $size={size} {...props} />
  )
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps };
