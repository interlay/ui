import { FlexProps } from '../Flex';

import { StyledDialogFooter } from './Dialog.style';

type InheritAttrs = FlexProps;

type DialogFooterProps = InheritAttrs;

const DialogFooter = (props: DialogFooterProps): JSX.Element => {
  return <StyledDialogFooter {...props} />;
};

export { DialogFooter };
export type { DialogFooterProps };
