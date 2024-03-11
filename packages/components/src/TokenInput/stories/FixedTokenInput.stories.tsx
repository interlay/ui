import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TokenInput, TokenInputProps } from '..';

export default {
  title: 'Forms/TokenInput',
  component: TokenInput,
  parameters: {
    layout: 'centered'
  },
  args: {
    ticker: 'ETH',
    logoUrl: 'https://ethereum-optimism.github.io/data/ETH/logo.svg',
    label: 'Amount'
  }
} as Meta<typeof TokenInput>;

export const Default: StoryObj<TokenInputProps> = {};

export const DefaultValue: StoryObj<TokenInputProps> = {
  args: {
    defaultValue: '10'
  }
};

const ControlledComponent = ({ value, valueUSD: valueUSDProp, ...args }: TokenInputProps) => {
  const [state, setState] = useState<string | undefined>(value?.toString());

  const valueUSD = valueUSDProp === undefined ? undefined : isNaN(state as any) ? 0 : Number(state) * 10;

  return <TokenInput {...args} value={state} valueUSD={valueUSD} onChange={(e) => setState(e.target.value)} />;
};

export const Controlled: StoryObj<TokenInputProps> = {
  args: {},
  render: ControlledComponent
};

export const WithValueUSD: StoryObj<TokenInputProps> = {
  args: {
    valueUSD: 0,
    balance: '10.901231231',
    humanBalance: '11'
  },
  render: ControlledComponent
};

export const WithBalance: StoryObj<TokenInputProps> = {
  args: {
    balance: '10'
  }
};

export const WithHumanBalance: StoryObj<TokenInputProps> = {
  args: {
    balance: '10.901231231',
    humanBalance: '11'
  }
};

export const WithCustomBalanceLabel: StoryObj<TokenInputProps> = {
  args: {
    balance: '10',
    balanceLabel: 'Available'
  }
};

export const WithDescription: StoryObj<TokenInputProps> = {
  args: {
    description: 'Please enter your amount'
  }
};

export const WithErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    errorMessage: 'Please enter your amount'
  }
};

export const WithMultipleErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    errorMessage: ['Please enter your amount', 'Please enter your amount']
  }
};

export const Disabled: StoryObj<TokenInputProps> = {
  args: {
    isDisabled: true
  }
};
