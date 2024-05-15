import { CheckCircle, ExclamationCircle, InformationCircle, Warning } from '@interlay/icons';
import { AlertStatus, AlertVariant, Rounded } from '@interlay/theme';
import styled, { css } from 'styled-components';

import { Button } from '../Button';
import { Flex } from '../Flex';

type StyledAlertProps = {
  $status: AlertStatus;
  $variant: AlertVariant;
  $rounded?: Rounded;
};

const StyledAlert = styled(Flex)<StyledAlertProps>`
  ${({ $status, $variant, $rounded, theme }) => css`
    ${theme.alert.base}
    ${theme.alert.status[$status][$variant].base}
  border-radius: ${$rounded && theme.rounded($rounded)};
  `}
`;

const StyledAlertTitle = styled.div<StyledAlertProps>`
  ${({ $status, $variant, theme }) => css`
    ${theme.alert.title}
    ${theme.alert.status[$status][$variant].title}
  `}
`;

const StyledInformationCircle = styled(InformationCircle)<StyledAlertProps>`
  ${({ $status, $variant, theme }) => css`
    ${theme.alert.status[$status][$variant].icon}
  `}
`;

const StyledCheckCircle = styled(CheckCircle)<StyledAlertProps>`
  ${({ $status, $variant, theme }) => css`
    ${theme.alert.status[$status][$variant].icon}
  `}
`;

const StyledWarning = styled(Warning)<StyledAlertProps>`
  ${({ $status, $variant, theme }) => css`
    ${theme.alert.status[$status][$variant].icon}
  `}
`;

const StyledExclamationCircle = styled(ExclamationCircle)<StyledAlertProps>`
  ${({ $status, $variant, theme }) => css`
    ${theme.alert.status[$status][$variant].icon}
  `}
`;

const StyledIconWrapper = styled.div`
  display: flex;

  ${({ theme }) => css`
    ${theme.alert.icon}
  `}
`;

const StyledContent = styled.div`
  min-width: 0px;
  overflow: auto;

  ${({ theme }) => css`
    ${theme.alert.content}
  `}
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  color: inherit;

  ${({ theme }) => css`
    ${theme.alert.closeBtn}
  `};
`;

const StyledButtonWrapper = styled.div`
  margin-left: auto;
  padding-left: ${({ theme }) => theme.spacing('xl')};
  ${({ theme }) => css`
    ${theme.alert.closeBtnWrapper}
  `};
`;

export {
  StyledAlert,
  StyledAlertTitle,
  StyledCheckCircle,
  StyledContent,
  StyledButtonWrapper,
  StyledButton,
  StyledExclamationCircle,
  StyledIconWrapper,
  StyledInformationCircle,
  StyledWarning
};
