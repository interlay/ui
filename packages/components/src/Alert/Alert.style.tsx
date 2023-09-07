import { Warning } from '@just_testing13/icons';
import styled from 'styled-components';
import { theme } from '@just_testing13/theme';
import { Status } from '@just_testing13/theme';

import { Flex } from '../Flex';

type StyledAlertProps = {
  $status: Status;
};

const StyledAlert = styled(Flex)<StyledAlertProps>`
  padding: ${theme.spacing.spacing2};
  color: ${({ $status }) => theme.alert.status[$status]};
  border: 1px solid ${({ $status }) => theme.alert.status[$status]};
  background-color: ${({ $status }) => theme.alert.bg[$status]};
  border-radius: ${theme.rounded.md};
  font-size: ${theme.text.xs};
`;

const StyledWarningIcon = styled(Warning)`
  color: inherit;
  width: ${theme.spacing.spacing5};
  height: ${theme.spacing.spacing5};
  flex-shrink: 0;
`;

export { StyledAlert, StyledWarningIcon };
