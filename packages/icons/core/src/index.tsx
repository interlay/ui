import type { Colors } from '@just_testing13/theme';

import styled from 'styled-components';
import { theme, resolveColor } from '@just_testing13/theme';
import { SVGAttributes, forwardRef } from 'react';

type IconSize = keyof typeof theme.icon.sizes;

type StyledIconProps = {
  $size: IconSize;
  $color?: Colors;
};

const StyledIcon = styled.svg<StyledIconProps>`
  color: ${({ $color }) => resolveColor($color)};
  width: ${({ $size }) => theme.icon.sizes[$size]};
  height: ${({ $size }) => theme.icon.sizes[$size]};
  display: inline-block;
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
`;

type Props = {
  size?: IconSize;
  color?: Colors;
};

type NativeAttrs<T = unknown> = Omit<SVGAttributes<T>, keyof Props>;

type IconProps<T = unknown> = Props & NativeAttrs<T>;

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 'md', color = 'primary', ...props }, ref): JSX.Element => (
    <StyledIcon ref={ref} $color={color} $size={size} {...props} />
  )
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps, IconSize };
