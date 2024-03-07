import styled, { css } from 'styled-components';
import { theme } from '@interlay/theme';

import { Flex } from '../Flex';

const StyledList = styled(Flex)``;

type StyledListItemProps = {
  $isDisabled: boolean;
  $isHovered: boolean;
  $isInteractable: boolean;
  $isFocusVisible: boolean;
};

const StyledListItem = styled.div<StyledListItemProps>`
  flex: 1;
  align-self: stretch;
  padding: ${theme.spacing.spacing3};
  color: ${theme.colors.textPrimary};
  cursor: ${({ $isInteractable }) => $isInteractable && 'pointer'};
  outline: ${({ $isFocusVisible }) => !$isFocusVisible && 'none'};
  opacity: ${({ $isDisabled }) => $isDisabled && 0.5};
  white-space: nowrap;

  ${({ theme, $isHovered }) => {
    return css`
      ${theme.list.item.base}
      ${$isHovered && theme.list.item.hover}

      &[aria-selected='true'] {
        ${theme.list.item.selected};
      }
    `;
  }}
`;

export { StyledList, StyledListItem };
