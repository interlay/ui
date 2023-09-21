import { forwardRef, InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { Sizes, Spacing } from '@interlay/theme';

import { Field, FieldProps, useFieldProps } from '../Field';
import { HelperTextProps } from '../HelperText';
import { LabelProps } from '../Label';
import { hasError } from '../utils/input';

import { Adornment, StyledBaseInput } from './Input.style';

type Props = {
  label?: ReactNode;
  labelProps?: LabelProps;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  bottomAdornment?: ReactNode;
  value?: string | ReadonlyArray<string> | number;
  defaultValue?: string | ReadonlyArray<string> | number;
  size?: Sizes;
  // TODO: temporary
  padding?: { top?: Spacing; bottom?: Spacing; left?: Spacing; right?: Spacing };
  isInvalid?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type NativeAttrs = Omit<InputHTMLAttributes<HTMLInputElement>, keyof Props>;

type InheritAttrs = Omit<
  HelperTextProps &
    Pick<FieldProps, 'label' | 'labelPosition' | 'labelProps' | 'maxWidth' | 'justifyContent' | 'alignItems'>,
  keyof (Props & NativeAttrs)
>;
type BaseInputProps = Props & NativeAttrs & InheritAttrs;

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    { startAdornment, endAdornment, bottomAdornment, disabled, size = 'medium', isInvalid, padding, ...props },
    ref
  ): JSX.Element => {
    const endAdornmentRef = useRef<HTMLDivElement>(null);
    const [endAdornmentWidth, setEndAdornmentWidth] = useState(0);

    const { fieldProps, elementProps } = useFieldProps(props);

    useEffect(() => {
      if (!endAdornmentRef.current || !endAdornment) return;

      setEndAdornmentWidth(endAdornmentRef.current.getBoundingClientRect().width);
    }, [endAdornment]);

    const error = hasError({ isInvalid, errorMessage: props.errorMessage });

    return (
      <Field {...fieldProps}>
        {startAdornment && <Adornment $position='left'>{startAdornment}</Adornment>}
        <StyledBaseInput
          ref={ref}
          $adornments={{ bottom: !!bottomAdornment, left: !!startAdornment, right: !!endAdornment }}
          $endAdornmentWidth={endAdornmentWidth}
          $hasError={error}
          $isDisabled={!!disabled}
          $padding={padding}
          $size={size}
          disabled={disabled}
          type='text'
          {...elementProps}
        />
        {bottomAdornment && <Adornment $position='bottom'>{bottomAdornment}</Adornment>}
        {endAdornment && (
          <Adornment ref={endAdornmentRef} $position='right'>
            {endAdornment}
          </Adornment>
        )}
      </Field>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export { BaseInput };
export type { BaseInputProps };
