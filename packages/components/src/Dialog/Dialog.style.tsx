import styled, { css } from 'styled-components';
import { DialogSize } from '@interlay/themev2';

import { Flex } from '../Flex';
import { H3 } from '../Text';
import { Button } from '../Button';

type StyledDialogProps = {
  $size: DialogSize;
};

const StyledDialog = styled.section<StyledDialogProps>`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  outline: none;

  ${({ theme, $size }) => css`
    ${theme.dialog.base}
    ${theme.dialog.size[$size].base}
  `}
`;

const StyledCloseCTA = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing('s')};
  right: ${({ theme }) => theme.spacing('s')};
  z-index: 100;
`;

const StyledDialogHeader = styled(H3)<StyledDialogProps>`
  ${({ $size, theme }) => theme.dialog.size[$size].header};

  overflow: hidden;
  flex-shrink: 0;
`;

const StyledDialogBody = styled(Flex)<StyledDialogProps>`
  ${({ $size, theme }) => theme.dialog.size[$size].body};

  flex: 1 1 auto;
`;

const StyledDialogFooter = styled(Flex)<StyledDialogProps>`
  ${({ $size, theme }) => theme.dialog.size[$size].footer};
`;

export { StyledCloseCTA, StyledDialog, StyledDialogBody, StyledDialogFooter, StyledDialogHeader };
