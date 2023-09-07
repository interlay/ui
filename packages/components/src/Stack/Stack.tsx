import { HTMLAttributes } from 'react';
import { AlignItems, JustifyContent } from '@just_testing13/theme';

import { StackContainer } from './Stack.style';

type Spacing = 'none' | 'half' | 'single' | 'double';

type Props = {
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type StackProps = Props & NativeAttrs;

// TODO: to be replaced by Flex component
const Stack = ({ children, spacing = 'single', justifyContent, alignItems, ...props }: StackProps): JSX.Element => (
  <StackContainer $alignItems={alignItems} $justifyContent={justifyContent} $spacing={spacing} {...props}>
    {children}
  </StackContainer>
);

export { Stack };
export type { Spacing, StackProps };
