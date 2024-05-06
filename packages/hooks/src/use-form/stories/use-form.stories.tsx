import { Meta, StoryObj } from '@storybook/react';
import { mergeProps } from '@react-aria/utils';

import { Select, Item, Flex, SelectProps, TokenInputProps, TokenInput } from '../../../../components/src';
import { useForm } from '../use-form';

export default {
  title: 'Hooks/useForm',
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof Select>;

const RenderSelect = (args: SelectProps) => {
  const form = useForm<{ coin: string }>({ initialValues: { coin: '' }, onSubmit: alert });

  return (
    <>
      <h1>Form object</h1>
      <p>Touched: {JSON.stringify(form.touched)}</p>
      <p>Dirty: {JSON.stringify(form.dirty)}</p>
      <p>Values: {JSON.stringify(form.values)}</p>
      <Select {...mergeProps(args, form.getSelectFieldProps('coin') as any)}>
        <Item key='BTC' textValue='BTC'>
          <Flex alignItems='center' gap='s'>
            BTC
          </Flex>
        </Item>
        <Item key='ETH' textValue='ETH'>
          <Flex alignItems='center' gap='s'>
            ETH
          </Flex>
        </Item>
        <Item key='USDT' textValue='USDT'>
          <Flex alignItems='center' gap='s'>
            USDT
          </Flex>
        </Item>
      </Select>
    </>
  );
};

export const SelectField: StoryObj<SelectProps> = {
  args: {
    type: 'modal',
    label: 'Coin',
    modalProps: { title: 'Select token' }
  },
  render: RenderSelect
};

const items = [
  {
    balance: 2,
    currency: { symbol: 'ETH', decimals: 18 },
    logoUrl: 'https://ethereum-optimism.github.io/data/ETH/logo.svg',
    balanceUSD: 900
  },
  {
    balance: 500,
    currency: { symbol: 'USDT', decimals: 6 },
    logoUrl: 'https://ethereum-optimism.github.io/data/USDT/logo.png',
    balanceUSD: 500
  },
  {
    balance: 100,
    currency: { symbol: 'USDC', decimals: 6 },
    logoUrl: 'https://ethereum-optimism.github.io/data/BridgedUSDC/logo.png',
    balanceUSD: 100
  }
];

const RenderTokenInput = (args: TokenInputProps) => {
  const form = useForm<{ amount: string; currency: '' }>({
    initialValues: { amount: '', currency: '' },
    onSubmit: alert
  });

  return (
    <>
      <h1>Form object</h1>
      <p>Touched: {JSON.stringify(form.touched)}</p>
      <p>Dirty: {JSON.stringify(form.dirty)}</p>
      <p>Values: {JSON.stringify(form.values)}</p>
      <TokenInput
        items={items}
        type='selectable'
        {...mergeProps(args, form.getSelectableTokenFieldProps({ amount: 'amount', currency: 'currency' }) as any)}
      />
    </>
  );
};

export const TokenInputField: StoryObj<TokenInputProps> = {
  args: {
    label: 'Amount'
  },
  render: RenderTokenInput
};
