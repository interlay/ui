import { Meta, StoryObj } from '@storybook/react';

import { H2Props } from './H2';

import { H2 } from '.';

export default {
  title: 'Text/H2',
  component: H2,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 2'
  }
} as Meta<typeof H2>;

export const Default: StoryObj<H2Props> = {};
