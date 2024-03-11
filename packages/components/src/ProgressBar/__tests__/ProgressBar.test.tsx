import { testA11y, render } from '@interlay/test-utils';

import { ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should render correctly', () => {
    const wrapper = render(<ProgressBar aria-label='progress' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should pass a11y', async () => {
    await testA11y(<ProgressBar aria-label='progress' />);
  });
});
