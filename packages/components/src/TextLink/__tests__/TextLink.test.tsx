import { render } from '@testing-library/react';

import { TextLink } from '..';

describe('TextLink', () => {
  it('should render correctly', () => {
    const wrapper = render(<TextLink />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
