import { XMark } from '@interlay/icons';
import { AlertStatus, AlertVariant, Rounded } from '@interlay/theme';
import { ForwardRefExoticComponent, ReactNode } from 'react';

import { FlexProps } from '../Flex';

import {
  StyledAlert,
  StyledAlertTitle,
  StyledButton,
  StyledButtonWrapper,
  StyledCheckCircle,
  StyledContent,
  StyledExclamationCircle,
  StyledIconWrapper,
  StyledInformationCircle,
  StyledWarning
} from './Alert.style';

const iconMap: Record<AlertStatus, ForwardRefExoticComponent<any>> = {
  info: StyledInformationCircle,
  success: StyledCheckCircle,
  error: StyledExclamationCircle,
  warning: StyledWarning
};

type Props = {
  status?: AlertStatus;
  variant?: AlertVariant;
  rounded?: Rounded;
  title?: ReactNode;
  onClose?: () => void;
};

type InheritAttrs = Omit<FlexProps, keyof Props>;

type AlertProps = Props & InheritAttrs;

const Alert = ({
  status = 'success',
  variant = 'default',
  rounded,
  children,
  title,
  onClose,
  ...props
}: AlertProps): JSX.Element => {
  const Icon = iconMap[status];

  return (
    <StyledAlert $rounded={rounded} $status={status} $variant={variant} role='alert' {...props}>
      <StyledIconWrapper>
        <Icon $status={status} $variant={variant} size='s' strokeWidth='2' />
      </StyledIconWrapper>
      <StyledContent>
        {title && (
          <StyledAlertTitle $status={status} $variant={variant}>
            {title}
          </StyledAlertTitle>
        )}
        {children}
      </StyledContent>
      {onClose && (
        <StyledButtonWrapper>
          <StyledButton isIconOnly aria-label='close' size='s' variant='ghost' onPress={onClose}>
            <XMark color='inherit' size='s' />
          </StyledButton>
        </StyledButtonWrapper>
      )}
    </StyledAlert>
  );
};

export { Alert };
export type { AlertProps };
