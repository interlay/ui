import { useDOMRef } from '@interlay/hooks';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { ButtonVariants, ButtonSizes, ButtonColors } from '@interlay/themev2';

import { StyledButton } from './Button.style';

// const loadingSizes: Record<ButtonSizes, IconSize> = {
//   'x-small': 'xs',
//   small: 'xs',
//   medium: 's',
//   large: 's'
// };

type Props = {
  variant?: ButtonVariants;
  fullWidth?: boolean;
  size?: ButtonSizes;
  color?: ButtonColors;
  loading?: boolean;
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
      onPress,
      onClick,
      ...props
    },
    ref
  ): JSX.Element => {
    const domRef = useDOMRef(ref);

    const isDisabled = disabled || loading;

    const { buttonProps } = useButton({ isDisabled, onPress, ...props }, domRef);
    const { focusProps, isFocusVisible } = useFocusRing(props);

    return (
      <StyledButton
        ref={domRef}
        $color={color}
        $fullWidth={fullWidth}
        $isFocusVisible={isFocusVisible}
        $size={size}
        $variant={variant}
        disabled={isDisabled}
        {...mergeProps(props, buttonProps, focusProps, { onClick })}
      >
        {/* {loading && (
          <LoadingWrapper>
            <StyledSpinner
              $variant={variant}
              aria-label='Loading...'
              size={loadingSizes[size]}
              thickness={size === 'large' ? 3 : 2}
            />
          </LoadingWrapper>
        )} */}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
