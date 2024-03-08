import styled, { css } from 'styled-components';
import { Color, Rounded, Spacing } from '@interlay/theme';

import { Flex } from '../Flex';

type StyledCardProps = {
  $bordered: boolean | Color;
  $rounded: Rounded;
  $padding: Spacing;
  $shadowed: boolean;
  $background?: Color;
  $isHoverable?: boolean;
  $isPressable?: boolean;
};

const StyledCard = styled(Flex)<StyledCardProps>`
  border-radius: ${({ $rounded, theme }) => theme.rounded($rounded)};
  padding: ${({ $padding, theme }) => theme.spacing($padding)};
  cursor: ${({ $isPressable }) => $isPressable && 'pointer'};
  outline: none;

  // TODO: add isHoverable
  ${({ $bordered, $isPressable, $shadowed, $background, theme }) => {
    const { border, boxShadow, backgroundColor, ...baseCss } = theme.card.base;

    return css`
      border: ${typeof $bordered === 'boolean' ? border : `1px solid ${$bordered}`};
      box-shadow: ${$shadowed && boxShadow};
      background-color: ${$background ? theme.color($background) : backgroundColor};
      ${baseCss}

      &:focus {
        ${$isPressable && theme.card.focus}
      }
    `;
  }}
`;

export { StyledCard };
