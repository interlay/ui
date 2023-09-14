import { render } from '@testing-library/react';

import { HelperText } from '..';

describe('HelperText', () => {
  it('should render correctly', () => {
    const wrapper = render(<HelperText />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
