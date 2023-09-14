import { render } from '@testing-library/react';

import { NumberInput } from '..';

describe('NumberInput', () => {
  it('should render correctly', () => {
    const wrapper = render(<NumberInput label='label' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
