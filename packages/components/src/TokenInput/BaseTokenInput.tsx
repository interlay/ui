import { useCurrencyFormatter, useDOMRef } from '@interlay/hooks';
import { Spacing, TokenInputSize } from '@interlay/theme';
import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { mergeProps } from '@react-aria/utils';
import { ChangeEventHandler, FocusEvent, forwardRef, ReactNode, useCallback, useEffect, useState } from 'react';

import { trimDecimals } from '../utils';
import { HelperTextProps } from '../HelperText';
import { LabelProps } from '../Label';
import { Field, FieldProps, useFieldProps } from '../Field';
import { Flex } from '../Flex';
import { hasError } from '../utils/input';

import {
  StyledAdornment,
  StyledBaseInput,
  StyledGroupInputWrapper,
  StyledNumberInputWrapper,
  StyledUSDAdornment
} from './BaseTokenInput.style';
import { TokenInputLabel } from './TokenInputLabel';

const escapeRegExp = (string: string): string => {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const hasCorrectDecimals = (value: string, decimals: number) => {
  const decimalGroups = value.split('.');

  return decimalGroups.length > 1 ? decimalGroups[1].length <= decimals : true;
};

type Props = {
  valueUSD?: number;
  balance?: ReactNode;
  label?: ReactNode;
  labelProps?: LabelProps;
  endAdornment: ReactNode;
  size?: TokenInputSize;
  isInvalid?: boolean;
  minHeight?: Spacing;
  value?: string;
  defaultValue?: string;
  // TODO: use Currency from bob-ui
  currency?: { decimals: number };
  onValueChange?: (value: string | number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<Element>) => void;
  onBlur?: (e: FocusEvent<Element>) => void;
};

type InheritAttrs = Omit<
  HelperTextProps &
    Pick<
      FieldProps,
      'label' | 'labelPosition' | 'labelProps' | 'maxWidth' | 'justifyContent' | 'alignItems' | 'fullWidth'
    >,
  keyof Props
>;

type AriaAttrs = Omit<AriaTextFieldOptions<'input'>, (keyof Props & InheritAttrs) | 'onChange'>;

type BaseTokenInputProps = Props & AriaAttrs & InheritAttrs;

const BaseTokenInput = forwardRef<HTMLInputElement, BaseTokenInputProps>(
  (
    {
      label,
      placeholder = '0.00',
      balance,
      children,
      valueUSD,
      isDisabled,
      isInvalid,
      size = 'md',
      defaultValue,
      inputMode,
      value: valueProp,
      endAdornment,
      currency,
      onChange,
      onValueChange,
      ...props
    },
    ref
  ): JSX.Element => {
    const [value, setValue] = useState<string | undefined>(defaultValue?.toString());
    const inputRef = useDOMRef(ref);

    const format = useCurrencyFormatter();

    // Observes currency field and correct decimals places if needed
    useEffect(() => {
      if (value && currency) {
        const trimmedValue = trimDecimals(value, currency.decimals);

        if (value !== trimmedValue) {
          setValue(trimmedValue);
          onValueChange?.(trimmedValue);
        }
      }
    }, [currency]);

    useEffect(() => {
      if (valueProp === undefined) return;

      setValue(valueProp.toString());
    }, [valueProp]);

    const { inputProps, descriptionProps, errorMessageProps, labelProps } = useTextField(
      {
        ...props,
        label,
        inputMode,
        isInvalid: isInvalid || !!props.errorMessage,
        value: value,
        placeholder,
        autoComplete: 'off'
      },
      inputRef
    );

    const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        const value = e.target.value;

        const isEmpty = value === '';
        const hasValidDecimalFormat = RegExp(`^\\d*(?:\\\\[.])?\\d*$`).test(escapeRegExp(value));
        const hasValidDecimalsAmount = currency ? hasCorrectDecimals(value, currency.decimals) : true;

        const isValid = hasValidDecimalFormat && hasValidDecimalsAmount;

        if (isEmpty || isValid) {
          onChange?.(e);
          onValueChange?.(value);
          setValue(value);
        }
      },
      [onChange, onValueChange, currency]
    );

    const hasLabel = !!label || !!balance;

    // FIXME: move this into Field
    const { fieldProps: styleFieldProps } = useFieldProps({ ...props, descriptionProps, errorMessageProps } as any);

    const error = hasError({ isInvalid, errorMessage: props.errorMessage } as any);

    const bottomAdornment = valueUSD !== undefined && (
      <StyledUSDAdornment $isDisabled={isDisabled} $size={size}>
        {format(valueUSD)}
      </StyledUSDAdornment>
    );

    return (
      <Field {...styleFieldProps}>
        <Flex direction='column' flex={1}>
          {hasLabel && (
            <TokenInputLabel {...labelProps} balance={balance}>
              {label}
            </TokenInputLabel>
          )}
          <StyledGroupInputWrapper>
            <StyledNumberInputWrapper>
              <StyledBaseInput
                ref={inputRef}
                $adornmentBottom={!!bottomAdornment}
                $hasError={error}
                $size={size}
                placeholder={placeholder}
                {...mergeProps(inputProps, { onChange: handleChange })}
              />
              <StyledAdornment $size={size}>{bottomAdornment}</StyledAdornment>
            </StyledNumberInputWrapper>
            {endAdornment}
          </StyledGroupInputWrapper>
          {children}
        </Flex>
      </Field>
    );
  }
);

BaseTokenInput.displayName = 'BaseTokenInput';

export { BaseTokenInput };
export type { BaseTokenInputProps };
