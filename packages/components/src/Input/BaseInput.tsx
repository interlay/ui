import { Spacing, InputSizes } from '@interlay/themev2';
import { FocusEvent, forwardRef, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

import { Field, FieldProps, useFieldProps } from '../Field';
import { HelperTextProps } from '../HelperText';
import { LabelProps } from '../Label';
import { hasError } from '../utils/input';
import { ElementTypeProp } from '../utils/types';

import { StyledAdornmentLeft, StyledAdornmentRight, StyledBaseInput } from './Input.style';

// TODO: might need to consolidate this later
interface HTMLInputProps extends ElementTypeProp {
  elementType?: 'input';
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface HTMLTextAreaProps extends ElementTypeProp {
  elementType?: 'textarea';
  inputProps: TextareaHTMLAttributes<HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

type Props = {
  label?: ReactNode;
  labelProps?: LabelProps;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  value?: string | ReadonlyArray<string> | number;
  defaultValue?: string | ReadonlyArray<string> | number;
  size?: InputSizes;
  isInvalid?: boolean;
  minHeight?: Spacing;
  onFocus?: (e: FocusEvent<Element>) => void;
  onBlur?: (e: FocusEvent<Element>) => void;
} & (HTMLInputProps | HTMLTextAreaProps);

type InheritAttrs = Omit<
  HelperTextProps &
    Pick<FieldProps, 'label' | 'labelPosition' | 'labelProps' | 'maxWidth' | 'justifyContent' | 'alignItems'>,
  keyof Props
>;
type BaseInputProps = Props & InheritAttrs;

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { startAdornment, endAdornment, size = 'md', isInvalid, inputProps, minHeight, elementType = 'input', ...props },
    ref
  ): JSX.Element => {
    // FIXME: move this into Field
    const { fieldProps } = useFieldProps(props);

    const error = hasError({ isInvalid, errorMessage: props.errorMessage });

    return (
      <Field {...fieldProps}>
        {startAdornment && <StyledAdornmentLeft $size={size}>{startAdornment}</StyledAdornmentLeft>}
        <StyledBaseInput
          ref={ref as any}
          $adornments={{ left: !!startAdornment, right: !!endAdornment }}
          $hasError={error}
          $isDisabled={!!inputProps.disabled}
          $minHeight={minHeight}
          $size={size}
          as={elementType}
          {...inputProps}
        />
        {endAdornment && <StyledAdornmentRight $size={size}>{endAdornment}</StyledAdornmentRight>}
      </Field>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export { BaseInput };
export type { BaseInputProps };
