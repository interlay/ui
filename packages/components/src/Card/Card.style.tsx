import styled, { css } from 'styled-components';
import { Color, Rounded, Spacing } from '@interlay/themev2';

import { Flex } from '../Flex';

type StyledCardProps = {
  $bordered: boolean | Color;
  $rounded: Rounded;
  $padding: Spacing;
  $shadowed: boolean;
  $background: Color;
  $isHoverable?: boolean;
  $isPressable?: boolean;
};

const StyledCard = styled(Flex)<StyledCardProps>`
  background-color: ${({ $background, theme }) => theme.color($background)};
  border-radius: ${({ $rounded, theme }) => theme.rounded($rounded)};
  padding: ${({ $padding, theme }) => theme.spacing($padding)};
  cursor: ${({ $isPressable }) => $isPressable && 'pointer'};
  outline: none;

  // TODO: add isHoverable
  ${({ $bordered, $isPressable, $shadowed, theme }) => {
    const { border, boxShadow, ...baseCss } = theme.card.base;

    return css`
      border: ${typeof $bordered === 'boolean' ? border : `1px solid ${$bordered}`};
      box-shadow: ${$shadowed && boxShadow};
      ${baseCss}

      &:focus {
        ${$isPressable && theme.card.focus}
      }
    `;
  }}
`;

export { StyledCard };
