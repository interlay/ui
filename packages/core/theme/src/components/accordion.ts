import { StyledObject } from 'styled-components';

type AccordionVariants = 'light' | 'splitted';

type AccordionTheme = {
  item: {
    base?: StyledObject<object>;
    button?: StyledObject<object>;
    heading?: StyledObject<object>;
    content?: StyledObject<object>;
  };
  variant: Record<
    AccordionVariants,
    {
      base: StyledObject<object>;
      item: {
        base: StyledObject<object>;
      };
    }
  >;
};

export type { AccordionTheme, AccordionVariants };
