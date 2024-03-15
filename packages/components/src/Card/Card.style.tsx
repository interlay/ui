import styled, { css } from 'styled-components';
import { Color, Rounded } from '@interlay/theme';

import { Flex } from '../Flex';

type StyledCardProps = {
  $bordered: boolean | Color;
  $rounded: Rounded;
  $shadowed: boolean;
  $background?: Color;
  $isHoverable?: boolean;
  $isPressable?: boolean;
};

const StyledCard = styled(Flex)<StyledCardProps>`
  border-radius: ${({ $rounded, theme }) => theme.rounded($rounded)};
  cursor: ${({ $isPressable }) => $isPressable && 'pointer'};
  outline: none;

  // TODO: add isHoverable
  ${({ $bordered, $isPressable, $shadowed, $background, theme }) => {
    const { border, boxShadow, backgroundColor, ...baseCss } = theme.card.base;

    return css`
      border: ${typeof $bordered === 'boolean'
        ? $bordered
          ? border
          : undefined
        : `1px solid ${theme.color($bordered)}`};
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
