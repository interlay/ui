import { mergeProps } from '@react-aria/utils';

import { Span } from '../Text';
import { Flex } from '../Flex';
import { Item, ModalSelectProps, Select } from '../Select';

import { StyledTicker, StyledTokenImg, StyledTokenSelect } from './TokenInput.style';
import { TokenListItem } from './TokenListItem';

const Value = ({ data }: { data: TokenData }) => (
  <Flex alignItems='center' gap='xs' justifyContent='space-evenly'>
    <StyledTokenImg $size='md' alt={data.currency.symbol} src={data.logoUrl} />
    <StyledTicker>{data.currency.symbol}</StyledTicker>
  </Flex>
);

type TokenData = {
  currency: any;
  logoUrl: string;
  balance: string | number;
  balanceUSD: number;
};

type TokenSelectProps = Omit<ModalSelectProps<TokenData>, 'children' | 'type'>;

// TODO: value control from currency object
const TokenSelect = ({ modalProps, size, ...props }: TokenSelectProps): JSX.Element => {
  return (
    <Select<TokenData>
      {...props}
      aria-label='select token'
      asSelectTrigger={StyledTokenSelect}
      modalProps={mergeProps({ title: 'Select Token', listProps: { maxHeight: '32rem' } }, modalProps)}
      placeholder={
        <Span color='inherit' size='s'>
          Select token
        </Span>
      }
      renderValue={(item) => <Value data={item.value as TokenData} />}
      size={size === 'lg' ? 'md' : size}
      type='modal'
    >
      {(data: TokenData) => (
        <Item key={data.currency.symbol} textValue={data.currency.symbol}>
          <TokenListItem {...data} />
        </Item>
      )}
    </Select>
  );
};

export { TokenSelect };
export type { TokenData, TokenSelectProps };
