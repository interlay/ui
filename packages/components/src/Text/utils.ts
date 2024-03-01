import { StyledTextProps } from './style';
import { TextProps } from './types';

const mapTextProps = <T extends TextProps = TextProps>({
  color = 'light',
  size = 'md',
  weight = 'normal',
  align,
  rows,
  noWrap,
  ...props
}: T): Omit<T, 'color' | 'size' | 'align' | 'weight' | 'rows' | 'noWrap'> & StyledTextProps => ({
  ...props,
  $color: color,
  $size: size,
  $weight: weight,
  $align: align,
  $rows: rows,
  $noWrap: noWrap
});

export { mapTextProps };
