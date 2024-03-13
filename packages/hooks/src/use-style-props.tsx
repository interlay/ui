import { MarginProps, PaddingProps } from '@interlay/theme';

type StyledMarginProps = {
  [K in keyof MarginProps as `$${string & K}`]: MarginProps[K];
};

type StyledPaddingProps = {
  [K in keyof PaddingProps as `$${string & K}`]: PaddingProps[K];
};

type StyleProps = StyledMarginProps & StyledPaddingProps;

type ComponentProps<T extends Record<string, any>> = Omit<T, keyof (MarginProps & PaddingProps)>;

type UseStylePropsResult<T extends Record<string, any>> = { styleProps: StyleProps; componentProps: ComponentProps<T> };

// Extracts props that are solely for styling so that they get mapped to styled props
// This approach is used for a set of styling props that could be reused across different component
const useStyleProps = <T extends Record<string, any>>(props: T): UseStylePropsResult<T> => {
  const {
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    paddingX,
    paddingY,
    ...componentProps
  } = props;

  return {
    styleProps: {
      $margin: margin,
      $marginTop: marginTop,
      $marginBottom: marginBottom,
      $marginLeft: marginLeft,
      $marginRight: marginRight,
      $marginX: marginX,
      $marginY: marginY,
      $padding: padding,
      $paddingBottom: paddingBottom,
      $paddingLeft: paddingLeft,
      $paddingRight: paddingRight,
      $paddingTop: paddingTop,
      $paddingX: paddingX,
      $paddingY: paddingY
    },
    componentProps
  };
};

export { useStyleProps };
export type { MarginProps, StyleProps, StyledMarginProps, UseStylePropsResult, StyledPaddingProps };
