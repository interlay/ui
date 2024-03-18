import styled, { css } from 'styled-components';

import { Divider } from '../Divider';
import { Flex } from '../Flex';

type StyledStepProps = {
  $status: 'incomplete' | 'complete' | 'active';
};

const StyledStep = styled(Flex)<StyledStepProps>`
  ${({ theme, $status }) => css`
    ${theme.stepper.step.base}
    ${theme.stepper.step[$status]}
  `}
`;

const StyledDivider = styled(Divider)<StyledStepProps>`
  width: 100%;
  align-self: auto;
  flex: 1 1 0%;
  ${({ theme, $status }) => css`
    ${theme.stepper.divider[$status]}
  `}
`;

export { StyledStep, StyledDivider };
