import { render } from '@testing-library/react';

import { Meter } from '..';

describe('Meter', () => {
  it('should render correctly', () => {
    const wrapper = render(<Meter />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
