import styled, { css } from 'styled-components';
import { ChevronDown } from '@interlay/icons';
import { InputSizes } from '@interlay/theme';

import { List } from '../List';
import { Span } from '../Text';

type StyledTriggerProps = {
  $isOpen?: boolean;
  $size: InputSizes;
  $isDisabled: boolean;
  $hasError: boolean;
  $hasValue: boolean;
};

type StyledTriggerValueProps = {
  $isDisabled?: boolean;
  $isSelected?: boolean;
};

const StyledTrigger = styled.button<StyledTriggerProps>`
  outline: none;
  letter-spacing: inherit;
  background: none;

  overflow: hidden;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;

  cursor: ${({ $isDisabled }) => !$isDisabled && 'pointer'};

  ${({ theme, $size, $hasError, $hasValue }) => {
    const { paddingRight, paddingTop, paddingBottom, paddingLeft, ...sizeCss } = theme.input.size[$size];
    const { color, ...baseCss } = theme.input.base;

    return css`
      padding-top: ${paddingTop};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      padding-right: ${paddingRight};

      color: ${$hasValue ? color : theme.input.placeholder.color};

      ${sizeCss}
      ${baseCss}
      ${$hasError && theme.input.error.base}


      &:hover:not(:disabled):not(:focus) {
        ${$hasError ? theme.input.error.hover : theme.input.hover}
      }

      &:focus:not(:disabled) {
        ${$hasError ? theme.input.error.focus : theme.input.focus}
      }

      &:disabled {
        ${theme.input.disabled}
      }
    `;
  }}
`;

const StyledTriggerValue = styled(Span)<StyledTriggerValueProps>`
  flex: 1;
  display: inline-flex;
  align-items: center;
  color: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
`;

const StyledList: any = styled(List)`
  ${({ theme }) => theme.tokenInput.list.base};

  > :last-child {
    margin-bottom: ${({ theme }) => theme.spacing('lg')};
  }
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: ${({ theme }) => theme.spacing('md')};
`;

export { StyledChevronDown, StyledList, StyledTrigger, StyledTriggerValue };
