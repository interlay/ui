import styled from 'styled-components';

import { overlayCSS } from '../utils/overlay';
import { Dialog } from '../Dialog';

type StyledModalProps = {
  $isOpen?: boolean;
};

type StyledDialogProps = {
  $isOpen?: boolean;
};

const StyledModal = styled.div<StyledModalProps>`
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(100%)' : 'translateX(0%)')};
  ${({ $isOpen }) => overlayCSS(!!$isOpen)}

  visibility: visible;
  pointer-events: auto;

  outline: none;
  opacity: 1;

  overflow-y: scroll;
  z-index: 2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: auto;
  right: 100%;

  height: 100%;

  transition: transform ${({ $isOpen }) => ($isOpen ? '250ms' : '100ms')} ease-in-out;

  ${({ theme }) => theme.drawer};
`;

const StyledDialog = styled(Dialog)<StyledDialogProps>`
  pointer-events: ${({ $isOpen }) => !$isOpen && 'none'};
  background: none;
  border: none;
  border-radius: 0px;
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  outline: none;
  padding: ${({ theme }) => theme.spacing('md')};
`;

export { StyledDialog, StyledModal };
