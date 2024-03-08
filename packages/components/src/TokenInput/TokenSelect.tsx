import { mergeProps } from '@react-aria/utils';

import { Span } from '../Text';
import { Flex } from '../Flex';
import { Item, ModalSelectProps, Select } from '../Select';

import { StyledTicker, StyledTokenImg, StyledTokenSelect } from './TokenInput.style';
import { TokenListItem } from './TokenListItem';

const Value = ({ data }: { data: TokenData }) => (
  <Flex alignItems='center' gap='xs' justifyContent='space-evenly'>
    <StyledTokenImg $size='md' alt={data.ticker} src={data.logoUrl} />
    <StyledTicker>{data.ticker}</StyledTicker>
  </Flex>
);

type TokenData = {
  ticker: string;
  logoUrl: string;
  balance: string | number;
  balanceUSD: number;
};

type TokenSelectProps = Omit<ModalSelectProps<TokenData>, 'children' | 'type'>;

const TokenSelect = ({ modalProps, value, ...props }: TokenSelectProps): JSX.Element => (
  <Select<TokenData>
    {...props}
    aria-label='select token'
    asSelectTrigger={StyledTokenSelect}
    maxWidth={value ? '6.75rem' : '7.5rem'}
    modalProps={mergeProps({ title: 'Select Token', listProps: { maxHeight: '32rem' } }, modalProps)}
    placeholder={
      <Span color='inherit' size='s'>
        Select token
      </Span>
    }
    renderValue={(item) => <Value data={item.value as TokenData} />}
    type='modal'
    value={value}
  >
    {(data: TokenData) => (
      <Item key={data.ticker} textValue={data.ticker}>
        <TokenListItem {...data} />
      </Item>
    )}
  </Select>
);

export { TokenSelect };
export type { TokenData, TokenSelectProps };
