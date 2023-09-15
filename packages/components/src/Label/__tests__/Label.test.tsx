import { render } from '@testing-library/react';

import { Label } from '..';

describe('Label', () => {
  it('should render correctly', () => {
    const wrapper = render(<Label />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
