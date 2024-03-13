import type { AlignItems, AlignSelf, Direction, JustifyContent, ResponsiveProp, Spacing, Wrap } from '@interlay/theme';

import { styled } from 'styled-components';
import { StyledMarginProps } from '@interlay/hooks';

import { marginCSS } from '../utils/margin';
import { getResponsiveCSS, getSpacingResponsiveCSS } from '../utils/responsive';

type StyledFlexProps = {
  $gap?: ResponsiveProp<Spacing>;
  $justifyContent?: ResponsiveProp<JustifyContent>;
  $alignItems?: ResponsiveProp<AlignItems>;
  $direction?: ResponsiveProp<Direction>;
  $flex?: ResponsiveProp<string | number>;
  $wrap?: ResponsiveProp<Wrap>;
  $alignSelf?: ResponsiveProp<AlignSelf>;
} & StyledMarginProps;

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  align-self: ${(props) => props.$alignSelf};
  ${(props) => marginCSS(props)};
  ${({ $gap, theme }) => getSpacingResponsiveCSS(theme, 'gap', $gap)}
  ${({ $justifyContent, theme }) => getResponsiveCSS(theme, 'justify-content', $justifyContent)}
  ${({ $alignItems, theme }) => getResponsiveCSS(theme, 'align-items', $alignItems)}
  ${({ $flex, theme }) => getResponsiveCSS(theme, 'flex', $flex)}
  ${({ $wrap, theme }) =>
    getResponsiveCSS(theme, 'flex-wrap', $wrap, (prop) => (typeof prop === 'boolean' ? 'wrap' : prop))}
    ${({ $alignSelf, theme }) => getResponsiveCSS(theme, 'align-self', $alignSelf)}
`;

export { StyledFlex };
