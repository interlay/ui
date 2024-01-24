import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CTA } from '..';

import { Drawer, DrawerProps } from '.';

export default {
  title: 'Overlays/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof Drawer>;

const Render = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <CTA onClick={() => setOpen(true)}>Open</CTA>
      <Drawer isOpen={isOpen} onClose={() => setOpen(false)}>
        Drawer
      </Drawer>
    </>
  );
};

export const Default: StoryObj<DrawerProps> = {
  render: Render
};
