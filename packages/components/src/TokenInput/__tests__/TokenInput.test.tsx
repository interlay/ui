import { render } from '@testing-library/react';

import { TokenInput } from '..';

describe('TokenInput', () => {
  it('should render correctly', () => {
    const wrapper = render(<TokenInput label='label' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
