import { Meta, StoryObj } from '@storybook/react';

import { PProps } from './P';

import { P } from '.';

export default {
  title: 'Text/P',
  component: P,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
} as Meta<typeof P>;

export const Default: StoryObj<PProps> = {};
