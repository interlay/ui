import { AriaDialogProps, useDialog } from '@react-aria/dialog';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { forwardRef, ReactNode } from 'react';
import { XMark } from '@interlay/icons';
import { useDOMRef } from '@interlay/hooks';
import { DialogSize } from '@interlay/themev2';

import { ElementTypeProp } from '../utils/types';

import { StyledCloseBtn, StyledDialog } from './Dialog.style';
import { DialogContext } from './DialogContext';

type Props = {
  children?: ReactNode;
  onClose?: (e: PressEvent) => void;
  size?: DialogSize;
};

type InheritAttrs = Omit<AriaDialogProps, keyof Props>;

type DialogProps = Props & InheritAttrs & ElementTypeProp;

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, onClose, size = 'md', elementType, role = 'dialog', ...props }, ref): JSX.Element => {
    const dialogRef = useDOMRef(ref);

    // Get props for the dialog and its title
    const { dialogProps, titleProps } = useDialog(props, dialogRef);

    return (
      <DialogContext.Provider value={{ titleProps, size }}>
        <StyledDialog ref={dialogRef} $size={size} as={elementType} {...mergeProps(props, dialogProps)} role={role}>
          {onClose && (
            <StyledCloseBtn isIconOnly aria-label='Dismiss' size='s' variant='ghost' onPress={onClose}>
              <XMark size='s' />
            </StyledCloseBtn>
          )}
          {children}
        </StyledDialog>
      </DialogContext.Provider>
    );
  }
);

Dialog.displayName = 'Dialog';

export { Dialog };
export type { DialogProps };
