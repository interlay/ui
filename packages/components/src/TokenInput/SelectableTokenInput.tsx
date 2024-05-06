import { chain, useId } from '@react-aria/utils';
import { Key, ReactNode, forwardRef, useCallback, useEffect } from 'react';

import { HelperText } from '../HelperText';

import { BaseTokenInput, BaseTokenInputProps } from './BaseTokenInput';
import { TokenInputBalance } from './TokenInputBalance';
import { TokenData, TokenSelect, TokenSelectProps } from './TokenSelect';

type Props = {
  balance?: string;
  humanBalance?: string | number;
  balanceLabel?: ReactNode;
  currency?: any;
  items?: TokenData[];
  onClickBalance?: (balance: string) => void;
  onChangeCurrency?: (currency?: any) => void;
  selectProps?: Omit<TokenSelectProps, 'label' | 'helperTextId' | 'items'>;
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
      currency,
      items,
      onClickBalance,
      onChangeCurrency,
      size,
      ...props
    },
    ref
  ): JSX.Element => {
    const selectHelperTextId = useId();

    useEffect(() => {
      if (selectProps?.value === undefined) return;

      const item = (items as TokenData[]).find((item) => item.currency.symbol === selectProps?.value);

      onChangeCurrency?.(item?.currency);
    }, [selectProps?.value, onChangeCurrency]);

    const handleSelectionChange = useCallback(
      (ticker: Key) => {
        const tokenData = (items as TokenData[]).find((item) => item.currency.symbol === ticker);

        onChangeCurrency?.(tokenData?.currency);
      },
      [selectProps]
    );

    // Prioritise Number Input description and error message
    const hasNumberFieldMessages = !!(errorMessage || description);
    const shouldDisplayHelperText =
      !hasNumberFieldMessages && !!(selectProps?.errorMessage || selectProps?.description);

    const isInvalid = !hasNumberFieldMessages && !!selectProps?.errorMessage;

    const { onSelectionChange, ...restSelectProps } = selectProps || {};

    const endAdornment = (
      <TokenSelect
        {...restSelectProps}
        aria-describedby={shouldDisplayHelperText ? selectHelperTextId : undefined}
        description={undefined}
        errorMessage={undefined}
        isInvalid={isInvalid}
        items={items}
        size={size}
        value={currency?.symbol}
        onSelectionChange={chain(onSelectionChange, handleSelectionChange)}
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
