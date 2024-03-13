import { Color, FontWeight, NormalAlignments, Typography } from '@interlay/theme';
import styled, { css } from 'styled-components';

type StyledTextProps = {
  $color: Color | 'inherit';
  $size: Typography | 'inherit';
  $weight: FontWeight | 'inherit';
  $align?: NormalAlignments;
  $rows?: number;
  $noWrap?: boolean;
  $fontFamily?: string;
};

const Text = styled.p<StyledTextProps>`
  ${({ theme, $size }) =>
    $size === 'inherit' ? { fontSize: 'inherit', lineHeight: 'inherit' } : theme.typography($size)}
  color: ${({ theme, $color }) => ($color === 'inherit' ? $color : theme.color($color))};
  font-weight: ${({ theme, $weight }) => ($weight === 'inherit' ? $weight : theme.fontWeight($weight))};
  text-align: ${({ $align }) => $align};
  white-space: ${({ $noWrap }) => $noWrap && 'nowrap'};
  font-family: ${({ $fontFamily }) => $fontFamily};

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
