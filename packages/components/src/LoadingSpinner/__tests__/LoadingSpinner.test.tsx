import { render } from '@testing-library/react';

import { LoadingSpinner } from '..';

describe('LoadingSpinner', () => {
  it('should render correctly', () => {
    const wrapper = render(<LoadingSpinner />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
