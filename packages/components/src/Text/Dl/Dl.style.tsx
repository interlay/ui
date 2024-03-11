import styled from 'styled-components';

import { TextProps } from '../types';

const StyledDt = styled.dt<TextProps>`
  color: ${({ color, theme }) => color && theme.color(color)};
`;

const StyledDd = styled.dd<TextProps>`
  color: ${({ color, theme }) => color && theme.color(color)};
`;

export { StyledDd, StyledDt };
