import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Radio, RadioGroupProps, RadioGroup } from '.';

const Render = (args: RadioGroupProps) => (
  <RadioGroup {...args} label='Coin'>
    <Radio flex value='BTC'>
      BTC
    </Radio>
    <Radio flex value='ETH'>
      ETH
    </Radio>
  </RadioGroup>
);

export default {
  title: 'Forms/Radio',
  component: RadioGroup,
  parameters: {
    layout: 'centered'
  },
  render: Render
} as Meta<typeof RadioGroup>;

export const Default: StoryObj<RadioGroupProps> = {};

export const Controlled: StoryFn<RadioGroupProps> = (args) => {
  const [state, setState] = useState<string>('ETH');

  return <Render {...args} value={state} onValueChange={(value) => setState(value)} />;
};

export const DefaultValue: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: 'ETH'
  }
};

export const Horizontal: StoryObj<RadioGroupProps> = {
  args: {
    orientation: 'horizontal'
  }
};

export const SideLabel: StoryObj<RadioGroupProps> = {
  args: {
    labelPosition: 'side'
  }
};

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    isDisabled: true
  }
};

export const SingleDisable: StoryObj<RadioGroupProps> = {
  render: (args: RadioGroupProps) => (
    <RadioGroup {...args} label='Coin'>
      <Radio value='BTC'>BTC</Radio>
      <Radio isDisabled value='ETH'>
        ETH
      </Radio>
    </RadioGroup>
  )
};

export const WithErrorMessage: StoryObj<RadioGroupProps> = {
  args: {
    errorMessage: 'Please select a valid coin'
  }
};

export const WithDescription: StoryObj<RadioGroupProps> = {
  args: {
    description: 'Please select a valid coin'
  }
};
