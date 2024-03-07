import styled from 'styled-components';
import { ChevronDown } from '@interlay/icons';
import { theme } from '@interlay/theme';
import { TokenInputSize } from '@interlay/themev2';

import { UnstyledButton } from '../UnstyledButton';
import { Flex } from '../Flex';
import { List } from '../List';
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
  ${({ theme, $size }) => theme.tokenInput.size[$size].addornment.token.base}
`;

const StyledTokenImg = styled.img<StyledTokenAdornmentProps>`
  ${({ theme, $size }) => theme.tokenInput.size[$size].addornment.token.img}
  border-radius: ${theme.rounded.full};
`;

const StyledTokenSelect = styled(StyledTrigger)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  margin-left: -1px;
  max-width: 150px;
  width: 100%;
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: ${theme.spacing.spacing1};
`;

const StyledListItemLabel = styled(Span)<StyledListItemSelectedLabelProps>`
  color: ${({ $isSelected }) =>
    $isSelected ? theme.tokenInput.list.item.selected.text : theme.tokenInput.list.item.default.text};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const StyledList = styled(List)`
  overflow: auto;
  padding: 0 ${theme.spacing.spacing4} ${theme.spacing.spacing2} ${theme.spacing.spacing4};
`;

const StyledListHeader = styled(Flex)`
  padding: ${theme.spacing.spacing2} ${theme.spacing.spacing4};
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
  StyledChevronDown,
  StyledList,
  StyledListHeader,
  StyledListItemLabel,
  StyledListTokenWrapper,
  StyledTicker,
  StyledBalanceButton,
  StyledTokenAdornment,
  StyledTokenSelect,
  StyledTokenImg
};
