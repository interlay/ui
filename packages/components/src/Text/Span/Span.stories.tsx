import { Meta, StoryObj } from '@storybook/react';

import { SpanProps } from './Span';

import { Span } from '.';

export default {
  title: 'Text/Span',
  component: Span,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }
} as Meta<typeof Span>;

export const Default: StoryObj<SpanProps> = {};
