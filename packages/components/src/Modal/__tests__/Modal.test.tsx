import { createRef } from 'react';
import { testA11y, render } from '@interlay/test-utils';

import { Modal, ModalBody, ModalFooter, ModalHeader } from '..';

describe('Modal', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Modal isOpen onClose={jest.fn}>
        <ModalHeader>title</ModalHeader>
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
        <ModalBody>body</ModalBody>
        <ModalFooter>footer</ModalFooter>
      </Modal>
    );
  });
});
