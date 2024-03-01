import { Meta, StoryObj } from '@storybook/react';

import { H4Props } from './H4';

import { H4 } from '.';

export default {
  title: 'Text/H4',
  component: H4,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 4'
  }
} as Meta<typeof H4>;

export const Default: StoryObj<H4Props> = {};
