import styled from 'styled-components';
import { ArrowTopRightOnSquare } from '@interlay/icons';
import { Color, FontWeight, Typography } from '@interlay/theme';

type BaseTextLinkProps = {
  $color: Color;
  $isQuiet?: boolean;
  $size: Typography;
  $weight?: FontWeight;
};

const BaseTextLink = styled.a<BaseTextLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ $color, theme }) => $color && theme.color($color)};
  ${({ $size, theme }) => $size && theme.typography($size)};
  font-weight: ${({ $weight, theme }) => $weight && theme.fontWeight($weight)};
  text-decoration: ${(props) => (props.$isQuiet ? 'none' : 'underline')};

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;

const StyledIcon = styled(ArrowTopRightOnSquare)`
  margin-left: ${({ theme }) => theme.spacing('s')};
  width: 1em;
  height: 1em;
  color: inherit;
`;

export { BaseTextLink, StyledIcon };
