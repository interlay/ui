import { SVGAttributes, forwardRef } from 'react';
import { Color, IconsSizes } from '@interlay/theme';

import { StyledIcon } from './Icon.style';

type Props = {
  size?: IconsSizes;
  color?: Color;
};

type NativeAttrs<T = unknown> = Omit<SVGAttributes<T>, keyof Props>;

type IconProps<T = unknown> = Props & NativeAttrs<T>;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', color, ...props }, ref): JSX.Element => (
    <StyledIcon ref={ref} $color={color} $size={size} {...props} />
  )
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps };
