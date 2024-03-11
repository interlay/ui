import { ReactNode } from 'react';

import { StyledBalanceButton, StyledBalanceLabel } from './TokenInput.style';

type TokenInputBalanceProps = {
  inputId?: string;
  balance: string | number;
  balanceHuman?: string | number;
  onClickBalance?: (balance: string | number) => void;
  isDisabled?: boolean;
  label?: ReactNode;
};

const TokenInputBalance = ({
  inputId,
  balance: balanceProp,
  balanceHuman,
  onClickBalance,
  isDisabled: isDisabledProp,
  label = 'Balance'
}: TokenInputBalanceProps): JSX.Element => {
  const isDisabled = isDisabledProp || balanceProp === 0;

  const ariaLabel = typeof label === 'string' ? `apply max ${label}` : 'apply max';

  const balance = balanceHuman || balanceProp;

  const handleClickBalance = () => onClickBalance?.(balanceProp);

  return (
    <StyledBalanceButton
      aria-controls={inputId}
      aria-label={ariaLabel}
      disabled={isDisabled}
      onPress={handleClickBalance}
    >
      <StyledBalanceLabel>{label}:</StyledBalanceLabel> {balance}
    </StyledBalanceButton>
  );
};

export { TokenInputBalance };
export type { TokenInputBalanceProps };
