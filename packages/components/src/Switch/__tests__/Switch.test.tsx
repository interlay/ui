import { render } from '@testing-library/react';

import { Switch } from '..';

describe('Switch', () => {
  it('should render correctly', () => {
    const wrapper = render(<Switch>switch</Switch>);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
