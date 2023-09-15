import { render } from '@testing-library/react';

import { Input } from '..';

describe('Input', () => {
  it('should render correctly', () => {
    const wrapper = render(<Input label='label' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
