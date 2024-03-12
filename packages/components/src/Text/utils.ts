import { StyledTextProps } from './style';
import { TextProps } from './types';

const mapTextProps = <T extends TextProps = TextProps>({
  color = 'light',
  size = 'md',
  weight = 'normal',
  align,
  rows,
  noWrap,
  fontFamily,
  ...props
}: T): Omit<T, 'color' | 'size' | 'align' | 'weight' | 'rows' | 'noWrap' | 'fontFamily'> & StyledTextProps => ({
  ...props,
  $color: color,
  $size: size,
  $weight: weight,
  $align: align,
  $rows: rows,
  $noWrap: noWrap,
  $fontFamily: fontFamily
});

export { mapTextProps };
