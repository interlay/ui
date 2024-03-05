import { DialogBodyProps } from '../Dialog';

import { StyledDialogBody } from './Modal.style';
import { useModalContext } from './ModalContext';

type Props = {
  noPadding?: boolean;
};

type InheritAttrs = Omit<DialogBodyProps, keyof Props>;

type ModalBodyProps = Props & InheritAttrs;

const ModalBody = ({ noPadding, ...props }: ModalBodyProps): JSX.Element => {
  const { scrollBehavior } = useModalContext();

  return <StyledDialogBody {...props} $noPadding={noPadding} $scrollBehavior={scrollBehavior} />;
};

export { ModalBody };
export type { ModalBodyProps };
