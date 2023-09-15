import { CoinIcon } from '../CoinIcon';
import { Flex } from '../Flex';
import { Item, Select, SelectProps } from '../Select';
import { Span } from '../Text';

import { StyledTicker, StyledTokenSelect } from './TokenInput.style';
import { TokenListItem } from './TokenListItem';

const Value = ({ data }: { data: TokenData }) => (
  <Flex alignItems='center' gap='spacing1' justifyContent='space-evenly'>
    <CoinIcon size={data.tickers ? 'lg' : 'md'} ticker={data.value} tickers={data.tickers} />
    <StyledTicker>{data.value}</StyledTicker>
  </Flex>
);

type TokenData = {
  value: string;
  tickers?: string[];
  balance: string | number;
  balanceUSD: string;
};

type TokenSelectProps = Omit<SelectProps<'modal', TokenData>, 'children' | 'type'>;

const TokenSelect = ({ label: labelProp, 'aria-label': ariaLabelProp, ...props }: TokenSelectProps): JSX.Element => {
  // it is unlikely that labelProp is not a string, but we need to avoid any accessibility error
  const labelText = (typeof labelProp === 'string' && labelProp) || ariaLabelProp;
  const ariaLabel = labelText && `Choose token for ${labelText} field`;

  return (
    <Select<'modal', TokenData>
      {...props}
      aria-label={ariaLabel}
      asSelectTrigger={StyledTokenSelect}
      modalTitle='Select Token'
      placeholder={<Span>Select Token</Span>}
      renderValue={(item) => <Value data={item.value as TokenData} />}
      type='modal'
    >
      {(data: TokenData) => (
        <Item key={data.value} textValue={data.value}>
          <TokenListItem {...data} />
        </Item>
      )}
    </Select>
  );
};

export { TokenSelect };
export type { TokenData, TokenSelectProps };
