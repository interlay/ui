import { render } from '@testing-library/react';

import { Stack } from '..';

describe('Stack', () => {
  it('should render correctly', () => {
    const wrapper = render(<Stack />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
