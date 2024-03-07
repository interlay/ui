import { InputSizes, TokenInputSize } from '@interlay/themev2';
import styled, { css } from 'styled-components';

import { Flex } from '../Flex';

type StyledUSDAdornmentProps = {
  $isDisabled?: boolean;
  $size: TokenInputSize;
};

type StyledBaseInputProps = {
  $adornmentBottom: boolean;
  $hasError: boolean;
  $size: InputSizes;
};

const StyledBaseInput = styled.input<StyledBaseInputProps>`
  display: block;
  width: 100%;
  height: 100%;

  outline: none;
  font: inherit;
  letter-spacing: inherit;
  background: none;

  text-overflow: ellipsis;

  ${({ theme, $size, $adornmentBottom, $hasError }) => {
    const { paddingRight, paddingTop, paddingBottom, paddingLeft, ...sizeCss } = theme.input.size[$size];

    // MEMO: adding `spacing6` is a hacky solution because
    // the `endAdornmentWidth` does not update width correctly
    // after fonts are loaded. Instead of falling back to a more
    // complex solution, an extra offset does the job of not allowing
    // the input overlap the adornment.
    return css`
      padding-top: ${paddingTop};
      padding-bottom: ${$adornmentBottom ? theme.spacing('3xl') : paddingBottom};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};

      ${sizeCss}
      ${theme.input.base}
      ${$hasError && theme.input.error.base}

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      &:hover:not(:disabled):not(:focus) {
        ${$hasError ? theme.input.error.hover : theme.input.hover}
      }

      &:focus:not(:disabled) {
        z-index: 1;
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
`;

const StyledUSDAdornment = styled.span<StyledUSDAdornmentProps>`
  display: block;
  white-space: nowrap;
  align-self: flex-start;
  overflow: hidden;
  max-width: -webkit-fill-available;
  text-overflow: ellipsis;
  ${({ theme, $size }) => theme.tokenInput.size[$size].addornment.bottom}
`;

type StyledAdornmentProps = {
  $size: InputSizes;
};

const StyledAdornment = styled.div<StyledAdornmentProps>`
  display: inline-flex;
  align-items: center;
  position: absolute;
  // to not allow adornment to take more than 50% of the input. We might want to reduce this in the future.
  left: ${({ theme, $size }) => theme.input.size[$size].paddingLeft};
  bottom: ${({ theme }) => theme.spacing('s')};
  overflow: hidden;
  max-width: ${({ theme, $size }) => `calc(100% - (2 *${theme.input.size[$size].paddingLeft}))`};
  z-index: 2;
`;

const StyledInputWrapper = styled(Flex)`
  position: relative;
`;

export { StyledBaseInput, StyledAdornment, StyledUSDAdornment, StyledInputWrapper };
