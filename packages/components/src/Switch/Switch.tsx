import { useFocusRing } from '@react-aria/focus';
import { usePress } from '@react-aria/interactions';
import { AriaSwitchProps, useSwitch } from '@react-aria/switch';
import { mergeProps } from '@react-aria/utils';
import { useToggleState } from '@react-stately/toggle';
import { PressEvent } from '@react-types/shared';
import { ChangeEvent, ChangeEventHandler, forwardRef, HTMLAttributes, useRef } from 'react';
import { Placement } from '@interlay/theme';
import { useDOMRef } from '@interlay/hooks';

import { TextProps } from '../Text';

import { StyledInput, StyledLabel, StyledSwitch, StyledWrapper } from './Switch.style';

type Props = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
  onPress?: (e: PressEvent) => void;
  labelProps?: TextProps;
  labelPlacement?: Extract<Placement, 'left' | 'right'>;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type InheritAttrs = Omit<AriaSwitchProps, keyof Props>;

type SwitchProps = Props & NativeAttrs & InheritAttrs;

const Switch = forwardRef<HTMLLabelElement, SwitchProps>(
  (
    {
      children,
      onChange,
      onValueChange,
      className,
      style,
      hidden,
      labelProps,
      labelPlacement,
      isSelected,
      isReadOnly,
      ...props
    },
    ref
  ): JSX.Element => {
    const labelRef = useDOMRef(ref);
    const inputRef = useRef<HTMLInputElement>(null);

    const ariaProps: AriaSwitchProps = { children, isSelected, isReadOnly, ...props };

    const state = useToggleState(ariaProps);
    const { inputProps } = useSwitch(ariaProps, state, inputRef);

    const { focusProps, isFocusVisible } = useFocusRing({
      autoFocus: inputProps.autoFocus
    });

    const { pressProps } = usePress(props);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const isSelected = e.target.checked;

      onChange?.(e);
      onValueChange?.(isSelected);
    };

    return (
      <StyledWrapper
        ref={labelRef}
        $reverse={labelPlacement === 'left'}
        className={className}
        hidden={hidden}
        style={style}
      >
        <StyledInput {...mergeProps(inputProps, focusProps, pressProps, { onChange: handleChange })} ref={inputRef} />
        <StyledSwitch $isChecked={inputProps.checked} $isFocusVisible={isFocusVisible} />
        {children && <StyledLabel {...labelProps}>{children}</StyledLabel>}
      </StyledWrapper>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };
export type { SwitchProps };
