import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { createRef, useState } from 'react';
import { testA11y } from '@interlay/test-utils';
import userEvent from '@testing-library/user-event';

import { Modal, ModalBody, ModalDivider, ModalFooter, ModalHeader } from '..';

describe('Modal', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Modal isOpen onClose={jest.fn}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Modal ref={ref} isOpen onClose={jest.fn}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Modal isOpen onClose={jest.fn}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );
  });

  it('should control open state', async () => {
    const Component = () => {
      const [isOpen, setOpen] = useState(false);

      return (
        <>
          <button onClick={() => setOpen(true)}>trigger</button>
          <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
            <ModalHeader>title</ModalHeader>
            <ModalDivider />
            <ModalBody>body</ModalBody>
            <ModalFooter>footer</ModalFooter>
          </Modal>
        </>
      );
    };

    render(<Component />);

    userEvent.click(screen.getByRole('button', { name: /trigger/i }));

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /title/i }));
    });

    userEvent.click(screen.getByRole('button', { name: /dismiss/i }));

    await waitForElementToBeRemoved(screen.getByRole('dialog', { name: /title/i }));
  });

  it('should modal sections', async () => {
    render(
      <Modal isOpen onClose={jest.fn}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    expect(screen.getByRole('heading', { level: 3, name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/body/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });

  it('should emit onClose using close btn', async () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen onClose={handleClose}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    userEvent.click(screen.getByRole('button', { name: /dismiss/i }));

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should emit onClose using ESC key', async () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen onClose={handleClose}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should emit onClose by clicking modal wrapper', async () => {
    const handleClose = jest.fn();

    render(
      <Modal isOpen onClose={handleClose}>
        <ModalHeader>title</ModalHeader>
        <ModalDivider />
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );

    userEvent.click(screen.getByRole('dialog', { name: /title/i }).parentElement?.parentElement as any);

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});
