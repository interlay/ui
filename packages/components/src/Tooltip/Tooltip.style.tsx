import styled, { css } from 'styled-components';
import { Placement } from '@interlay/theme';

import { getOverlayPlacementCSS, overlayCSS } from '../utils/overlay';

type StyledTooltipProps = {
  $placement: Placement;
  $isOpen: boolean;
};

type StyledTooltipTipProps = {
  $placement: Placement;
};

const StyledTooltip = styled.div<StyledTooltipProps>`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  vertical-align: top;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
  cursor: default;
  user-select: none;

  ${({ $isOpen }) => overlayCSS($isOpen)}
  ${({ $isOpen, $placement }) => $isOpen && getOverlayPlacementCSS($placement)}
  ${({ $placement }) => {
    switch ($placement) {
      case 'top':
      default:
        return css`
          margin-bottom: 3px;
        `;
      case 'bottom':
        return css`
          margin-top: 3px;
        `;
      case 'right':
        return css`
          margin-left: 3px;
        `;
      case 'left':
        return css`
          margin-right: 3px;
        `;
    }
  }}
  ${({ theme }) => theme.tooltip}
`;

const StyledTooltipTip = styled.span<StyledTooltipTipProps>`
  position: absolute;
  height: 0;
  width: 0;
  border-style: solid;
  border-width: 3px;
  border-top-color: ${({ theme }) => theme.tooltip.backgroundColor};
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;

  ${({ $placement }) => {
    switch ($placement) {
      case 'top':
      default:
        return css`
          top: 100%;
          left: 50%;
          margin-left: calc(5px * -1);
        `;
      case 'bottom':
        return css`
          bottom: 100%;
          left: 50%;
          margin-left: calc(5px * -1);
          transform: rotate(-180deg);
        `;
      case 'right':
        return css`
          right: 100%;
          top: 50%;
          margin-top: calc(5px * -1);
          transform: rotate(90deg);
        `;
      case 'left':
        return css`
          left: 100%;
          top: 50%;
          margin-top: calc(5px * -1);
          transform: rotate(-90deg);
        `;
    }
  }}
`;

const StyledTooltipLabel = styled.div`
  max-inline-size: 200px;
`;

export { StyledTooltip, StyledTooltipLabel, StyledTooltipTip };
