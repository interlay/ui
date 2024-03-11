import styled, { CSSProperties } from 'styled-components';

import { Flex } from '../Flex';

type StyledFieldProps = {
  $maxWidth?: CSSProperties['maxWidth'];
  $fullWidth?: boolean;
};

const StyledFieldElWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  height: 100%;
`;

const StyledField = styled(Flex)<StyledFieldProps>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  width: ${({ $fullWidth, $maxWidth }) => ($fullWidth || $maxWidth) && '100%'};
`;

export { StyledField, StyledFieldElWrapper };
