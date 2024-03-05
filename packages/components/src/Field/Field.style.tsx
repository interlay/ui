import styled from 'styled-components';
import { Spacing } from '@interlay/themev2';

type StyledFieldProps = {
  $maxWidth?: Spacing;
};

const StyledField = styled.div<StyledFieldProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  max-width: ${({ $maxWidth, theme }) => $maxWidth && theme.spacing($maxWidth)};
`;

export { StyledField };
