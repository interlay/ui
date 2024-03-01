import { Meta, StoryObj } from '@storybook/react';

import { EmProps } from './Em';

import { Em } from '.';

export default {
  title: 'Text/Em',
  component: Em,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
} as Meta<typeof Em>;

export const Default: StoryObj<EmProps> = {};
