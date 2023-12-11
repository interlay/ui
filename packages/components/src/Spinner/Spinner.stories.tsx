import { Meta, StoryObj } from '@storybook/react';

import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Loading/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: StoryObj<SpinnerProps> = {
  args: {
    thickness: 5
  }
};
