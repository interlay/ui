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

type InheritAttrs = Omit<BaseTokenInputProps, keyof Props | 'endAdornment'>;

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
      size = 'md',
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
        {...props}
        ref={ref}
        balance={balance}
        endAdornment={<TokenAdornment logoUrl={logoUrl} size={size} ticker={tickerProp} />}
        id={id}
        isDisabled={isDisabled}
        size={size}
      />
    );
  }
);

FixedTokenInput.displayName = 'FixedTokenInput';

export { FixedTokenInput };
export type { FixedTokenInputProps };
