import { render } from '@testing-library/react';

import { ProgressCircle } from '..';

describe('ProgressCircle', () => {
  it('should render correctly', () => {
    const wrapper = render(<ProgressCircle aria-label='progress' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
