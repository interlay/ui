import styled from 'styled-components';
import { Orientation, Spacing, theme } from '@interlay/theme';

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
  gap: ${theme.spacing.spacing2};
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
  width: 24px;
  height: 24px;
  margin: ${theme.spacing.spacing2} 0;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ $isSelected }) => ($isSelected ? theme.colors.textSecondary : theme.colors.textPrimary)};
  border-radius: 50%;
  opacity: ${({ $isHovered }) => $isHovered && 0.9};
  transition:
    border-color ${theme.transition.duration.duration100}ms ease-in-out,
    opacity ${theme.transition.duration.duration100}ms ease-in-out;

  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    transition: border-width ${theme.transition.duration.duration100}ms ease-in-out;
    border-color: ${theme.colors.textSecondary};
    border-style: solid;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: ${({ $isSelected }) => ($isSelected ? '7px' : 0)};
    opacity: inherit;
  }
`;

export { StyledLabel, StyledRadioGroup, StyledButton, StyledInput };
