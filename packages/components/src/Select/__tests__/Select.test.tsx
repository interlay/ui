import { render } from '@testing-library/react';

import { Select, Item } from '..';

describe('Select', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Select label='label'>
        <Item key='1'>item 1</Item>
      </Select>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
