import { Flex, FlexProps } from '../../Flex';

type DlProps = FlexProps;

const Dl = ({ gap = 'md', elementType = 'dl', ...props }: DlProps): JSX.Element => (
  <Flex elementType={elementType} gap={gap} {...props} />
);

Dl.displayName = 'Dl';

export { Dl };
export type { DlProps };
