import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InformationCircle } from '@interlay/icons';

import { Flex } from '..';

import { TextArea, TextAreaProps } from '.';

export default {
  title: 'Forms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  },
  args: {
    label: 'Address'
  }
} as Meta<typeof TextArea>;

export const Default: StoryObj<TextAreaProps> = {};

export const Controlled: StoryFn<TextAreaProps> = (args) => {
  const [state, setState] = useState<string>();

  return <TextArea {...args} value={state} onChange={(e) => setState(e.target.value)} />;
};

export const DefaultValue: StoryObj<TextAreaProps> = {
  args: {
    defaultValue: 'Sesame Street'
  }
};

export const WithDescription: StoryObj<TextAreaProps> = {
  args: {
    description: 'Please enter your street address'
  }
};

export const WithErrorMessage: StoryObj<TextAreaProps> = {
  args: {
    errorMessage: 'Please enter your street address'
  }
};

export const WithMultipleErrorMessage: StoryObj<TextAreaProps> = {
  args: {
    errorMessage: ['Please enter your street address', 'Please enter your street address']
  }
};

export const SideLabel: StoryObj<TextAreaProps> = {
  args: {
    labelPosition: 'side'
  }
};

export const MaxWidth: StoryObj<TextAreaProps> = {
  args: {
    maxWidth: 'spacing28'
  }
};

export const MinHeight: StoryObj<TextAreaProps> = {
  args: {
    minHeight: 'spacing28'
  }
};

export const Adornments: StoryFn<TextAreaProps> = (args) => (
  <Flex direction='column'>
    <TextArea {...args} label='Start Adornment' startAdornment={<InformationCircle />} />
    <TextArea {...args} endAdornment={<InformationCircle />} label='End Adornment' />
    <TextArea {...args} label='Bottom Adornment' />
  </Flex>
);

export const Sizes: StoryFn<TextAreaProps> = (args) => (
  <Flex direction='column'>
    <TextArea {...args} label='Small' size='small' />
    <TextArea {...args} label='Medium' />
    <TextArea {...args} label='Large' size='large' />
  </Flex>
);

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    isDisabled: true
  }
};
