import { Meta, StoryObj } from '@storybook/react';

import { H1Props } from './H1';

import { H1 } from '.';

export default {
  title: 'Text/H1',
  component: H1,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 1'
  }
} as Meta<typeof H1>;

export const Default: StoryObj<H1Props> = {};
