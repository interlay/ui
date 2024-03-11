import { testA11y, render } from '@interlay/test-utils';

import { Spinner } from '..';

describe('Spinner', () => {
  it('should render correctly', () => {
    const wrapper = render(<Spinner aria-label='loading' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should pass a11y', async () => {
    await testA11y(<Spinner aria-label='loading' />);
  });
});
