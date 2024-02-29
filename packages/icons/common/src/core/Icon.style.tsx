import { IconColors, IconsSizes } from '@interlay/themev2';
import styled from 'styled-components';

type StyledIconProps = {
  $size: IconsSizes;
  $color: IconColors;
};

const StyledIcon = styled.svg<StyledIconProps>`
  display: inline-block;
  user-select: none;
  flex-shrink: 0;
  overflow: hidden;
  ${({ theme, $size, $color }) => theme.icon($size, $color)}
`;

export { StyledIcon };
export type { StyledIconProps };
