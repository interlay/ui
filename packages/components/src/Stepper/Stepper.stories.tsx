import { Meta, StoryObj } from '@storybook/react';

import { Stepper, StepperProps } from './Stepper';

import { StepperItem } from '.';

const Render = (args: any) => (
  <Stepper aria-label='Example Stepper' {...args}>
    <StepperItem textValue='1' />
    <StepperItem textValue='2' />
    <StepperItem textValue='3' />
  </Stepper>
);

export default {
  title: 'Status/Stepper',
  component: Stepper,
  render: Render
} as Meta<typeof Stepper>;

export const Default: StoryObj<StepperProps> = {
  args: {
    index: 1
  }
};
