import { AriaDialogProps, useDialog } from '@react-aria/dialog';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { forwardRef, ReactNode } from 'react';
import { XMark } from '@interlay/icons';
import { useDOMRef } from '@interlay/hooks';

import { CTASizes, Sizes } from '../../../core/theme/src';
import { ElementTypeProp } from '../utils/types';

import { StyledCloseCTA, StyledDialog } from './Dialog.style';
import { DialogContext } from './DialogContext';

const closeCTASizeMap: Record<Sizes, CTASizes> = { small: 'x-small', medium: 'small', large: 'small' };

type Props = {
  children?: ReactNode;
  onClose?: (e: PressEvent) => void;
  size?: Sizes;
};

type InheritAttrs = Omit<AriaDialogProps, keyof Props>;

type DialogProps = Props & InheritAttrs & ElementTypeProp;

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  ({ children, onClose, size = 'medium', elementType, role = 'dialog', ...props }, ref): JSX.Element => {
    const dialogRef = useDOMRef(ref);

    // Get props for the dialog and its title
    const { dialogProps, titleProps } = useDialog(props, dialogRef);

    const closeCTASize = closeCTASizeMap[size];

    return (
      <DialogContext.Provider value={{ titleProps, size }}>
        <StyledDialog ref={dialogRef} $size={size} as={elementType} {...mergeProps(props, dialogProps)} role={role}>
          {onClose && (
            <StyledCloseCTA aria-label='Dismiss' size={closeCTASize} variant='text' onPress={onClose}>
              <XMark />
            </StyledCloseCTA>
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
