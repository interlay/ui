import { Meta, StoryObj } from '@storybook/react';

import { Alert, AlertProps } from '.';

export default {
  title: 'Status/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof Alert>;

export const Success: StoryObj<AlertProps> = {
  args: {
    status: 'success',
    children: 'Transaction was succesful!',
    onClose: undefined
  }
};

export const Info: StoryObj<AlertProps> = {
  args: {
    status: 'info',
    children: 'This is some useful information!',
    onClose: undefined
  }
};

export const Warning: StoryObj<AlertProps> = {
  args: {
    status: 'warning',
    children: 'This is a warning message...',
    onClose: undefined
  }
};

export const Error: StoryObj<AlertProps> = {
  args: {
    status: 'error',
    children: 'Error happened, please contact our support.',
    onClose: undefined
  }
};

export const Outlined: StoryObj<AlertProps> = {
  args: {
    variant: 'outlined',
    children: 'Transaction was succesful!',
    onClose: undefined
  }
};

export const Filled: StoryObj<AlertProps> = {
  args: {
    variant: 'filled',
    children: 'Transaction was succesful!',
    onClose: undefined
  }
};

export const WithTitle: StoryObj<AlertProps> = {
  args: {
    status: 'success',
    title: 'This is a successful alert',
    children: 'Transaction was succesful!',
    onClose: undefined
  }
};

export const Closable: StoryObj<AlertProps> = {
  args: {
    status: 'success',
    children: 'Transaction was succesful!',
    onClose: () => {}
  }
};
