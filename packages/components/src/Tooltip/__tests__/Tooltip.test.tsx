import { render } from '@testing-library/react';

import { Tooltip } from '..';

describe('Tooltip', () => {
  it('should render correctly', () => {
    const wrapper = render(<Tooltip isOpen>text</Tooltip>);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
