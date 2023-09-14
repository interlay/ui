import { render } from '@testing-library/react';

import { Divider } from '..';

describe('Divider', () => {
  it('should render correctly', () => {
    const wrapper = render(<Divider />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
