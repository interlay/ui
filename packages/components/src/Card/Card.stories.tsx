import { Meta, StoryObj } from '@storybook/react';

import { H1, H2, P, Span, Flex } from '..';

import { Card, CardProps } from '.';

const children = (
  <>
    <H1 size='xl'>BTC Passive Income</H1>
    <Flex alignItems='center' direction='column'>
      <Span size='xs'>Earn up to</Span>
      <H2 size='lg'>0.3% APY</H2>
    </Flex>
    <P align='center' size='xs'>
      Generate passive income by offering your BTC to lending markets and benefit from automatic compounding rewards.
    </P>
  </>
);

export default {
  title: 'Content/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  args: { style: { maxWidth: 300 }, gap: 'md', alignItems: 'center', children }
} as Meta<typeof Card>;

export const Default: StoryObj<CardProps> = {};

export const Hoverable: StoryObj<CardProps> = {
  args: {
    isHoverable: true
  }
};

export const Pressable: StoryObj<CardProps> = {
  args: {
    isPressable: true
  }
};

export const Disabled: StoryObj<CardProps> = {
  args: {
    isPressable: true,
    isDisabled: true
  }
};
