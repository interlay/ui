import { ButtonSizes, ButtonVariants } from '@interlay/themev2';
import { ButtonColors } from '@interlay/themev2/src/components';
import styled, { css } from 'styled-components';

type StyledButtonProps = {
  $fullWidth?: boolean;
  $size: ButtonSizes;
  $color: ButtonColors;
  $variant: ButtonVariants;
  $isFocusVisible?: boolean;
  $isIconOnly?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  background: none;
  outline: transparent solid 2px;
  border: 0px solid;

  text-decoration: none;
  appearance: none;
  user-select: none;

  ${({ theme, $size, $variant, $color, $isFocusVisible, $isIconOnly }) => {
    const { active, disabled, hover, focus, focusVisible } = theme.button.variant[$variant].color[$color];

    return css`
      ${theme.button.base}
      ${theme.button.size[$size]}
      ${theme.button.variant[$variant].color[$color].base}
      ${$isFocusVisible && focusVisible}
      ${$isIconOnly &&
      css`
        padding: 0;
        width: ${theme.button.size[$size].height};
      `}
      

      &:hover:not([disabled]) {
        ${hover}
      }

      &:active:not([disabled]) {
        ${active}
      }

      &:focus:not([disabled]) {
        ${focus}
      }

      &[aria-disabled='true'],
      &[disabled] {
        pointer-events: none;
        cursor: not-allowed;
        ${disabled}
      }
    `;
  }}
`;

export { StyledButton };
