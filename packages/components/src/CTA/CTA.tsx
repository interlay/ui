import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { useDOMRef } from '@interlay/hooks';

import { CTASizes, IconSize } from '../../../core/theme/src';

import { BaseCTA, BaseCTAProps } from './BaseCTA';
import { LoadingWrapper, StyledSpinner } from './CTA.style';

const loadingSizes: Record<CTASizes, IconSize> = {
  'x-small': 'xs',
  small: 'xs',
  medium: 's',
  large: 's'
};

type Props = {
  fullWidth?: boolean;
  size?: CTASizes;
  loading?: boolean;
  onPress?: (e: PressEvent) => void;
};

type NativeAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof Props>;

type InheritAttrs = Omit<BaseCTAProps, keyof Props & NativeAttrs>;

type CTAProps = Props & InheritAttrs & NativeAttrs;

const CTA = forwardRef<HTMLButtonElement, CTAProps>(
  (
    { children, loading, disabled, variant = 'primary', fullWidth, size = 'medium', onPress, onClick, ...props },
    ref
  ): JSX.Element => {
    const domRef = useDOMRef(ref);

    const isDisabled = disabled || loading;

    const { buttonProps } = useButton({ isDisabled, onPress, ...props }, domRef);
    const { focusProps, isFocusVisible } = useFocusRing(props);

    return (
      <BaseCTA
        ref={domRef}
        disabled={isDisabled}
        fullWidth={fullWidth}
        isFocusVisible={isFocusVisible}
        size={size}
        variant={variant}
        {...mergeProps(props, buttonProps, focusProps, { onClick })}
      >
        {loading && (
          <LoadingWrapper>
            <StyledSpinner
              $variant={variant}
              aria-label='Loading...'
              size={loadingSizes[size]}
              thickness={size === 'large' ? 3 : 2}
            />
          </LoadingWrapper>
        )}
        {children}
      </BaseCTA>
    );
  }
);

CTA.displayName = 'CTA';

export { CTA };
export type { CTAProps };
