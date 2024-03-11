import { DialogFooter, DialogFooterProps } from '../Dialog';

type ModalFooterProps = DialogFooterProps;

const ModalFooter = ({ direction = 'column', gap = 's', ...props }: ModalFooterProps): JSX.Element => (
  <DialogFooter {...props} direction={direction} gap={gap} />
);

export { ModalFooter };
export type { ModalFooterProps };
