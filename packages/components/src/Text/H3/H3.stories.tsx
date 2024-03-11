import { Meta, StoryObj } from '@storybook/react';

import { H3Props } from './H3';

import { H3 } from '.';

export default {
  title: 'Text/H3',
  component: H3,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 3'
  }
} as Meta<typeof H3>;

export const Default: StoryObj<H3Props> = {};
