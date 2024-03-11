import { AlertStatus } from '@interlay/theme';
import { ForwardRefExoticComponent } from 'react';

import { FlexProps } from '../Flex';

import { StyledAlert, StyledCheckCircle, StyledInformationCircle, StyledWarning } from './Alert.style';

const iconMap: Record<AlertStatus, ForwardRefExoticComponent<any>> = {
  info: StyledInformationCircle,
  success: StyledCheckCircle,
  error: StyledWarning,
  warning: StyledWarning
};

type Props = {
  status?: AlertStatus;
};

type InheritAttrs = Omit<FlexProps, keyof Props>;

type AlertProps = Props & InheritAttrs;

const Alert = ({ status = 'success', children, ...props }: AlertProps): JSX.Element => {
  const Icon = iconMap[status];

  return (
    <StyledAlert $status={status} alignItems='center' gap='md' role='alert' {...props}>
      <Icon $status={status} size='md' />
      <div>{children}</div>
    </StyledAlert>
  );
};

export { Alert };
export type { AlertProps };
