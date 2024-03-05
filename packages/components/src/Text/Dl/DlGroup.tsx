import { Flex, FlexProps } from '../../Flex';

type DlGroupProps = FlexProps;

const DlGroup = ({ direction = 'row', alignItems = 'center', gap = 'md', ...props }: DlGroupProps): JSX.Element => (
  <Flex alignItems={alignItems} direction={direction} gap={gap} {...props} />
);

DlGroup.displayName = 'DlGroup';

export { DlGroup };
export type { DlGroupProps };
