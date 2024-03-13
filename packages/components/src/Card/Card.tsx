import { useButton } from '@react-aria/button';
import { mergeProps } from '@react-aria/utils';
import { PressEvent } from '@react-types/shared';
import { forwardRef } from 'react';
import { useDOMRef } from '@interlay/hooks';
import { Color, Rounded } from '@interlay/theme';

import { FlexProps } from '../Flex';

import { StyledCard } from './Card.style';

type Props = {
  isHoverable?: boolean;
  isPressable?: boolean;
  isDisabled?: boolean;
  background?: Color;
  bordered?: boolean | Color;
  rounded?: Rounded;
  shadowed?: boolean;
  onPress?: (e: PressEvent) => void;
};

type InheritAttrs = Omit<FlexProps, keyof Props>;

type CardProps = Props & InheritAttrs;

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      direction = 'column',
      background,
      isHoverable,
      isPressable,
      children,
      elementType,
      isDisabled,
      rounded = 'xl',
      padding = 'xl',
      shadowed = false,
      bordered = true,
      ...props
    },
    ref
  ): JSX.Element => {
    const cardRef = useDOMRef(ref);
    const { buttonProps } = useButton(
      { elementType: elementType || 'div', isDisabled: !isPressable || isDisabled, ...props },
      cardRef
    );

    return (
      <StyledCard
        ref={cardRef}
        $background={background}
        $bordered={bordered}
        $isHoverable={isHoverable}
        $isPressable={isPressable}
        $rounded={rounded}
        $shadowed={shadowed}
        direction={direction}
        elementType={elementType}
        padding={padding}
        {...mergeProps(props, isPressable ? buttonProps : {})}
      >
        {children}
      </StyledCard>
    );
  }
);

Card.displayName = 'Card';

export { Card };
export type { CardProps };
