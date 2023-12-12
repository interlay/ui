import { forwardRef } from 'react';

import { Icon, IconProps } from './core';

const ArrowLongRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon
    {...props}
    ref={ref}
    fill='none'
    stroke='currentColor'
    stroke-width='1.5'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' strokeLinecap='round' strokeLinejoin='round' />
  </Icon>
));

ArrowLongRight.displayName = 'ArrowLongRight';

export { ArrowLongRight };
