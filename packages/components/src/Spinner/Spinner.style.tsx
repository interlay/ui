import { SpinnerColors, SpinnerSizes } from '@interlay/theme';
import styled, { css } from 'styled-components';

interface StyledSpinnerProps {
  $size: SpinnerSizes | string;
  $thickness: number;
  $color: SpinnerColors;
}

const StyledSpinner = styled.span<StyledSpinnerProps>`
  display: inline-flex;
  position: relative;
  text-indent: -9999em;
  border-style: solid;
  border-width: ${(props) => props.$thickness}px;
  border-radius: 100%;
  transform: translateZ(0);
  animation: loadIndeterminate 1.1s infinite linear;

  ${({ theme, $size, $color }) => {
    return css`
      width: ${theme.spinner.size[$size as SpinnerSizes]?.width || `${$size}px`};
      height: ${theme.spinner.size[$size as SpinnerSizes]?.height || `${$size}px`};
      ${theme.spinner.color[$color]}
    `;
  }}

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

export { StyledSpinner };
export type { StyledSpinnerProps };
