import { render } from '@testing-library/react';

import { CTA } from '..';

describe('CTA', () => {
  it('should render correctly', () => {
    const wrapper = render(<CTA />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
