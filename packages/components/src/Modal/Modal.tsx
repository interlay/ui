import { forwardRef, useRef } from 'react';
import { useDOMRef } from '@interlay/hooks';
import { DialogSize } from '@interlay/theme';
import { CSSProperties } from 'styled-components';

import { DialogProps } from '../Dialog';
import { Overlay } from '../Overlay';

import { StyledDialog } from './Modal.style';
import { ModalWrapper, ModalWrapperProps } from './ModalWrapper';

const isInteractingWithToasts = (element: Element) => {
  const toastsContainer = document.querySelector('.Toastify');

  if (!toastsContainer) return false;

  return toastsContainer.contains(element);
};

type ModalSizes = DialogSize;

type Props = {
  container?: Element;
  placement?: 'top' | 'center';
  size?: ModalSizes;
  maxHeight?: CSSProperties['maxHeight'];
};

type InheritAttrs = Omit<ModalWrapperProps & DialogProps, keyof Props | 'wrapperRef'>;

type ModalProps = Props & InheritAttrs;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      isDismissable = true,
      placement = 'center',
      isKeyboardDismissDisabled,
      shouldCloseOnBlur,
      shouldCloseOnInteractOutside,
      container,
      isOpen,
      size = 'md',
      maxHeight,
      ...props
    },
    ref
  ): JSX.Element | null => {
    const domRef = useDOMRef(ref);
    const { onClose } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Does not allow the modal to close when clicking on toasts
    const handleShouldCloseOnInteractOutside = (element: Element) =>
      shouldCloseOnInteractOutside
        ? shouldCloseOnInteractOutside?.(element) && !isInteractingWithToasts(element)
        : !isInteractingWithToasts(element);

    return (
      <Overlay container={container} isOpen={isOpen} nodeRef={wrapperRef}>
        <ModalWrapper
          ref={domRef}
          isDismissable={isDismissable}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          isOpen={isOpen}
          maxHeight={maxHeight}
          placement={placement}
          shouldCloseOnBlur={shouldCloseOnBlur}
          shouldCloseOnInteractOutside={handleShouldCloseOnInteractOutside}
          size={size}
          wrapperRef={wrapperRef}
          onClose={onClose}
        >
          <StyledDialog $isOpen={isOpen} size={size} {...props}>
            {children}
          </StyledDialog>
        </ModalWrapper>
      </Overlay>
    );
  }
);

Modal.displayName = 'Modal';

export { Modal };
export type { ModalProps };
