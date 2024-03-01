import { Meta, StoryObj } from '@storybook/react';

import { StrongProps } from './Strong';

import { Strong } from '.';

export default {
  title: 'Text/Strong',
  component: Strong,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
} as Meta<typeof Strong>;

export const Default: StoryObj<StrongProps> = {};
