import { forwardRef } from 'react';
import { Selection } from '@react-types/shared';
import { useCollection } from '@react-stately/collections';
import { ListCollection } from '@react-stately/list';

import { Flex, FlexProps } from '../Flex';

import { StepperItem } from './StepperItem';

type Props = {
  index?: number;
  fullWidth?: boolean;
};

type NativeAttrs = Omit<FlexProps, keyof Props | 'direction'>;

type StepperProps = Props & NativeAttrs;

const Stepper = forwardRef<HTMLDivElement, StepperProps>(({ index = 0, ...props }, ref): JSX.Element => {
  const collection = useCollection(props as any, (nodes) => new ListCollection(nodes) as any);

  const steps = [...collection];

  return (
    <Flex ref={ref} direction='row' gap='xl' {...props}>
      {steps.map((item, idx) => (
        <StepperItem
          key={item.key}
          isLast={steps.length - 1 === idx}
          item={item}
          status={idx > index ? 'incomplete' : idx === index ? 'active' : 'complete'}
        />
      ))}
    </Flex>
  );
});

Stepper.displayName = 'Stepper';

export { Stepper };
export type { StepperProps, Selection };
