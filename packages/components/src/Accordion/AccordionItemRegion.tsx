import { HTMLAttributes } from 'react';

import { StyledAccordionItemContent, StyledAccordionItemRegion } from './Accordion.style';

type Props = {
  isExpanded: boolean;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type AccordionItemRegionProps = Props & NativeAttrs;

const AccordionItemRegion = ({ isExpanded, children, ...props }: AccordionItemRegionProps): JSX.Element => {
  return (
    <StyledAccordionItemRegion {...props} $isExpanded={isExpanded}>
      <StyledAccordionItemContent $isExpanded={isExpanded}>{children}</StyledAccordionItemContent>
    </StyledAccordionItemRegion>
  );
};

export { AccordionItemRegion };
export type { AccordionItemRegionProps };
