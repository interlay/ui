import styled, { css } from 'styled-components';
import { theme as oldTheme } from '@interlay/theme';
import { Placement, Sizes, Spacing } from '@interlay/theme';

const getSpacing = (padding?: Spacing) => (padding ? oldTheme.spacing[padding] : undefined);

type BaseInputProps = {
  $size: Sizes;
  $adornments: { bottom: boolean; left: boolean; right: boolean };
  $padding?: { top: Spacing; bottom: Spacing; left: Spacing; right: Spacing };
  $isDisabled: boolean;
  $hasError: boolean;
  $endAdornmentWidth: number;
};

type AdornmentProps = {
  $position: Placement;
};

const StyledBaseInput = styled.input<BaseInputProps>`
  display: block;
  width: 100%;
  height: 100%;

  outline: none;
  font: inherit;
  letter-spacing: inherit;
  background: none;

  color: ${(props) => (props.disabled ? props.theme.input.disabled.color : props.theme.input.color)};
  font-size: ${({ $size, $adornments }) =>
    $adornments.bottom ? oldTheme.input.overflow.large.text : oldTheme.input[$size].text};
  line-height: ${(props) => props.theme.lineHeight.base};
  font-weight: ${({ theme, $size }) => theme.input.size[$size].weight};
  text-overflow: ellipsis;

  background-color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.input.disabled.background : theme.input.background};
  overflow: hidden;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, $isDisabled, $hasError }) =>
    $isDisabled
      ? theme.input.disabled.border.color
      : $hasError
      ? theme.input.error.border.color
      : theme.input.border.color};

  border-radius: ${({ theme }) => theme.rounded.lg};
  transition:
    border-color ${oldTheme.transition.duration.duration150}ms ease-in-out,
    box-shadow ${oldTheme.transition.duration.duration150}ms ease-in-out;

  padding-top: ${({ theme, $padding }) => getSpacing($padding?.top) || theme.spacing['2']};
  padding-left: ${({ $adornments, $padding }) =>
    getSpacing($padding?.left) || ($adornments.left ? oldTheme.input.paddingX.md : oldTheme.spacing.spacing2)};

  padding-right: ${({ theme, $adornments, $endAdornmentWidth, $padding }) => {
    if (!$adornments.right) return getSpacing($padding?.right) || theme.spacing[2];

    // MEMO: adding `spacing6` is a hacky solution because
    // the `endAdornmentWidth` does not update width correctly
    // after fonts are loaded. Instead of falling back to a more
    // complex solution, an extra offset does the job of not allowing
    // the input overlap the adornment.
    return `calc(${$endAdornmentWidth}px + ${theme.spacing[6]})`;
  }};
  padding-bottom: ${({ $adornments, $padding }) =>
    getSpacing($padding?.bottom) || ($adornments.bottom ? oldTheme.spacing.spacing6 : oldTheme.spacing.spacing2)};

  &:hover:not(:disabled):not(:focus) {
    border-color: ${({ theme, $hasError, $isDisabled }) =>
      !$isDisabled && !$hasError && theme.input.focus.border.color};
  }

  &:focus {
    ${({ theme, $isDisabled }) => css`
      border-color: ${!$isDisabled && theme.input.focus.border.color};
      box-shadow: ${!$isDisabled && theme.input.focus.boxShadow};
    `}
  }

  &::placeholder {
    color: ${(props) => (props.disabled ? oldTheme.input.disabled.color : oldTheme.colors.textTertiary)};
  }

  /* MEMO: inspired by https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const BaseInputWrapper = styled.div`
  position: relative;
  color: ${oldTheme.colors.textPrimary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

// TODO: simplify this (put into theme)
const Adornment = styled.div<AdornmentProps>`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: ${({ $position }) => ($position === 'left' || $position === 'right') && '50%'};
  left: ${({ $position }) => ($position === 'left' || $position === 'bottom') && oldTheme.spacing.spacing2};
  right: ${({ $position }) => $position === 'right' && oldTheme.spacing.spacing2};
  transform: ${({ $position }) => ($position === 'left' || $position === 'right') && 'translateY(-50%)'};
  bottom: ${({ $position }) => $position === 'bottom' && oldTheme.spacing.spacing1};
  // to not allow adornment to take more than 50% of the input. We might want to reduce this in the future.
  max-width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Adornment, BaseInputWrapper, StyledBaseInput, Wrapper };
