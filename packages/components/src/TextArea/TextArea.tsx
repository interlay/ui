import { useDOMRef } from '@interlay/hooks';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { mergeProps } from '@react-aria/utils';
import { forwardRef } from 'react';

import { BaseInput, BaseInputProps } from '../Input';

type Props = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type InheritAttrs = Omit<BaseInputProps, keyof Props | 'errorMessageProps' | 'descriptionProps' | 'inputProps'>;

type AriaAttrs = Omit<AriaTextFieldOptions<'textarea'>, (keyof Props & InheritAttrs) | 'onChange'>;

type TextAreaProps = Props & InheritAttrs & AriaAttrs;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ isInvalid, onValueChange, onChange, elementType = 'textarea', ...props }, ref): JSX.Element => {
    const inputRef = useDOMRef(ref);
    // We are specifing `validationState` so that when there are errors, `aria-invalid` is set to `true`
    const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
      {
        ...props,
        isInvalid: isInvalid || !!props.errorMessage,
        inputElementType: elementType,
        onChange: onValueChange
      },
      inputRef
    );

    return (
      <BaseInput
        ref={inputRef as any}
        descriptionProps={descriptionProps}
        elementType={elementType}
        errorMessageProps={errorMessageProps}
        inputProps={mergeProps(inputProps, { onChange })}
        labelProps={labelProps}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaProps };
