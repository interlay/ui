import styled from 'styled-components';
import { resolveColor } from '@just_testing13/theme';

import { TextProps } from '../types';

const StyledDt = styled.dt<TextProps>`
  color: ${({ color }) => resolveColor(color)};
`;

const StyledDd = styled.dd<TextProps>`
  color: ${({ color }) => resolveColor(color)};
`;

export { StyledDd, StyledDt };
