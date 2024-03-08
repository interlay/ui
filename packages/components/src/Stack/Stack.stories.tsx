import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { P } from '../Text';

import { Stack, StackProps } from '.';

export default {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'centered'
  },
  render: (args) => (
    <Stack {...args}>
      <P>Stack children</P> <P>Stack children</P> <Button>Button</Button>
    </Stack>
  )
} as Meta<typeof Stack>;

export const Default: StoryObj<StackProps> = {};
