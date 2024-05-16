import { forwardRef } from 'react';

import { Icon, IconProps } from './core';

const CheckCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon
    ref={ref}
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
));

CheckCircle.displayName = 'CheckCircle';

export { CheckCircle };
