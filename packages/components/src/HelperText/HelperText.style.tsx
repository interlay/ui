import styled from 'styled-components';

import { visuallyHidden } from '../utils/visually-hidden';

type StyledHelperTextProps = {
  $hasError?: boolean;
  $isHidden?: boolean;
};

const StyledHelperText = styled.div<StyledHelperTextProps>`
  font-weight: ${({ theme }) => theme.fontWeight('medium')};
  ${({ theme }) => theme.typography('xs')}
  color: ${({ $hasError, theme }) => ($hasError ? theme.color('red-500') : theme.color('grey-100'))};
  padding: ${({ theme }) => theme.spacing('xs')} 0;
  ${({ $isHidden }) => $isHidden && visuallyHidden()}
`;

const StyledSubHelperText = styled.p`
  line-height: ${({ theme }) => theme.lineHeight('s')};
`;

export { StyledHelperText, StyledSubHelperText };
