import { render } from '@interlay/test-utils';

import { CSSReset } from '..';

describe('CSSReset', () => {
  it('should render correctly', () => {
    const wrapper = render(<CSSReset />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
