import styled, { css } from 'styled-components';
import { DialogSize } from '@interlay/themev2';

import { Flex } from '../Flex';
import { H3 } from '../Text';
import { Button } from '../Button';

type StyledDialogProps = {
  $size: DialogSize;
};

const StyledDialog = styled.section<StyledDialogProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  outline: none;

  width: 100%;
  ${({ theme, $size }) => css`
    ${theme.dialog.base}
    ${theme.dialog.size[$size]}
  `}
`;

const StyledCloseBtn = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing('md')};
  right: ${({ theme }) => theme.spacing('md')};
  z-index: 100;
`;

const StyledDialogHeader = styled(H3)`
  ${({ theme }) => theme.dialog.header};

  overflow: hidden;
  flex-shrink: 0;
`;

const StyledDialogBody = styled(Flex)`
  ${({ theme }) => theme.dialog.body};

  flex: 1 1 auto;
`;

const StyledDialogFooter = styled(Flex)`
  ${({ theme }) => theme.dialog.footer};
`;

export { StyledCloseBtn, StyledDialog, StyledDialogBody, StyledDialogFooter, StyledDialogHeader };
