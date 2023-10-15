import { render, screen, waitFor } from '@testing-library/react';
import { createRef } from 'react';
import { testA11y } from '@interlay/test-utils';
import userEvent from '@testing-library/user-event';

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

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Dialog ref={ref}>
        <DialogHeader>title</DialogHeader>
        <DialogDivider />
        <DialogBody>body</DialogBody>
        <DialogFooter>footer</DialogFooter>
      </Dialog>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Dialog>
        <DialogHeader>title</DialogHeader>
        <DialogDivider />
        <DialogBody>body</DialogBody>
        <DialogFooter>footer</DialogFooter>
      </Dialog>
    );
  });

  it('should dialog sections', async () => {
    render(
      <Dialog>
        <DialogHeader>title</DialogHeader>
        <DialogDivider />
        <DialogBody>body</DialogBody>
        <DialogFooter>footer</DialogFooter>
      </Dialog>
    );

    expect(screen.getByRole('heading', { level: 3, name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/body/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it('should emit onClose using close btn', async () => {
    const handleClose = jest.fn();

    render(
      <Dialog onClose={handleClose}>
        <DialogHeader>title</DialogHeader>
        <DialogDivider />
        <DialogBody>body</DialogBody>
        <DialogFooter>footer</DialogFooter>
      </Dialog>
    );

    userEvent.click(screen.getByRole('button', { name: /dismiss/i }));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
