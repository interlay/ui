import { AriaModalOverlayProps, AriaOverlayProps, useModalOverlay } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { OverlayTriggerState } from '@react-stately/overlays';
import { forwardRef, ReactNode, RefObject } from 'react';
import { DialogSize } from '@interlay/themev2';

import { Underlay } from '../Overlay/Underlay';

import { StyledModal, StyledWrapper } from './Modal.style';

type Props = {
  children: ReactNode;
  placement?: 'top' | 'center';
  isOpen?: boolean;
  onClose: () => void;
  wrapperRef: RefObject<HTMLDivElement>;
  size: DialogSize;
};

type InheritAttrs = Omit<AriaModalOverlayProps & AriaOverlayProps, keyof Props>;

type ModalWrapperProps = Props & InheritAttrs;

const ModalWrapper = forwardRef<HTMLDivElement, ModalWrapperProps>(
  (
    {
      children,
      isDismissable = true,
      placement = 'center',
      onClose,
      isKeyboardDismissDisabled,
      isOpen,
      shouldCloseOnInteractOutside,
      shouldCloseOnBlur,
      wrapperRef,
      size,
      ...props
    },
    ref
  ): JSX.Element | null => {
    // Handle interacting outside the dialog and pressing
    // the Escape key to close the modal.
    const { modalProps, underlayProps } = useModalOverlay(
      {
        isDismissable,
        isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside,
        shouldCloseOnBlur,
        ...props
      } as AriaOverlayProps,
      // These are the only props needed
      { isOpen: !!isOpen, close: onClose } as OverlayTriggerState,
      ref as RefObject<HTMLElement>
    );

    return (
      <div ref={wrapperRef}>
        <Underlay {...underlayProps} isOpen={!!isOpen} />
        <StyledWrapper $placement={placement}>
          <StyledModal ref={ref} $isOpen={isOpen} $size={size} {...mergeProps(modalProps, props)}>
            {children}
          </StyledModal>
        </StyledWrapper>
      </div>
    );
  }
);

ModalWrapper.displayName = 'ModalWrapper';

export { ModalWrapper };
export type { ModalWrapperProps };
