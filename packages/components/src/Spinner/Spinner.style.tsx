import styled from 'styled-components';
import { IconSize, theme } from '@interlay/theme';
import { CTAVariants } from '@interlay/theme';

interface StyledSpinnerProps {
  $size: IconSize | string;
  $thickness: number;
  $color: CTAVariants;
}

const StyledSpinner = styled.span<StyledSpinnerProps>`
  display: inline-flex;
  width: ${({ $size }) => theme.spinner.sizes?.[$size as IconSize] || `${$size}px`};
  height: ${({ $size }) => theme.spinner.sizes?.[$size as IconSize] || `${$size}px`};
  position: relative;
  text-indent: -9999em;
  border-style: solid;
  border-width: ${(props) => props.$thickness}px;
  border-radius: 100%;
  border-color: ${({ $color }) =>
    `${theme.spinner[$color].color} ${theme.spinner[$color].bg} ${theme.spinner[$color].bg}`};
  transform: translateZ(0);
  animation: loadIndeterminate 1.1s infinite linear;

  @-webkit-keyframes loadIndeterminate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loadIndeterminate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export type { StyledSpinnerProps };
export { StyledSpinner };
