import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { mergeProps } from '@react-aria/utils';

import { TokenInput, TokenInputProps } from '..';

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

export default {
  title: 'Forms/TokenInput',
  component: TokenInput,
  parameters: {
    layout: 'centered'
  },
  args: {
    type: 'selectable',
    label: 'Amount',
    items
  }
} as Meta<typeof TokenInput>;

export const Selectable: StoryObj<TokenInputProps> = {};

export const SelectableDefaultValue: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      defaultValue: 'ETH'
    }
  }
};

const ControlledSelectComponent = (args: any) => {
  const [state, setState] = useState(items[0].currency);

  return (
    <TokenInput
      {...args}
      selectProps={mergeProps(args.selectProps, { value: state.symbol, onSelectionChange: setState })}
      type='selectable'
    />
  );
};

export const SelectableControlledValue: StoryObj<TokenInputProps> = {
  render: ControlledSelectComponent
};

export const SelectableWithBalance: StoryObj<TokenInputProps> = {
  args: {
    balance: '10',
    valueUSD: 0
  }
};

export const SelectableDescription: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      description: 'Please select a token'
    }
  }
};

export const SelectableInputErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    errorMessage: 'Token field is required'
  }
};

export const SelectableErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    selectProps: {
      errorMessage: 'Token field is required'
    }
  }
};
