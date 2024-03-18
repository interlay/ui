import { Meta, StoryObj } from '@storybook/react';
import { ChevronRight } from '@interlay/icons';

import { Button } from '../Button';

import { ColumnProps, RowProps, Table, TableProps } from '.';

const action = (
  <Button onPress={() => alert('Pressed')}>
    <ChevronRight size='s' />
  </Button>
);
const columns: ColumnProps[] = [
  { name: 'Coin', id: 'coin' },
  { name: 'Price', id: 'price' },
  { name: 'Action', id: 'action', hideHeader: true }
];

const rows: RowProps[] = [
  {
    id: 1,
    coin: 'BTC',
    price: '$22,996.31',
    action
  },
  { id: 2, coin: 'DOT', price: '$8.13', action },
  { id: 3, coin: 'KINT', price: '$2.80', action },
  { id: 5, coin: 'kBTC', price: '$23,074.29', action },
  { id: 6, coin: 'kBTC', price: '$23,074.29', action },
  { id: 7, coin: 'kBTC', price: '$23,074.29', action },
  { id: 8, coin: 'kBTC', price: '$23,074.29', action },
  { id: 9, coin: 'kBTC', price: '$23,074.29', action },
  { id: 10, coin: 'kBTC', price: '$23,074.29', action },
  { id: 11, coin: 'kBTC', price: '$23,074.29', action },
  { id: 12, coin: 'kBTC', price: '$23,074.29', action },
  { id: 13, coin: 'kBTC', price: '$23,074.29', action },
  { id: 14, coin: 'kBTC', price: '$23,074.29', action }
];

export default {
  title: 'Collections/Table',
  component: Table,
  parameters: {
    layout: 'centered'
  },
  args: {
    style: { minWidth: 300 }
  },
  render: (args) => <Table {...args} aria-label='story table' columns={columns} rows={rows} />
} as Meta<typeof Table>;

export const Default: StoryObj<TableProps> = {};

export const RowAction: StoryObj<TableProps> = {
  args: {
    onRowAction: (key) => alert(`Row ${key} selected`)
  }
};

export const Selection: StoryObj<TableProps> = {
  args: {
    selectionMode: 'single',
    selectedKeys: [1]
  }
};

export const StickyHeader: StoryObj<TableProps> = {
  args: {
    isStickyHeader: true,
    style: {
      maxHeight: 300
    }
  }
};
