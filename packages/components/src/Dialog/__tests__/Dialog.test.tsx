import { render } from '@testing-library/react';

import { Dialog, DialogBody, DialogDivider, DialogFooter, DialogHeader } from '..';

describe('Dialog', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Dialog>
        <DialogHeader>title</DialogHeader>
        <DialogDivider />
        <DialogBody>body</DialogBody>
        <DialogFooter>footer</DialogFooter>
      </Dialog>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
