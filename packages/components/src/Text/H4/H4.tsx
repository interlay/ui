import { forwardRef } from 'react';

import { Text } from '../style';
import { TextProps } from '../types';
import { mapTextProps } from '../utils';

type H4Props = TextProps<HTMLHeadingElement>;

const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ size = '4xl', ...props }, ref): JSX.Element => <Text ref={ref} as='h4' {...mapTextProps({ size, ...props })} />
);

H4.displayName = 'H4';

export { H4 };
export type { H4Props };
