import styled, { CSSProperties } from 'styled-components';
import { DialogSize } from '@interlay/themev2';

import { overlayCSS } from '../utils/overlay';
import { Dialog, DialogBody } from '../Dialog';

type StyledWrapperProps = {
  $placement: 'top' | 'center';
};

type StyledModalProps = {
  $isOpen?: boolean;
  $size: DialogSize;
};

type StyledDialogProps = {
  $isOpen?: boolean;
  $maxHeight?: CSSProperties['maxHeight'];
};

type StyledModalBodyProps = {
  $noPadding?: boolean;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100dvh;
  visibility: visible;

  display: flex;
  justify-content: center;
  align-items: ${({ $placement }) => ($placement === 'center' ? 'center' : 'flex-start')};
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
  margin: ${({ theme }) => `${theme.spacing('7xl')} ${theme.spacing('xl')}`};
  max-width: ${({ theme, $size }) => theme.dialog.size[$size].maxWidth};
  width: 100%;
`;

const StyledDialog = styled(Dialog)<StyledDialogProps>`
  pointer-events: ${({ $isOpen }) => !$isOpen && 'none'};
  max-height: ${({ theme, $maxHeight }) => $maxHeight || `calc(100dvh - ${theme.spacing('10xl')})`};
`;

const StyledDialogBody = styled(DialogBody)<StyledModalBodyProps>`
  overflow-y: auto;
  position: relative;
  padding: ${({ $noPadding }) => $noPadding && 0};
`;

export { StyledDialog, StyledDialogBody, StyledModal, StyledWrapper };
