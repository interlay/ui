import { forwardRef } from 'react';

import { Icon, IconProps } from './core';

const ExclamationCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
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
      d='M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
));

ExclamationCircle.displayName = 'ExclamationCircle';

export { ExclamationCircle };
