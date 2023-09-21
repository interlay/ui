import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { mergeProps } from '@react-aria/utils';
import { ChangeEventHandler, FocusEvent, forwardRef, useEffect, useState } from 'react';
import { useDOMRef } from '@interlay/hooks';

import { BaseInput, BaseInputProps } from '../Input';

const escapeRegExp = (string: string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const numericRegex = /^[0-9\b]+$/;

// match escaped "." characters via in a non-capturing group
const decimalRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

type Props = {
  value?: string | number;
  defaultValue?: string | number;
  onFocus?: (e: FocusEvent<Element>) => void;
  onBlur?: (e: FocusEvent<Element>) => void;
};

type InheritAttrs = Omit<
  BaseInputProps,
  keyof Props | 'errorMessageProps' | 'descriptionProps' | 'disabled' | 'required' | 'readOnly'
>;

type AriaAttrs = Omit<AriaTextFieldOptions<'input'>, keyof (Props & InheritAttrs)>;

type NumberInputProps = Props & InheritAttrs & AriaAttrs;

// FIXME: some event are running duplicate
const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { onChange, value: valueProp, defaultValue = '', inputMode = 'numeric', isDisabled, onFocus, onBlur, ...props },
    ref
  ): JSX.Element => {
    const [value, setValue] = useState<string | undefined>(defaultValue?.toString());
    const inputRef = useDOMRef(ref);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const value = e.target.value;

      let isValid = true;

      switch (inputMode) {
        case 'decimal': {
          isValid = decimalRegex.test(escapeRegExp(value));

          break;
        }
        case 'numeric': {
          isValid = e.target.value === '' || numericRegex.test(e.target.value);
          break;
        }
      }

      if (isValid) {
        onChange?.(e);
        setValue(value);
      }
    };

    const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
      {
        ...props,
        isDisabled,
        inputMode,
        isInvalid: !!props.errorMessage,
        value: value,
        autoComplete: 'off',
        onFocus,
        onBlur
      },
      inputRef
    );

    useEffect(() => {
      if (valueProp === undefined) return;

      setValue(valueProp.toString());
    }, [valueProp]);

    return (
      <BaseInput
        ref={inputRef}
        autoCorrect='off'
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        labelProps={labelProps}
        spellCheck='false'
        {...mergeProps(props, inputProps, { onChange: handleChange })}
      />
    );
  }
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
export type { NumberInputProps };
