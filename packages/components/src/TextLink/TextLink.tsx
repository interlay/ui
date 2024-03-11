import { AriaLinkOptions, useLink } from '@react-aria/link';
import { mergeProps } from '@react-aria/utils';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { Color, FontWeight, Typography } from '@interlay/theme';
import { useDOMRef } from '@interlay/hooks';

import { BaseTextLink, StyledIcon } from './TextLink.style';

type Props = {
  color?: Color;
  external?: boolean;
  isQuiet?: boolean;
  size?: Typography;
  weight?: FontWeight;
  icon?: boolean;
};

type AriaAttrs = Omit<AriaLinkOptions, keyof Props>;

type NativeAttrs = Omit<AnchorHTMLAttributes<unknown>, keyof Props & AriaAttrs>;

type TextLinkProps = Props & NativeAttrs & AriaAttrs;

// TODO: merge this with ButtonLink
const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    { color = 'light', external, isQuiet, size = 'md', weight, icon, children, href, className, ...props },
    ref
  ): JSX.Element => {
    const linkRef = useDOMRef(ref);

    const elementType = href ? 'a' : 'span';

    const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : undefined;

    const ariaProps = {
      ...props,
      ...externalProps,
      href,
      elementType
    };

    const { linkProps } = useLink(ariaProps, linkRef);

    return (
      <BaseTextLink
        ref={linkRef}
        $color={color}
        $isQuiet={!href || isQuiet}
        $size={size}
        $weight={weight}
        as={elementType}
        className={className}
        {...mergeProps(linkProps, externalProps)}
      >
        {children}
        {icon && <StyledIcon />}
      </BaseTextLink>
    );
  }
);

TextLink.displayName = 'TextLink';

export { TextLink };
export type { TextLinkProps };
