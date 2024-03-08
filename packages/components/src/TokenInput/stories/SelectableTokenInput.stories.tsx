import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { mergeProps } from '@react-aria/utils';

import * as coins from '../../../../icons/coin/src';
import { TokenInput, TokenInputProps } from '..';

const items = [
  { balance: 2, ticker: 'ETH', logoUrl: 'https://ethereum-optimism.github.io/data/ETH/logo.svg', balanceUSD: 900 },
  { balance: 500, ticker: 'USDT', logoUrl: 'https://ethereum-optimism.github.io/data/USDT/logo.png', balanceUSD: 500 },
  {
    balance: 100,
    ticker: 'USDC',
    logoUrl: 'https://ethereum-optimism.github.io/data/BridgedUSDC/logo.png',
    balanceUSD: 100
  }
];

export default {
  title: 'Forms/TokenInput',
  component: TokenInput,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    ticker: { control: 'select', options: Object.keys(coins) }
  },
  args: {
    type: 'seleButtonble',
    label: 'Amount',
    selectProps: {
      items
    }
  }
} as Meta<typeof TokenInput>;

export const SeleButtonble: StoryObj<TokenInputProps> = {};

export const SeleButtonbleDefaultValue: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      defaultValue: 'BTC',
      items
    }
  }
};

const ControlledSelectComponent = (args: any) => {
  const [state, setState] = useState<string>();

  return (
    <TokenInput
      {...args}
      selectProps={mergeProps(args.selectProps, { value: state, onSelectionChange: setState })}
      type='seleButtonble'
    />
  );
};

export const SeleButtonbleControlledValue: StoryObj<TokenInputProps> = {
  render: ControlledSelectComponent
};

export const SeleButtonbleWithBalance: StoryObj<TokenInputProps> = {
  args: {
    balance: '10',
    valueUSD: 0,
    size: 's'
  }
};

export const SeleButtonbleDescription: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      items,
      description: 'Please select a token'
    }
  }
};

export const SeleButtonbleErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      items,
      errorMessage: 'Token field is required'
    }
  }
};
