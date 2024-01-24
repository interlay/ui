import { AriaModalOverlayProps, AriaOverlayProps, useModalOverlay } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { OverlayTriggerState } from '@react-stately/overlays';
import { forwardRef, ReactNode, RefObject } from 'react';

import { Underlay } from '../Overlay/Underlay';

import { StyledModal } from './Drawer.style';

type Props = {
  children: ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  wrapperRef: RefObject<HTMLDivElement>;
};

type InheritAttrs = Omit<AriaModalOverlayProps & AriaOverlayProps, keyof Props>;

type DrawerWrapperProps = Props & InheritAttrs;

const DrawerWrapper = forwardRef<HTMLDivElement, DrawerWrapperProps>(
  (
    {
      children,
      isDismissable = true,
      onClose,
      isKeyboardDismissDisabled,
      isOpen,
      shouldCloseOnInteractOutside,
      shouldCloseOnBlur,
      wrapperRef,
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
        <StyledModal ref={ref} $isOpen={isOpen} {...mergeProps(modalProps, props)}>
          {children}
        </StyledModal>
      </div>
    );
  }
);

DrawerWrapper.displayName = 'DrawerWrapper';

export { DrawerWrapper };
export type { DrawerWrapperProps };
