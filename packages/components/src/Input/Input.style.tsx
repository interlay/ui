import { InputSizes, Spacing } from '@interlay/theme';
import styled, { css } from 'styled-components';

type BaseInputProps = {
  $size: InputSizes;
  $adornments: { left: boolean; right: boolean };
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

  // Properties for textarea
  min-height: ${({ $minHeight, theme, as }) =>
    $minHeight ? theme.spacing($minHeight) : as === 'textarea' && theme.spacing('7xl')};
  resize: ${({ as }) => as === 'textarea' && 'vertical'};

  ${({ theme, $size, $adornments, $hasError }) => {
    const { paddingRight, paddingTop, paddingBottom, paddingLeft, ...sizeCss } = theme.input.size[$size];

    // MEMO: adding `spacing6` is a hacky solution because
    // the `endAdornmentWidth` does not update width correctly
    // after fonts are loaded. Instead of falling back to a more
    // complex solution, an extra offset does the job of not allowing
    // the input overlap the adornment.
    return css`
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      padding-left: ${$adornments.left ? theme.spacing('5xl') : paddingLeft};
      padding-right: ${$adornments.right ? theme.spacing('5xl') : paddingRight};

      ${sizeCss}
      ${theme.input.base}
      ${$hasError && theme.input.error.base}


      &:hover:not(:disabled):not(:focus) {
        ${$hasError ? theme.input.error.hover : theme.input.hover}
      }

      &:focus:not(:disabled) {
        ${$hasError ? theme.input.error.focus : theme.input.focus}
      }

      &::placeholder {
        ${theme.input.placeholder}
      }

      &:disabled {
        ${theme.input.disabled}
      }
    `;
  }}

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

const StyledWrapper = styled.div<BaseInputProps>`
  position: relative;
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
  ${({ theme }) => theme.input.adornment};
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledAdornmentLeft, StyledAdornmentRight, StyledBaseInput, StyledWrapper, Wrapper };
