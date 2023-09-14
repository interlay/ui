import { render } from '@testing-library/react';

import { Alert } from '..';

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = render(<Alert />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
