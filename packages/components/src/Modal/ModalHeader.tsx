import { DialogHeader, DialogHeaderProps } from '../Dialog';

type ModalHeaderProps = DialogHeaderProps;

const ModalHeader = ({ align = 'start', weight = 'semibold', children, ...props }: ModalHeaderProps): JSX.Element => (
  <DialogHeader align={align} weight={weight} {...props}>
    {children}
  </DialogHeader>
);

export { ModalHeader };
export type { ModalHeaderProps };
