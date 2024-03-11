import { Meta, StoryObj } from '@storybook/react';

import { UnstyledButton, UnstyledButtonProps } from '.';

export default {
  title: 'Buttons/UnstyledButton',
  component: UnstyledButton,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Button'
  }
} as Meta<typeof UnstyledButton>;

export const Default: StoryObj<UnstyledButtonProps> = {};
