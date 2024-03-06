import { useDOMRef } from '@interlay/hooks';
import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { useFocusRing } from '@react-aria/focus';

import { StyledButton } from './UnstyledButton.style';

type Props = {
  asChild?: boolean;
  onPress?: (e: PressEvent) => void;
};

type NativeAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof Props>;

type UnstyledButtonProps = Props & NativeAttrs;

const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ onPress, asChild, ...props }, ref): JSX.Element => {
    const domRef = useDOMRef(ref);

    const { buttonProps } = useButton({ onPress, ...props }, domRef);
    const { focusProps, isFocusVisible } = useFocusRing(props);

    const Comp = asChild ? Slot : 'button';

    return (
      <StyledButton
        ref={domRef}
        $isFocusVisible={isFocusVisible}
        as={Comp}
        {...mergeProps(props, focusProps, buttonProps)}
      />
    );
  }
);

UnstyledButton.displayName = 'Button';

export { UnstyledButton };
export type { UnstyledButtonProps };
