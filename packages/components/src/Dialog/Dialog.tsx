import { AriaDialogProps, useDialog } from '@react-aria/dialog';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { forwardRef, ReactNode } from 'react';
import { XMark } from '@interlay/icons';
import { useDOMRef } from '@interlay/hooks';
import { ButtonSizes, DialogSize } from '@interlay/themev2';

import { ElementTypeProp } from '../utils/types';
import { Button } from '../Button';

import { StyledDialog } from './Dialog.style';
import { DialogContext } from './DialogContext';

const closeBtnSizeMap: Record<DialogSize, ButtonSizes> = { s: 's', md: 'md', lg: 'md' };

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

    const closeCTASize = closeBtnSizeMap[size];

    return (
      <DialogContext.Provider value={{ titleProps, size }}>
        <StyledDialog ref={dialogRef} $size={size} as={elementType} {...mergeProps(props, dialogProps)} role={role}>
          {onClose && (
            <Button aria-label='Dismiss' size={closeCTASize} variant='ghost' onPress={onClose}>
              <XMark />
            </Button>
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
