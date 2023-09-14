import { render } from '@testing-library/react';

import { Field } from '..';

describe('Field', () => {
  it('should render correctly', () => {
    const wrapper = render(<Field />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
