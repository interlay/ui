import styled, { css } from 'styled-components';
import { TokenInputSize } from '@interlay/theme';

import { UnstyledButton } from '../UnstyledButton';
import { Flex } from '../Flex';
import { StyledTrigger } from '../Select/Select.style';
import { Span } from '../Text';

type StyledListItemSelectedLabelProps = {
  $isSelected: boolean;
};

type StyledTokenAdornmentProps = {
  $size: TokenInputSize;
};

const StyledTicker = styled.span`
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledTokenAdornment = styled(Flex)<StyledTokenAdornmentProps>`
  ${({ theme, $size }) => css`
    ${theme.tokenInput.addorment.token.base}
    ${theme.tokenInput.size[$size].addornment.token.base}
  `}
`;

const StyledTokenImg = styled.img<StyledTokenAdornmentProps>`
  ${({ theme, $size }) => theme.tokenInput.size[$size].addornment.token.img}
  border-radius: ${({ theme }) => theme.rounded('full')};
`;

const StyledTokenSelect = styled(StyledTrigger)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  margin-left: -1px;
`;

const StyledListItemLabel = styled(Span)<StyledListItemSelectedLabelProps>`
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme, $isSelected }) => {
    return css`
      ${theme.tokenInput.list.item.ticker}
      ${$isSelected && theme.tokenInput.list.item.selected.ticker}
    `;
  }}
`;

const StyledListItemUsd = styled(Span)<StyledListItemSelectedLabelProps>`
  text-overflow: ellipsis;
  overflow: hidden;

  ${({ theme, $isSelected }) => {
    return css`
      ${theme.tokenInput.list.item.usd}
      ${$isSelected && theme.tokenInput.list.item.selected.usd}
    `;
  }}
`;

const StyledListTokenWrapper = styled(Flex)`
  overflow: hidden;
`;

const StyledBalanceButton = styled(UnstyledButton)`
  ${({ theme }) => theme.tokenInput.balance}
`;

const StyledBalanceLabel = styled(Span)`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
`;

export {
  StyledBalanceLabel,
  StyledListItemLabel,
  StyledListTokenWrapper,
  StyledTicker,
  StyledBalanceButton,
  StyledTokenAdornment,
  StyledTokenSelect,
  StyledTokenImg,
  StyledListItemUsd
};
