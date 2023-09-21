import { useLabel } from '@react-aria/label';
import { chain, mergeProps, useId } from '@react-aria/utils';
import { ChangeEvent, FocusEvent, forwardRef, Key, ReactNode, useEffect, useState } from 'react';
import { useDOMRef } from '@interlay/hooks';

import { Flex } from '../Flex';
import { HelperText } from '../HelperText';
import { NumberInput, NumberInputProps } from '../NumberInput';
import { formatUSD } from '../utils/format';

import { TokenAdornment, TokenTicker } from './TokenAdornment';
import { StyledUSDAdornment } from './TokenInput.style';
import { TokenInputLabel } from './TokenInputLabel';
import { TokenSelect, TokenSelectProps } from './TokenSelect';

type Props = {
  valueUSD?: number;
  balance?: string | number;
  humanBalance?: string | number;
  balanceLabel?: ReactNode;
  ticker?: TokenTicker;
  onClickBalance?: (balance?: string | number) => void;
  onChangeTicker?: (ticker?: string) => void;
  onValueChange?: (value?: string | number) => void;
  selectProps?: Omit<TokenSelectProps, 'label' | 'helperTextId'>;
};

type InheritAttrs = Omit<NumberInputProps, keyof Props>;

type TokenInputProps = Props & InheritAttrs;

const TokenInput = forwardRef<HTMLInputElement, TokenInputProps>(
  (
    {
      valueUSD,
      balance,
      humanBalance,
      balanceLabel,
      isDisabled,
      label,
      ticker: tickerProp,
      style,
      hidden,
      className,
      onClickBalance,
      onValueChange,
      onChangeTicker,
      selectProps,
      placeholder = '0',
      errorMessage,
      description,
      value: valueProp,
      defaultValue,
      onBlur,
      ...props
    },
    ref
  ): JSX.Element => {
    const inputRef = useDOMRef(ref);

    const [value, setValue] = useState(defaultValue);
    const [ticker, setTicker] = useState<string>(
      (selectProps?.defaultValue as string) || (typeof tickerProp === 'string' ? tickerProp : tickerProp?.text) || ''
    );

    const { labelProps, fieldProps } = useLabel({ label, ...props });

    const selectHelperTextId = useId();
    const inputId = useId();

    const itemsArr = Array.from(selectProps?.items || []);
    const isSelectAdornment = itemsArr.length > 1;
    const adornmentTicker = !isSelectAdornment && selectProps?.items ? itemsArr[0]?.value : tickerProp;

    useEffect(() => {
      if (selectProps?.value === undefined) return;

      setTicker(selectProps.value as string);
    }, [selectProps?.value]);

    useEffect(() => {
      if (valueProp === undefined) return;

      setValue(valueProp);
    }, [valueProp]);

    const handleClickBalance = () => {
      if (!balance) return;

      inputRef.current?.focus();
      onClickBalance?.(balance);
      setValue(balance);
      onValueChange?.(balance);
    };

    const handleTokenChange = (ticker: Key) => {
      onChangeTicker?.(ticker as string);
      setTicker(ticker as string);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      onValueChange?.(value);
      setValue(value);
    };

    const handleBlur = (e: FocusEvent<Element>) => {
      const relatedTargetEl = e.relatedTarget as HTMLButtonElement;

      if (!relatedTargetEl) return;

      const isTargetingMaxBtn = relatedTargetEl.getAttribute('aria-controls') === inputId;

      if (!isTargetingMaxBtn) {
        onBlur?.(e);
      }
    };

    // Prioritise Number Input description and error message
    const hasSelectHelperText =
      !errorMessage && !description && (selectProps?.errorMessage || selectProps?.description);
    const { onSelectionChange, ...restSelectProps } = selectProps || {};

    const endAdornment = isSelectAdornment ? (
      <TokenSelect
        {...restSelectProps}
        aria-describedby={hasSelectHelperText ? selectHelperTextId : undefined}
        aria-label={fieldProps['aria-label']}
        errorMessage={undefined}
        label={label}
        validationState={hasSelectHelperText ? 'invalid' : undefined}
        value={ticker}
        onSelectionChange={chain(onSelectionChange, handleTokenChange)}
      />
    ) : adornmentTicker ? (
      <TokenAdornment ticker={adornmentTicker} />
    ) : null;

    const hasLabel = !!label || balance !== undefined;
    const hasLabelWithBalance = hasLabel && balance !== undefined;

    const numberInputProps: Partial<NumberInputProps> = hasLabelWithBalance
      ? {
          id: inputId,
          onBlur: handleBlur,
          onChange: handleChange
        }
      : { onBlur, onChange: handleChange };

    return (
      <Flex className={className} direction='column' gap='spacing0' hidden={hidden} style={style}>
        {hasLabel && (
          <TokenInputLabel
            balance={humanBalance || balance}
            balanceLabel={balanceLabel}
            inputId={inputId}
            isDisabled={isDisabled || !ticker}
            ticker={ticker}
            onClickBalance={handleClickBalance}
            {...labelProps}
          >
            {label}
          </TokenInputLabel>
        )}
        <NumberInput
          ref={inputRef}
          bottomAdornment={
            valueUSD !== undefined && (
              <StyledUSDAdornment $isDisabled={isDisabled}>{formatUSD(valueUSD, { compact: true })}</StyledUSDAdornment>
            )
          }
          description={description}
          endAdornment={endAdornment}
          errorMessage={errorMessage}
          inputMode='decimal'
          isDisabled={isDisabled}
          maxLength={79}
          minLength={1}
          pattern='^[0-9]*[.,]?[0-9]*$'
          placeholder={placeholder}
          size='large'
          value={value}
          {...mergeProps(props, fieldProps, numberInputProps)}
        />
        {hasSelectHelperText && (
          <HelperText
            description={selectProps?.description}
            errorMessage={selectProps?.errorMessage}
            id={selectHelperTextId}
          />
        )}
      </Flex>
    );
  }
);

TokenInput.displayName = 'TokenInput';

export { TokenInput };
export type { TokenInputProps };
