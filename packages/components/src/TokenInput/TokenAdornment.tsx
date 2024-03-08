import { TokenInputSize } from '@interlay/theme';

import { FlexProps } from '../Flex';

import { StyledTicker, StyledTokenAdornment, StyledTokenImg } from './TokenInput.style';

type Props = {
  ticker: string;
  logoUrl: string;
  size: TokenInputSize;
};

type NativeAttrs = Omit<FlexProps, keyof Props>;

type TokenAdornmentProps = Props & NativeAttrs;

const TokenAdornment = ({ ticker, logoUrl, size, ...props }: TokenAdornmentProps): JSX.Element => (
  <StyledTokenAdornment {...props} $size={size} alignItems='center' gap='s'>
    <StyledTokenImg $size={size} alt={ticker} src={logoUrl} />
    <StyledTicker>{ticker}</StyledTicker>
  </StyledTokenAdornment>
);

export { TokenAdornment };
export type { TokenAdornmentProps };
