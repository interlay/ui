import { DialogBodyProps } from '../Dialog';

import { StyledDialogBody } from './Modal.style';

type Props = {
  noPadding?: boolean;
};

type InheritAttrs = Omit<DialogBodyProps, keyof Props>;

type ModalBodyProps = Props & InheritAttrs;

const ModalBody = ({ noPadding, ...props }: ModalBodyProps): JSX.Element => (
  <StyledDialogBody {...props} $noPadding={noPadding} />
);

export { ModalBody };
export type { ModalBodyProps };
