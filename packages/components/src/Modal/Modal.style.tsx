import styled from 'styled-components';

import { overlayCSS } from '../utils/overlay';
import { Dialog, DialogBody } from '../Dialog';

type StyledModalProps = {
  $isOpen?: boolean;
  $placement: 'top' | 'center';
  $scrollBehavior: 'inside' | 'outside';
};

type StyledDialogProps = {
  $scrollBehavior: 'inside' | 'outside';
  $isOpen?: boolean;
};

type StyledModalBodyProps = {
  $scrollBehavior: 'inside' | 'outside';
  $noPadding?: boolean;
};

const StyledWrapper = styled.div<StyledModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100dvh;
  visibility: visible;

  display: flex;
  justify-content: center;
  align-items: ${({ $placement, $scrollBehavior }) =>
    $scrollBehavior === 'inside' && $placement === 'center' ? 'center' : 'flex-start'};

  overflow: ${({ $scrollBehavior }) => $scrollBehavior === 'outside' && 'auto'};
`;

const StyledModal = styled.div<StyledModalProps>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : `translateY(20px)`)};
  ${({ $isOpen }) => overlayCSS(!!$isOpen)}
  // Overrides overlayCSS properties, because react-aria Overlay
  // contains a FocusScope that will ignore this element if it is
  // visually hidden
  visibility: visible;
  // Allows scroll on the modal
  pointer-events: auto;
  transition: ${({ $isOpen }) =>
    $isOpen
      ? 'transform .15s cubic-bezier(0,0,0.4,1) .1s, opacity .15s cubic-bezier(0,0,0.4,1)'
      : 'opacity .1s cubic-bezier(0.5,0,1,1), visibility 0s linear, transform 0s linear .1s'};

  outline: none;

  height: ${({ $scrollBehavior }) => $scrollBehavior === 'inside' && '100dvh'};
`;

const StyledDialog = styled(Dialog)<StyledDialogProps>`
  margin: ${({ theme }) => `${theme.spacing('7xl')} ${theme.spacing('xl')}`};

  max-height: ${({ $scrollBehavior, theme }) =>
    $scrollBehavior === 'inside' && `calc(100% - ${theme.spacing('10xl')})`};
  pointer-events: ${({ $isOpen }) => !$isOpen && 'none'};
`;

const StyledDialogBody = styled(DialogBody)<StyledModalBodyProps>`
  overflow-y: ${({ $scrollBehavior }) => $scrollBehavior === 'inside' && 'auto'};
  position: relative;
  padding: ${({ $noPadding }) => $noPadding && 0};
`;

export { StyledDialog, StyledDialogBody, StyledModal, StyledWrapper };
