import { FlexProps } from '../Flex';

import { StyledTicker, StyledTokenAdornment, StyledTokenImg } from './TokenInput.style';

type Props = {
  ticker: string;
  logoUrl: string;
};

type NativeAttrs = Omit<FlexProps, keyof Props>;

type TokenAdornmentProps = Props & NativeAttrs;

const TokenAdornment = ({ ticker, logoUrl, ...props }: TokenAdornmentProps): JSX.Element => (
  <StyledTokenAdornment {...props} alignItems='center' gap='xs' justifyContent='space-evenly'>
    <StyledTokenImg alt={ticker} src={logoUrl} />
    <StyledTicker>{ticker}</StyledTicker>
  </StyledTokenAdornment>
);

export { TokenAdornment };
export type { TokenAdornmentProps };
