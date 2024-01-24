import { useDOMRef } from '@interlay/hooks';
import { forwardRef, useRef } from 'react';

import { DialogProps } from '../Dialog';
import { Overlay } from '../Overlay';
import { ElementTypeProp } from '../utils/types';

import { StyledDialog } from './Drawer.style';
import { DrawerWrapper, DrawerWrapperProps } from './DrawerWrapper';

type Props = {
  container?: Element;
};

type InheritAttrs = Omit<DrawerWrapperProps & DialogProps, keyof Props | 'size' | 'wrapperRef'>;

type DrawerProps = Props & InheritAttrs & ElementTypeProp;

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      isDismissable = true,
      isKeyboardDismissDisabled,
      shouldCloseOnBlur,
      container,
      isOpen,
      elementType = 'div',
      ...props
    },
    ref
  ): JSX.Element | null => {
    const domRef = useDOMRef(ref);
    const { onClose } = props;
    const wrapperRef = useRef<HTMLDivElement>(null);

    return (
      <Overlay container={container} isOpen={isOpen} nodeRef={wrapperRef}>
        <DrawerWrapper
          ref={domRef}
          isDismissable={isDismissable}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          isOpen={isOpen}
          shouldCloseOnBlur={shouldCloseOnBlur}
          wrapperRef={wrapperRef}
          onClose={onClose}
        >
          <StyledDialog $isOpen={isOpen} {...props} elementType={elementType} role={undefined} onClose={undefined}>
            {children}
          </StyledDialog>
        </DrawerWrapper>
      </Overlay>
    );
  }
);

Drawer.displayName = 'Drawer';

export { Drawer };
export type { DrawerProps };
