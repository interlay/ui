import styled, { css } from 'styled-components';
import { TabsSize, theme } from '@interlay/theme';
import { AlignItems } from '@interlay/theme';

import { hideScrollbar } from '../utils/visually-hidden';

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

type TabListWrapperProps = {
  $fullWidth: boolean;
  $size: TabsSize;
  $align: AlignItems;
};

const TabListWrapper = styled.div<TabListWrapperProps>`
  display: ${({ $fullWidth }) => ($fullWidth ? 'flex' : 'inline-flex')};
  align-self: ${({ $align, $fullWidth }) => !$fullWidth && $align};
  position: relative;
  z-index: 0;
  max-width: 100%;
  overflow-x: auto;

  ${hideScrollbar()}

  ${({ theme }) => theme.tabs.base};
  ${({ $size, theme }) => theme.tabs.size[$size].base};
`;

type TabListProps = {
  $fullWidth: boolean;
};

const TabList = styled.div<TabListProps>`
  display: ${({ $fullWidth }) => ($fullWidth ? 'flex' : 'inline-flex')};
  width: 100%;
`;

type StyledTabProps = {
  $fullWidth: boolean;
  $size: TabsSize;
  $isDisabled: boolean;
};

const StyledTab = styled.div<StyledTabProps>`
  flex: ${({ $fullWidth }) => $fullWidth && '1'};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: ${({ $isDisabled }) => !$isDisabled && 'pointer'};
  user-select: none;
  outline: none;
  opacity: ${({ $isDisabled }) => $isDisabled && '.5'};
  overflow: hidden;

  ${({ theme, $size }) => {
    return css`
      ${theme.tabs.item.base}
      ${theme.tabs.size[$size].item}
    `;
  }};
`;

type TabSelectionProps = {
  $isFocusVisible: boolean;
  $width: number;
  $transform: string;
  $size: TabsSize;
};

const TabSelection = styled.div<TabSelectionProps>`
  position: absolute;
  top: ${({ $size, theme }) => theme.tabs.size[$size].base.padding};
  bottom: ${({ $size, theme }) => theme.tabs.size[$size].base.padding};
  left: 0;
  border-radius: ${({ theme }) => theme.tabs.item.base.borderRadius};
  background-color: ${({ theme }) => theme.tabs.item.base.backgroundColor};
  will-change: transform, width;
  transition:
    transform ${theme.transition.duration.duration150}ms,
    width ${theme.transition.duration.duration100}ms;
  z-index: -1;

  width: ${(props) => props.$width}px;
  transform: ${(props) => props.$transform};

  ${({ theme }) => {
    return css`
      ${theme.tabs.item.selected}
    `;
  }};

  ${(props) =>
    props.$isFocusVisible &&
    css`
      &:after {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: ${theme.rounded.md};
        border: 2px solid ${theme.tabs.active.bg};
        z-index: 3;
      }
    `}
`;

export { StyledTab, StyledTabs, TabList, TabListWrapper, TabSelection };
