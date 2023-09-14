import { render } from '@testing-library/react';

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
});
