import { Meta, StoryObj } from '@storybook/react';

import { H6Props } from './H6';

import { H6 } from '.';

export default {
  title: 'Text/H6',
  component: H6,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 6'
  }
} as Meta<typeof H6>;

export const Default: StoryObj<H6Props> = {};
