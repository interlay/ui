import { css } from 'styled-components';

import { getSpacingResponsiveCSS } from './responsive';

const marginCSS = ({ theme, ...props }: any) => {
  const marginTop = props.$marginTop || props.$marginY;
  const marginBottom = props.$marginBottom || props.$marginY;
  const marginLeft = props.$marginLeft || props.$marginX;
  const marginRight = props.$marginRight || props.$marginX;

  return css`
    ${getSpacingResponsiveCSS(theme, 'margin', props.$margin)}
    ${getSpacingResponsiveCSS(theme, 'margin-top', marginTop)}
  ${getSpacingResponsiveCSS(theme, 'margin-bottom', marginBottom)}
  ${getSpacingResponsiveCSS(theme, 'margin-left', marginLeft)}
  ${getSpacingResponsiveCSS(theme, 'margin-right', marginRight)}
  `;
};

export { marginCSS };
