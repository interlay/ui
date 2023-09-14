import { render } from '@testing-library/react';

import { Flex } from '..';

describe('Flex', () => {
  it('should render correctly', () => {
    const wrapper = render(<Flex />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
