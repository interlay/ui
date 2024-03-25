import styled, { css } from 'styled-components';
import { TokenInputSize } from '@interlay/theme';

import { Button } from '../Button';
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

const StyledBalance = styled(Flex)`
  max-height: 1.625rem;
  ${({ theme }) => theme.tokenInput.balance}
`;

const StyledMaxButton = styled(Button)`
  height: ${({ theme }) => theme.spacing('2xl')};
  padding: 0 ${({ theme }) => theme.spacing('s')};
  ${({ theme }) => ({ ...theme.typography('xs') })}
  font-weight: ${({ theme }) => theme.fontWeight('medium')};
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
  StyledBalance,
  StyledTokenAdornment,
  StyledTokenSelect,
  StyledTokenImg,
  StyledListItemUsd,
  StyledMaxButton
};
