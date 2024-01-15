import styled from 'styled-components';
import { ChevronDown } from '@interlay/icons';
import { theme } from '@interlay/theme';

import { H3 } from '../Text';

type StyledAccordionProps = {
  $isDisabled: boolean;
  $isExpanded: boolean;
};

type StyledAccordionItemButtonProps = {
  $isDisabled: boolean;
  $isFocusVisible: boolean;
};

type StyledAccordionItemRegionProps = {
  $isExpanded: boolean;
};

type StyledAccordionItemContentProps = {
  $isExpanded: boolean;
};

const StyledAccordionItemWrapper = styled.div<Pick<StyledAccordionProps, '$isDisabled'>>`
  z-index: inherit;
  position: relative;
  opacity: ${({ $isDisabled }) => $isDisabled && '0.5'};
`;

const StyledAccordionItemHeading = styled(H3)`
  margin: 0;
  font-weight: ${theme.fontWeight.semibold};
`;

const StyledAccordionItemButton = styled.button<StyledAccordionItemButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.spacing4};
  min-height: 3.25rem;
  text-overflow: ellipsis;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'default' : 'pointer')};
  appearance: none;
  background-color: inherit;
  border: 0;
  width: 100%;
  color: inherit;
  font: inherit;
  outline: ${({ $isFocusVisible }) => !$isFocusVisible && 'none'};
`;

const StyledChevronDown = styled(ChevronDown)<Pick<StyledAccordionProps, '$isExpanded'>>`
  transform: ${({ $isExpanded }) => $isExpanded && 'rotate(-180deg)'};
  transition: transform ${theme.transition.duration.duration150}ms ease;
`;

const StyledAccordionItemRegion = styled.div<StyledAccordionItemRegionProps>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isExpanded ? '1fr' : '0fr')};
  transition: all 200ms ease 0ms;
`;

const StyledAccordionItemContent = styled.div<StyledAccordionItemContentProps>`
  overflow: hidden;
  padding-top: 0;
  padding-left: ${theme.spacing.spacing4};
  padding-right: ${theme.spacing.spacing4};
  padding-bottom: ${({ $isExpanded }) => ($isExpanded ? theme.spacing.spacing4 : 0)};
  transition: all 200ms ease 0ms;
`;

export {
  StyledAccordionItemButton,
  StyledAccordionItemContent,
  StyledAccordionItemHeading,
  StyledAccordionItemRegion,
  StyledAccordionItemWrapper,
  StyledChevronDown
};
