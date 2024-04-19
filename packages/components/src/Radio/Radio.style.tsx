import styled, { css } from 'styled-components';
import { Orientation, RadioSize, Spacing } from '@interlay/theme';

import { Flex } from '../Flex';
import { visuallyHidden } from '../utils/visually-hidden';
import { Label } from '../Label';

type StyledRadioGroupProps = {
  $orientation: Orientation;
  $gap?: Spacing;
};

type StyledLabelProps = {
  $isDisabled?: boolean;
  $flex?: number | string | boolean;
};

type StyledButtonProps = {
  $size: RadioSize;
  $isSelected: boolean;
  $isHovered: boolean;
};

const StyledRadioGroup = styled(Flex)<StyledRadioGroupProps>`
  width: 100%;

  label {
    margin-right: ${({ $orientation, $gap, theme }) => $orientation === 'horizontal' && $gap && theme.spacing($gap)};
    margin-bottom: ${({ $orientation, $gap, theme }) => $orientation === 'vertical' && $gap && theme.spacing($gap)};
  }
`;

const StyledLabel = styled(Label)<StyledLabelProps>`
  padding: 0;
  display: flex;
  gap: ${({ theme }) => theme.spacing('md')};
  align-items: center;
  opacity: ${({ $isDisabled }) => $isDisabled && 0.5};
  flex: ${({ $flex }) => (typeof $flex === 'boolean' ? '1' : $flex)};
`;

const StyledInput = styled.input`
  ${visuallyHidden()}
`;

const StyledButton = styled.span<StyledButtonProps>`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  outline: none;
  border-radius: 50%;
  opacity: ${({ $isHovered }) => $isHovered && 0.9};

  ${({ theme, $size, $isSelected }) => {
    const { button, selected, size } = theme.radio;
    const { button: buttonSize, selected: selectedSize } = size[$size];

    return css`
      ${button.base}
      ${buttonSize.base}
      ${$isSelected && selected.button.base}
      
      &::after {
        content: '';
        border-radius: 50%;
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: inherit;

        ${button.inside}
        ${$isSelected && selected.button.inside}
        ${$isSelected && selectedSize.button.inside}
      }
    `;
  }}
`;

export { StyledLabel, StyledRadioGroup, StyledButton, StyledInput };
