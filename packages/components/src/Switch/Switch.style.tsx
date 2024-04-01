import styled, { css } from 'styled-components';
import { SwitchSize } from '@interlay/theme';

import { Span } from '../Text';

type StyledWrapperProps = {
  $reverse?: boolean;
};

const StyledWrapper = styled.label<StyledWrapperProps>`
  display: inline-flex;
  flex-direction: ${({ $reverse }) => $reverse && 'row-reverse'};
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacing('md')};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0.0001;
  z-index: 1;
  cursor: pointer;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

type StyledSwitchProps = {
  $isFocusVisible: boolean;
  $isChecked?: boolean;
  $size: SwitchSize;
};

const StyledSwitch = styled.span<StyledSwitchProps>`
  flex-grow: 0;
  flex-shrink: 0;
  display: inline-block;
  position: relative;
  outline-offset: 2px;

  ${({ theme, $isChecked, $isFocusVisible, $size }) => {
    const { base, checked, indicator, focusVisible } = theme.switch;
    const sizeStyle = theme.switch.size[$size];

    return css`
      ${base}
      ${$isChecked && checked}
      ${sizeStyle.base}
      outline: ${$isFocusVisible && focusVisible};

      &::before {
        content: '';
        box-sizing: border-box;
        display: block;
        position: absolute;
        ${indicator}
        ${sizeStyle.indicator}
        ${$isChecked && sizeStyle.checked.indicator}
      }
    `;
  }}
`;

const StyledLabel = styled(Span)`
  text-align: left;
`;

export { StyledInput, StyledLabel, StyledSwitch, StyledWrapper };
