import { Placement } from '@interlay/theme';
import { css } from 'styled-components';

const getOverlayPlacementCSS = (placement: Placement) => {
  switch (placement) {
    case 'bottom':
      return css`
        transform: translateY(6px);
      `;
    case 'right':
      return css`
        transform: translateX(6px);
      `;
    case 'left':
      return css`
        transform: translateX(-6px);
      `;
    case 'top':
    default:
      return css`
        transform: translateY(-6px);
      `;
  }
};

const overlayCSS = (isOpen: boolean) => css`
  visibility: ${isOpen ? 'visible' : 'hidden'};
  opacity: ${isOpen ? 1 : 0};
  pointer-events: ${isOpen ? 'auto' : 'none'};
  transition:
    transform 100ms ease-in-out,
    opacity 100ms ease-in-out,
    visibility 0ms linear 100ms;
`;

export { getOverlayPlacementCSS, overlayCSS };
