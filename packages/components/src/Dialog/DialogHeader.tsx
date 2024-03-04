import { mergeProps } from '@react-aria/utils';
import { ElementType } from 'react';
import { DialogSize, Typography } from '@interlay/themev2';

import { TextProps } from '../Text';

import { StyledDialogHeader } from './Dialog.style';
import { useDialogContext } from './DialogContext';

const sizeMap: Record<DialogSize, Typography> = {
  s: 'md',
  md: 'xl',
  lg: 'xl'
};

type Props = {
  elementType?: ElementType;
};

type InheritAttrs = Omit<TextProps, keyof Props>;

type DialogHeaderProps = Props & InheritAttrs;

const DialogHeader = ({ elementType, children, ...props }: DialogHeaderProps): JSX.Element => {
  const { titleProps, size } = useDialogContext();

  return (
    <StyledDialogHeader $size={size} as={elementType} size={sizeMap[size]} {...mergeProps(titleProps || {}, props)}>
      {children}
    </StyledDialogHeader>
  );
};

export { DialogHeader };
export type { DialogHeaderProps };
