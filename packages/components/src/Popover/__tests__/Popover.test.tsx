import { render } from '@testing-library/react';

import { Popover, PopoverBody, PopoverFooter, PopoverHeader } from '..';

describe('Popover', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Popover isOpen>
        <PopoverHeader>title</PopoverHeader>
        <PopoverBody>body</PopoverBody>
        <PopoverFooter>footer</PopoverFooter>
      </Popover>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
