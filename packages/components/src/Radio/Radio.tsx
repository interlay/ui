import { useDOMRef } from '@interlay/hooks';
import { Placement } from '@interlay/theme';
import { useHover } from '@react-aria/interactions';
import { AriaRadioProps, useRadio } from '@react-aria/radio';
import { HTMLAttributes, forwardRef, useRef } from 'react';

import { Span, TextProps } from '../Text';

import { StyledButton, StyledInput, StyledLabel } from './Radio.style';
import { useRadioProvider } from './RadioContext';

type Props = {
  labelProps?: TextProps;
  labelPlacement?: Extract<Placement, 'left' | 'right'>;
  flex?: string | number | boolean;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type InheritAttrs = Omit<AriaRadioProps, keyof Props>;

type RadioProps = Props & NativeAttrs & InheritAttrs;

// TODO: determine if isInvalid is necessary
const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  ({ labelProps, isDisabled: isDisabledProp, children, className, style, flex, ...props }, ref): JSX.Element => {
    let { hoverProps, isHovered } = useHover({ isDisabled: isDisabledProp });

    const labelRef = useDOMRef(ref);
    const inputRef = useRef<HTMLInputElement>(null);

    const state = useRadioProvider();

    const { inputProps, isSelected, isDisabled } = useRadio(
      {
        ...props,
        children,
        isDisabled: isDisabledProp
      },
      state,
      inputRef
    );

    return (
      <StyledLabel
        {...labelProps}
        {...hoverProps}
        ref={labelRef}
        $flex={flex}
        $isDisabled={isDisabled}
        className={className}
        style={style}
      >
        <StyledInput {...inputProps} ref={inputRef} />
        <StyledButton $isHovered={isHovered} $isSelected={isSelected} />
        {children && <Span size='xs'>{children}</Span>}
      </StyledLabel>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio };
export type { RadioProps };
