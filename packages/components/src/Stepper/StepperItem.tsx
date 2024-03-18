import { Node } from '@react-types/shared';

import { Span } from '../Text';
import { Flex, FlexProps } from '../Flex';

import { StyledDivider, StyledStep } from './Stepper.style';

type Props = {};

type InheritAttrs = Omit<FlexProps, keyof Props>;

type StepperItemProps = Props & InheritAttrs;

type InternalProps<T extends object> = StepperItemProps & {
  item: Node<T>;
  status: 'active' | 'complete' | 'incomplete';
  isLast: boolean;
  fullWidth?: boolean;
};

const StepperItem = <T extends object>({ status, isLast, item }: InternalProps<T>): JSX.Element => (
  <Flex alignItems='center' flex={isLast ? 'initial' : '1 1 0%'} gap='xl'>
    <Flex alignItems='center' gap='md' justifyContent='center'>
      <StyledStep $status={status} alignItems='center' justifyContent='center'>
        <Span weight='bold'>{(item.index || 0) + 1}</Span>
      </StyledStep>
      {item.rendered}
    </Flex>
    {!isLast && <StyledDivider $status={status} size='md' />}
  </Flex>
);

export { StepperItem };
export type { StepperItemProps };
