import { useDOMRef } from '@interlay/hooks';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonVariants, ButtonSizes, ButtonColors, SpinnerSizes, SpinnerColors } from '@interlay/themev2';
import { Slot, Slottable } from '@radix-ui/react-slot';

import { Flex } from '../Flex';
import { Spinner } from '../Spinner';

import { StyledButton } from './Button.style';

const spinnerSizeMap: Record<ButtonSizes, SpinnerSizes> = {
  s: 's',
  md: 's',
  lg: 'md',
  xl: 'md',
  '2xl': 'lg'
};

const spinnerColorMap: Record<ButtonColors, Record<ButtonVariants, SpinnerColors>> = {
  default: {
    ghost: 'default',
    outline: 'default',
    solid: 'default'
  },
  primary: {
    ghost: 'primary',
    outline: 'primary',
    solid: 'default'
  }
};

type Props = {
  variant?: ButtonVariants;
  fullWidth?: boolean;
  size?: ButtonSizes;
  color?: ButtonColors;
  loading?: boolean;
  isIconOnly?: boolean;
  asChild?: boolean;
  onPress?: (e: PressEvent) => void;
};

type NativeAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof Props>;

type ButtonProps = Props & NativeAttrs;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading,
      disabled,
      variant = 'solid',
      size = 'md',
      color = 'default',
      fullWidth,
      isIconOnly,
      onPress,
      onClick,
      asChild,
      ...props
    },
    ref
  ): JSX.Element => {
    const domRef = useDOMRef(ref);

    const isDisabled = disabled || loading;

    const { buttonProps } = useButton({ isDisabled, onPress, ...props }, domRef);
    const { focusProps, isFocusVisible } = useFocusRing(props);

    const Comp = asChild ? Slot : 'button';

    return (
      <StyledButton
        ref={domRef}
        $color={color}
        $fullWidth={fullWidth}
        $isFocusVisible={isFocusVisible}
        $isIconOnly={isIconOnly}
        $size={size}
        $variant={variant}
        as={Comp}
        disabled={isDisabled}
        {...mergeProps(props, buttonProps, focusProps, { onClick })}
      >
        {loading && (
          <Flex elementType='span' marginRight={isIconOnly ? undefined : 'spacing2'}>
            <Spinner aria-label='Loading...' color={spinnerColorMap[color][variant]} size={spinnerSizeMap[size]} />
          </Flex>
        )}
        {isIconOnly ? loading ? undefined : <Slottable>{children}</Slottable> : <Slottable>{children}</Slottable>}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
