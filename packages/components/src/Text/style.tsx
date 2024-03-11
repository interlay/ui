import { Color, FontWeight, NormalAlignments, Typography } from '@interlay/theme';
import styled, { css } from 'styled-components';

type StyledTextProps = {
  $color: Color | 'inherit';
  $size: Typography;
  $weight: FontWeight;
  $align?: NormalAlignments;
  $rows?: number;
  $noWrap?: boolean;
};

const Text = styled.p<StyledTextProps>`
  ${({ theme, $size }) => theme.typography($size)}
  color: ${({ theme, $color }) => ($color === 'inherit' ? 'inherit' : theme.color($color))};
  font-weight: ${({ theme, $weight }) => theme.fontWeight($weight)};
  text-align: ${({ $align }) => $align};
  white-space: ${({ $noWrap }) => $noWrap && 'nowrap'};

  ${({ $rows }) =>
    $rows &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: ${$rows};
      -webkit-line-clamp: ${$rows};
      -webkit-box-orient: vertical;
    `}
`;

export { Text };
export type { StyledTextProps };
