import { Item } from '@react-stately/collections';
import { ItemProps } from '@react-types/shared';
import { ReactNode } from 'react';

import { StepperItemProps } from './StepperItem';

const StepperItem = Item as <T>(
  props: Omit<ItemProps<T>, 'children'> & StepperItemProps & { children?: ReactNode }
) => JSX.Element;

export type { StepperProps, Selection } from './Stepper';
export { Stepper } from './Stepper';

export type { StepperItemProps };
export { StepperItem };
