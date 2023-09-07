import styled from 'styled-components';
import { ArrowTopRightOnSquare } from '@just_testing13/icons';
import { theme, resolveColor, resolveHeight } from '@just_testing13/theme';
import { Colors, FontSize, FontWeight } from '@just_testing13/theme';

type BaseTextLinkProps = {
  $color?: Colors;
  $underlined?: boolean;
  $size?: FontSize;
  $weight?: FontWeight;
};

const BaseTextLink = styled.a<BaseTextLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ $color }) => resolveColor($color)};
  font-size: ${({ $size }) => $size && theme.text[$size]};
  line-height: ${({ $size }) => resolveHeight($size)};
  font-weight: ${({ $weight }) => $weight && theme.fontWeight[$weight]};
  text-decoration: ${(props) => props.$underlined && 'underline'};

  &:hover,
  &:focus-visible {
    text-decoration: ${(props) => (props.$underlined ? 'underline double' : 'underline')};
  }
`;

const StyledIcon = styled(ArrowTopRightOnSquare)`
  margin-left: ${theme.spacing.spacing2};
  width: 1em;
  height: 1em;
  color: inherit;
`;

export { BaseTextLink, StyledIcon };
