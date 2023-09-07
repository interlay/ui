import { ForwardRefExoticComponent, forwardRef } from 'react';
import { IconProps } from '@just_testing13/icons';

import * as coins from '../../../icons/src/svg/coin';

import { FallbackIcon } from './FallbackIcon';
import { LPCoinIcon } from './LPCoinIcon';

const DATA = coins as unknown as Record<string, ForwardRefExoticComponent<any>>;

type Props = {
  ticker: string;
  // Multi tickers icons
  tickers?: string[];
};

type NativeAttrs = Omit<IconProps, keyof Props>;

type CoinIconProps = Props & NativeAttrs;

const CoinIcon = forwardRef<SVGSVGElement, CoinIconProps>(({ ticker, tickers, ...props }, ref): JSX.Element => {
  // Only want to render multi-token if has more than 1 ticker
  if (tickers && tickers?.length > 1) {
    return <LPCoinIcon ref={ref} data={DATA} ticker={ticker} tickers={tickers} {...props} />;
  }

  const CoinIcon = DATA[ticker];

  if (!CoinIcon) {
    return <FallbackIcon ref={ref} ticker={ticker} {...props} />;
  }

  return <CoinIcon ref={ref} {...props} />;
});

CoinIcon.displayName = 'CoinIcon';

export { CoinIcon };
export type { CoinIconProps };
