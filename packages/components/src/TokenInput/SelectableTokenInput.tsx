import { chain, useId } from '@react-aria/utils';
import { Key, ReactNode, forwardRef, useCallback, useEffect, useState } from 'react';

import { HelperText } from '../HelperText';

import { BaseTokenInput, BaseTokenInputProps } from './BaseTokenInput';
import { TokenInputBalance } from './TokenInputBalance';
import { TokenData, TokenSelect, TokenSelectProps } from './TokenSelect';

type Props = {
  balance?: string;
  humanBalance?: string | number;
  balanceLabel?: ReactNode;
  onClickBalance?: (balance: string) => void;
  selectProps: Omit<TokenSelectProps, 'label' | 'helperTextId'>;
};

type InheritAttrs = Omit<BaseTokenInputProps, keyof Props | 'endAdornment'>;

type SelectableTokenInputProps = Props & InheritAttrs;

const SelectableTokenInput = forwardRef<HTMLInputElement, SelectableTokenInputProps>(
  (
    {
      selectProps,
      errorMessage,
      description,
      label,
      balance: balanceProp,
      id,
      isDisabled,
      balanceLabel,
      humanBalance,
      onClickBalance,
      size,
      ...props
    },
    ref
  ): JSX.Element => {
    const selectHelperTextId = useId();

    const defaultCurrency = (selectProps.items as TokenData[]).find(
      (item) => item.currency.symbol === selectProps.defaultValue
    );

    const [currency, setCurrency] = useState<any | undefined>(defaultCurrency);

    useEffect(() => {
      const value = selectProps?.value;

      if (value === undefined) return;

      const tokenData = (selectProps.items as TokenData[]).find((item) => item.currency.symbol === value);

      setCurrency(tokenData?.currency);
    }, [selectProps?.value]);

    const handleTokenChange = useCallback(
      (ticker: Key) => {
        const tokenData = (selectProps.items as TokenData[]).find((item) => item.currency.symbol === ticker);

        setCurrency(tokenData?.currency);
      },
      [selectProps]
    );

    // Prioritise Number Input description and error message
    const hasNumberFieldMessages = !!(errorMessage || description);
    const shouldDisplayHelperText =
      !hasNumberFieldMessages && !!(selectProps?.errorMessage || selectProps?.description);

    const isInvalid = !hasNumberFieldMessages && !!selectProps?.errorMessage;

    const { onSelectionChange, ...restSelectProps } = selectProps;

    const endAdornment = (
      <TokenSelect
        {...restSelectProps}
        aria-describedby={shouldDisplayHelperText ? selectHelperTextId : undefined}
        description={undefined}
        errorMessage={undefined}
        isInvalid={isInvalid}
        size={size}
        value={currency?.symbol}
        onSelectionChange={chain(onSelectionChange, handleTokenChange)}
      />
    );

    const balance = balanceProp !== undefined && (
      <TokenInputBalance
        balance={currency ? balanceProp : '0'}
        balanceHuman={humanBalance}
        inputId={id}
        isDisabled={isDisabled || !currency}
        label={balanceLabel}
        onClickBalance={onClickBalance}
      />
    );

    return (
      <BaseTokenInput
        ref={ref}
        balance={balance}
        currency={currency}
        description={description}
        endAdornment={endAdornment}
        errorMessage={errorMessage}
        id={id}
        isDisabled={isDisabled}
        label={label}
        {...props}
      >
        {shouldDisplayHelperText && (
          <HelperText
            description={selectProps?.description}
            errorMessage={selectProps?.errorMessage}
            id={selectHelperTextId}
          />
        )}
      </BaseTokenInput>
    );
  }
);

SelectableTokenInput.displayName = 'SelectableTokenInput';

export { SelectableTokenInput };
export type { SelectableTokenInputProps };
