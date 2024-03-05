import { ReactNode } from 'react';

import { CTA } from '../CTA';
import { Dd, Flex } from '..';

import { StyledBalance, StyledBalanceLabel } from './TokenInput.style';

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
    <Flex alignItems='center' gap='xs'>
      <StyledBalance gap='xs'>
        <StyledBalanceLabel color='light' size='xs' weight='medium'>
          {label}
        </StyledBalanceLabel>
        <Dd color='grey-200' size='xs' weight='medium'>
          {balance}
        </Dd>
      </StyledBalance>
      <CTA
        aria-controls={inputId}
        aria-label={ariaLabel}
        disabled={isDisabled}
        size='x-small'
        onPress={handleClickBalance}
      >
        MAX
      </CTA>
    </Flex>
  );
};

export { TokenInputBalance };
export type { TokenInputBalanceProps };
