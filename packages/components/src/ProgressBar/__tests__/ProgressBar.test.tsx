import { render } from '@testing-library/react';

import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    const wrapper = render(<ProgressBar aria-label='progress' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
