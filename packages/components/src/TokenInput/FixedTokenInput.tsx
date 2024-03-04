import { ReactNode, forwardRef } from 'react';

import { TokenAdornment } from './TokenAdornment';
import { BaseTokenInput, BaseTokenInputProps } from './BaseTokenInput';
import { TokenInputBalance } from './TokenInputBalance';

type Props = {
  balance?: string | number;
  humanBalance?: string | number;
  balanceLabel?: ReactNode;
  onClickBalance?: (balance: string | number) => void;
  ticker: string;
  logoUrl: string;
};

type InheritAttrs = Omit<BaseTokenInputProps, keyof Props>;

type FixedTokenInputProps = Props & InheritAttrs;

const FixedTokenInput = forwardRef<HTMLInputElement, FixedTokenInputProps>(
  (
    {
      balance: balanceProp,
      humanBalance,
      balanceLabel,
      onClickBalance,
      ticker: tickerProp,
      logoUrl,
      isDisabled,
      id,
      ...props
    },
    ref
  ): JSX.Element => {
    const balance = balanceProp !== undefined && (
      <TokenInputBalance
        balance={balanceProp}
        balanceHuman={humanBalance}
        inputId={id}
        isDisabled={isDisabled}
        label={balanceLabel}
        onClickBalance={onClickBalance}
      />
    );

    return (
      <BaseTokenInput
        ref={ref}
        balance={balance}
        endAdornment={<TokenAdornment logoUrl={logoUrl} ticker={tickerProp} />}
        id={id}
        isDisabled={isDisabled}
        {...props}
      />
    );
  }
);

FixedTokenInput.displayName = 'FixedTokenInput';

export { FixedTokenInput };
export type { FixedTokenInputProps };
