import { Meta, StoryObj } from '@storybook/react';

import { H5Props } from './H5';

import { H5 } from '.';

export default {
  title: 'Text/H5',
  component: H5,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Heading 5'
  }
} as Meta<typeof H5>;

export const Default: StoryObj<H5Props> = {};
