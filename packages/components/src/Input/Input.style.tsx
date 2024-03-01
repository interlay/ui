import styled, { css } from 'styled-components';
import { Spacing, theme as oldTheme } from '@interlay/theme';
import { InputSizes } from '@interlay/themev2';

type BaseInputProps = {
  $size: InputSizes;
  $adornments: { bottom: boolean; left: boolean; right: boolean };
  $isDisabled: boolean;
  $hasError: boolean;
  $minHeight?: Spacing;
};

const StyledBaseInput = styled.input<BaseInputProps>`
  display: block;
  width: 100%;
  height: 100%;

  outline: none;
  font: inherit;
  letter-spacing: inherit;
  background: none;

  text-overflow: ellipsis;

  /* background-color: ${({ $isDisabled }) =>
    $isDisabled ? oldTheme.input.disabled.bg : oldTheme.input.background}; */
  overflow: hidden;

  border: ${(props) =>
    props.$isDisabled
      ? oldTheme.input.disabled.border
      : props.$hasError
        ? oldTheme.input.error.border
        : oldTheme.border.default};
  transition:
    border-color ${oldTheme.transition.duration.duration150}ms ease-in-out,
    box-shadow ${oldTheme.transition.duration.duration150}ms ease-in-out;

  min-height: ${({ $minHeight, as }) =>
    $minHeight ? oldTheme.spacing[$minHeight] : as === 'textarea' && oldTheme.spacing.spacing16};
  resize: ${({ as }) => as === 'textarea' && 'vertical'};

  ${({ theme, $size, $adornments }) => {
    const { paddingRight, paddingTop, paddingBottom, paddingLeft, fontSize, ...sizeCss } = theme.input.size[$size];

    // MEMO: adding `spacing6` is a hacky solution because
    // the `endAdornmentWidth` does not update width correctly
    // after fonts are loaded. Instead of falling back to a more
    // complex solution, an extra offset does the job of not allowing
    // the input overlap the adornment.
    //$adornments.bottom ? `calc(${fontSize} - ${theme.spacing('md')})` :
    return css`
      font-size: ${fontSize};
      padding-top: ${paddingTop};
      padding-left: ${$adornments.left ? theme.spacing('5xl') : paddingLeft};
      padding-right: ${$adornments.right ? theme.spacing('5xl') : paddingRight};
      padding-bottom: ${$adornments.bottom ? theme.spacing('3xl') : paddingBottom};

      ${sizeCss}
      ${theme.input.base}
    `;
  }}

  &:hover:not(:disabled):not(:focus) {
    border: ${(props) => !props.$isDisabled && !props.$hasError && oldTheme.border.focus};
  }

  &:focus {
    border: ${(props) => !props.$isDisabled && oldTheme.border.focus};
    box-shadow: ${(props) => !props.$isDisabled && oldTheme.boxShadow.focus};
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

type StyledAdornmentProps = {
  $size: InputSizes;
};

const StyledAdornment = styled.div<StyledAdornmentProps>`
  display: inline-flex;
  align-items: center;
  position: absolute;
  // to not allow adornment to take more than 50% of the input. We might want to reduce this in the future.
  max-width: 50%;
`;

const StyledAdornmentRight = styled(StyledAdornment)`
  top: 50%;
  right: ${({ theme }) => theme.spacing('md')};
  transform: translateY(-50%);
`;

const StyledAdornmentLeft = styled(StyledAdornment)`
  top: 50%;
  left: ${({ theme }) => theme.spacing('md')};
  transform: translateY(-50%);
`;

const StyledAdornmentBottom = styled(StyledAdornment)`
  left: ${({ theme, $size }) => theme.input.size[$size].paddingLeft};
  bottom: ${({ theme }) => theme.spacing('s')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// TODO: here
const StyledAddon = styled.div`
  display: flex;
  align-items: center;
  width: auto;
`;

const StyledLeftAddon = styled(StyledAddon)`
  border-top-right-radius: ${({ theme }) => theme.input.base.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.input.base.borderRadius};
`;

export {
  StyledAdornmentRight,
  StyledAdornmentLeft,
  StyledLeftAddon,
  StyledAdornmentBottom,
  BaseInputWrapper,
  StyledBaseInput,
  Wrapper
};
