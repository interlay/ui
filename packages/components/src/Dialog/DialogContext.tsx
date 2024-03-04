import { DOMAttributes } from '@react-types/shared';
import React from 'react';
import { DialogSize } from '@interlay/themev2';

interface DialogConfig {
  titleProps?: DOMAttributes;
  size: DialogSize;
}

const defaultContext: DialogConfig = { size: 'md' };

const DialogContext = React.createContext<DialogConfig>(defaultContext);

const useDialogContext = (): DialogConfig => React.useContext<DialogConfig>(DialogContext);

export { DialogContext, useDialogContext };
export type { DialogConfig };
