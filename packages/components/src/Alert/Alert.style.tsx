import { CheckCircle, InformationCircle, Warning } from '@interlay/icons';
import styled, { css } from 'styled-components';
import { AlertStatus } from '@interlay/themev2';

import { Flex } from '../Flex';

type StyledAlertProps = {
  $status: AlertStatus;
};

// FIXME: waiting on JAy
const StyledAlert = styled(Flex)<StyledAlertProps>`
  ${({ $status, theme }) => css`
    ${theme.alert.base}
    ${theme.alert.status[$status]}
  `}
`;

const StyledInformationCircle = styled(InformationCircle)<StyledAlertProps>`
  ${({ $status, theme }) => css`
    ${theme.alert.status[$status]}
  `}
`;

const StyledCheckCircle = styled(CheckCircle)<StyledAlertProps>`
  ${({ $status, theme }) => css`
    ${theme.alert.base}
    ${theme.alert.status[$status]}
  `}
`;

const StyledWarning = styled(Warning)<StyledAlertProps>`
  ${({ $status, theme }) => css`
    ${theme.alert.status[$status].color}
  `}
`;

export { StyledAlert, StyledInformationCircle, StyledCheckCircle, StyledWarning };
