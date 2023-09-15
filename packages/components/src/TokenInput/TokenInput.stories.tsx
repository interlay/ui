import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { mergeProps } from '@react-aria/utils';

import * as coins from '../../../icons/coin/src';

import { TokenInput, TokenInputProps } from '.';

export default {
  title: 'Forms/TokenInput',
  component: TokenInput,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Amount'
  }
} as Meta<typeof TokenInput>;

const customCoinSelect = {
  argTypes: {
    ticker: { control: 'select', options: Object.keys(coins) }
  }
};

export const Default: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC'
  }
};

export const UnknownTicker: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'ABCD'
  }
};

export const MultiTokenTicker: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: { text: 'LP Token', icons: ['BTC', 'ETH', 'USDT'] }
  }
};

export const DefaultValue: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC',
    defaultValue: '10'
  }
};

const ControlledComponent = ({ value, valueUSD: valueUSDProp, ...args }: TokenInputProps) => {
  const [state, setState] = useState<string | undefined>(value?.toString());

  const valueUSD = valueUSDProp === undefined ? undefined : isNaN(state as any) ? 0 : Number(state) * 10;

  return <TokenInput {...args} value={state} valueUSD={valueUSD} onChange={(e) => setState(e.target.value)} />;
};

export const Controlled: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC'
  },
  render: ControlledComponent
};

export const WithValueUSD: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC',
    valueUSD: 0
  },
  render: ControlledComponent
};

export const WithBalance: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC',
    balance: '10'
  }
};

export const WithDescription: StoryObj<TokenInputProps> = {
  args: {
    ticker: 'BTC',
    description: 'Please enter your amount'
  }
};

export const WithErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    ticker: 'BTC',
    errorMessage: 'Please enter your amount'
  }
};

export const WithMultipleErrorMessage: StoryObj<TokenInputProps> = {
  args: {
    ticker: 'BTC',
    errorMessage: ['Please enter your amount', 'Please enter your amount']
  }
};

export const Disabled: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    ticker: 'BTC',
    isDisabled: true
  }
};

const commonSelectProps = {
  items: [
    { balance: 1, value: 'BTC', balanceUSD: '$10000' },
    { balance: 2, value: 'ETH', balanceUSD: '$900' },
    { balance: 500, value: 'USDT', balanceUSD: '$500' },
    { balance: 120, value: 'LP Token', tickers: ['BTC', 'ETH', 'USDT'], balanceUSD: '$230' }
  ]
};

export const WithSelect: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    selectProps: commonSelectProps
  }
};

export const WithSelectDefaultValue: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    selectProps: {
      ...commonSelectProps,
      value: 'BTC'
    }
  }
};

const ControlledSelectComponent = (args: TokenInputProps) => {
  const [state, setState] = useState<string>();

  return (
    <TokenInput {...args} selectProps={mergeProps(args.selectProps, { value: state, onSelectionChange: setState })} />
  );
};

export const WithControlledSelect: StoryObj<TokenInputProps> = {
  ...customCoinSelect,
  args: {
    selectProps: commonSelectProps
  },
  render: ControlledSelectComponent
};
