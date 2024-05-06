import { useCurrencyFormatter } from '@interlay/hooks';

import { Flex } from '../Flex';
import { useSelectModalContext } from '../Select/SelectModalContext';

import { StyledListItemLabel, StyledListItemUsd, StyledListTokenWrapper, StyledTokenImg } from './TokenInput.style';
import { TokenData } from './TokenSelect';

type TokenListItemProps = { isDisabled?: boolean } & TokenData;

const TokenListItem = ({ balance, balanceUSD, currency, logoUrl, isDisabled }: TokenListItemProps): JSX.Element => {
  const isSelected = useSelectModalContext().selectedItem?.value.currency.symbol === currency.symbol && !isDisabled;
  const format = useCurrencyFormatter();

  return (
    <>
      <StyledListTokenWrapper alignItems='center' flex='1' gap='s'>
        <StyledTokenImg $size='lg' alt={currency.symbol} src={logoUrl} />
        <StyledListItemLabel $isSelected={isSelected}>{currency.symbol}</StyledListItemLabel>
      </StyledListTokenWrapper>
      <Flex alignItems='flex-end' direction='column' flex='0' gap='xs'>
        <StyledListItemLabel $isSelected={isSelected}>{balance}</StyledListItemLabel>
        <StyledListItemUsd $isSelected={isSelected} color='light'>
          {format(balanceUSD)}
        </StyledListItemUsd>
      </Flex>
    </>
  );
};

export { TokenListItem };
export type { TokenListItemProps };
