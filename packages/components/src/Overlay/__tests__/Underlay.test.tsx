import { render } from '@testing-library/react';

import { Underlay } from '..';

describe('Underlay', () => {
  it('should render correctly', () => {
    const wrapper = render(<Underlay isOpen />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
