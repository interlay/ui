import { useDOMRef } from '@interlay/hooks';
import { mergeProps, useId } from '@react-aria/utils';
import { ChangeEvent, FocusEvent, forwardRef, useCallback, useEffect, useState } from 'react';

import { FixedTokenInput, FixedTokenInputProps } from './FixedTokenInput';
import { SelectableTokenInput, SelectableTokenInputProps } from './SelectableTokenInput';

type Props = {
  onValueChange?: (value?: string | number) => void;
  // TODO: define type when repo moved to bob-ui
};

type FixedAttrs = Omit<FixedTokenInputProps, keyof Props>;

type SelectableAttrs = Omit<SelectableTokenInputProps, keyof Props>;

type InheritAttrs = ({ type?: 'fixed' } & FixedAttrs) | ({ type?: 'selectable' } & SelectableAttrs);

type TokenInputProps = Props & InheritAttrs;

const TokenInput = forwardRef<HTMLInputElement, TokenInputProps>((props, ref): JSX.Element => {
  const { defaultValue, value: valueProp, onValueChange, balance, onBlur, ...otherProps } = props;

  const inputRef = useDOMRef<HTMLInputElement>(ref);

  const [value, setValue] = useState(defaultValue);

  const inputId = useId();

  useEffect(() => {
    if (valueProp === undefined) return;

    setValue(valueProp);
  }, [valueProp]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      onValueChange?.(value);
      setValue(value);
    },
    [onValueChange]
  );

  const handleClickBalance = useCallback(
    (balance: string) => {
      inputRef.current?.focus();

      setValue(balance);
      onValueChange?.(balance);
    },
    [onValueChange, inputRef.current]
  );

  const handleBlur = useCallback(
    (e: FocusEvent<Element>) => {
      const relatedTargetEl = e.relatedTarget;

      if (!relatedTargetEl || !relatedTargetEl.getAttribute) {
        return onBlur?.(e);
      }

      const isTargetingMaxBtn = relatedTargetEl.getAttribute('aria-controls') === inputId;

      if (!isTargetingMaxBtn) {
        onBlur?.(e);
      }
    },
    [onBlur]
  );

  const numberInputProps: Partial<TokenInputProps> =
    balance !== undefined
      ? {
          id: inputId,
          balance,
          onBlur: handleBlur,
          onClickBalance: handleClickBalance
        }
      : { onBlur };

  const commonProps = {
    ...numberInputProps,
    ref: inputRef,
    value,
    onChange: handleChange
  };

  if (props.type === 'selectable') {
    return <SelectableTokenInput {...mergeProps(otherProps, commonProps)} />;
  }

  return <FixedTokenInput {...mergeProps(otherProps, commonProps)} />;
});

TokenInput.displayName = 'TokenInput';

export { TokenInput };
export type { TokenInputProps };
