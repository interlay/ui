import { ReactNode } from 'react';

import { Dd, Dl, DlGroup, Dt } from '../Text';

import { StyledBalance, StyledMaxButton } from './TokenInput.style';

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
    <StyledBalance alignItems='center' gap='xs'>
      <Dl>
        <DlGroup alignItems='center' gap='xs'>
          <Dt color='light' size='xs'>
            Balance:
          </Dt>
          <Dd color='primary-500' size='xs'>
            {balance}
          </Dd>
        </DlGroup>
      </Dl>
      <StyledMaxButton
        aria-controls={inputId}
        aria-label={ariaLabel}
        color='primary'
        disabled={isDisabled}
        size='s'
        variant='ghost'
        onPress={handleClickBalance}
      >
        MAX
      </StyledMaxButton>
    </StyledBalance>
  );
};

export { TokenInputBalance };
export type { TokenInputBalanceProps };
