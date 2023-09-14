import { render } from '@testing-library/react';

import { H1 } from '..';

describe('Text', () => {
  it('should render correctly', () => {
    const wrapper = render(<H1 />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
