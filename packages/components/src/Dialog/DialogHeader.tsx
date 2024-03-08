import { mergeProps } from '@react-aria/utils';
import { ElementType } from 'react';

import { TextProps } from '../Text';

import { StyledDialogHeader } from './Dialog.style';
import { useDialogContext } from './DialogContext';

type Props = {
  elementType?: ElementType;
};

type InheritAttrs = Omit<TextProps, keyof Props>;

type DialogHeaderProps = Props & InheritAttrs;

const DialogHeader = ({ elementType, children, align = 'start', ...props }: DialogHeaderProps): JSX.Element => {
  const { titleProps } = useDialogContext();

  return (
    <StyledDialogHeader align={align} as={elementType} size='xl' {...mergeProps(titleProps || {}, props)}>
      {children}
    </StyledDialogHeader>
  );
};

export { DialogHeader };
export type { DialogHeaderProps };
