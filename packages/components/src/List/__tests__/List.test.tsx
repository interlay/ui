import { render } from '@testing-library/react';

import { List, ListItem } from '..';

describe('List', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <List aria-label='list'>
        <ListItem>item</ListItem>
      </List>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
