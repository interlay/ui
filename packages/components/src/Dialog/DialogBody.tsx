import { Spacing } from '@interlay/theme';

import { FlexProps } from '../Flex';

import { StyledDialogBody } from './Dialog.style';

type Props = {
  maxHeight?: Spacing;
};

type InheritAttrs = Omit<FlexProps, keyof Props>;

type DialogBodyProps = Props & InheritAttrs;

const DialogBody = ({ direction = 'column', maxHeight, ...props }: DialogBodyProps): JSX.Element => {
  return <StyledDialogBody {...props} $maxHeight={maxHeight} direction={direction} />;
};

export { DialogBody };
export type { DialogBodyProps };
