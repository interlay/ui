import styled from 'styled-components';
import { LabelPosition } from '@interlay/theme';

type StyledLabelProps = {
  $position: LabelPosition;
};

const StyledLabel = styled.label<StyledLabelProps>`
  ${({ theme }) => theme.typography('xs')}
  color: ${({ theme }) => theme.color('light')};
  font-weight: ${({ theme }) => theme.fontWeight('medium')};

  // FIXME: padding bottom when position is on side
  padding: ${({ theme, $position }) =>
    $position === 'top' ? `${theme.spacing('xs')} 0` : `${theme.spacing('s')} ${theme.spacing('xs')} 0.625rem 0`};
  align-self: flex-start;
`;

export { StyledLabel };
