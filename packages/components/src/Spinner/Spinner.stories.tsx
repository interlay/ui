import { Meta, StoryObj } from '@storybook/react';
import { SpinnerSizes } from '@interlay/theme';

import { Spinner, SpinnerProps } from '.';

export default {
  title: 'Loading/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'radio', options: ['xs', 's', 'md', 'lg', 'xl', '2xl', '3xl'] as SpinnerSizes[] }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    )
  ]
} as Meta;

export const Default: StoryObj<SpinnerProps> = { args: {} };
