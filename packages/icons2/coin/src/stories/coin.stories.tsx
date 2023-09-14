import { Meta, StoryObj } from '@storybook/react';

import * as SVGS from '../svg/coin';
import { Icon, IconProps } from '../Icon';

export const Default: StoryObj<IconProps> = {
  args: {
    size: 'md'
  },
  render: (args) => (
    <>
      {Object.entries(SVGS).map(([key, Comp]) => (
        <div
          key={key}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 12,
            gap: 8,
            minWidth: 100,
            maxWidth: 100
          }}
        >
          <Comp {...args} />
          <span
            style={{
              fontWeight: '600',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '100%',
              textAlign: 'center'
            }}
          >
            {key}
          </span>
        </div>
      ))}
    </>
  )
};

export default {
  title: 'Icons/Coin',
  component: Icon,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12 }}>
        <Story />
      </div>
    )
  ]
} as Meta;
