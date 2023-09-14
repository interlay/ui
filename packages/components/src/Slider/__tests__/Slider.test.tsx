import { render } from '@testing-library/react';

import { Slider } from '..';

describe('Slider', () => {
  it('should render correctly', () => {
    const wrapper = render(<Slider label='label' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
