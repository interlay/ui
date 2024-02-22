import styled, { css } from 'styled-components';
import { ArrowTopRightOnSquare } from '@interlay/icons';
import { theme } from '@interlay/theme';
import { ButtonSizes, ButtonVariants } from '@interlay/themev2';
import { ButtonColors } from '@interlay/themev2/src/components';

type StyledButtonProps = {
  $fullWidth?: boolean;
  $size: ButtonSizes;
  $color: ButtonColors;
  $variant: ButtonVariants;
  $isFocusVisible?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  background: none;
  outline: ${({ $isFocusVisible }) => !$isFocusVisible && 'none'};
  border: 0px solid;

  border-radius: ${({ theme }) => theme.button.rounded};
  font-weight: ${({ theme }) => theme.button.fontWeight};

  ${({ theme, $size }) => css(theme.button.size[$size])}
  ${({ theme, $variant, $color }) => {
    const { bg, color, border, hover, focus, disabled, active } = theme.button.variant[$variant].color[$color];

    return css`
      background-color: ${bg};
      color: ${color};
      border: ${border};

      &:hover:not([disabled]) {
        background-color: ${hover.bg};
      }

      &:active:not([disabled]) {
        background-color: ${active.bg};
      }

      &:focus:not([disabled]) {
        box-shadow: ${focus?.boxShadow};
      }

      &[aria-disabled='true'],
      &[disabled] {
        pointer-events: none;
        cursor: not-allowed;
        color: ${disabled.color};
        background-color: ${disabled.bg};
        border: ${disabled.border};
      }
    `;
  }}

  transition: ${({ theme }) => theme.transition('common', 'normal', 'easeIn')}
`;

const LoadingWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${theme.spacing.spacing2};
`;

const StyledIcon = styled(ArrowTopRightOnSquare)`
  margin-left: ${theme.spacing.spacing2};
  width: 1.2em;
  height: 1.2em;
  color: inherit;
`;

export { LoadingWrapper, StyledButton, StyledIcon };
