import { render } from '@testing-library/react';

import { Card } from '..';

describe('Card', () => {
  it('should render correctly', () => {
    const wrapper = render(<Card>content</Card>);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
