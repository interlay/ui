import { css } from 'styled-components';

import { getSpacingResponsiveCSS } from './responsive';

const paddingCSS = ({ theme, ...props }: any) => {
  const paddingTop = props.$paddingTop || props.$paddingY;
  const paddingBottom = props.$paddingBottom || props.$paddingY;
  const paddingLeft = props.$paddingLeft || props.$paddingX;
  const paddingRight = props.$paddingRight || props.$paddingX;

  return css`
    ${getSpacingResponsiveCSS(theme, 'padding', props.$padding)}
    ${getSpacingResponsiveCSS(theme, 'padding-top', paddingTop)}
  ${getSpacingResponsiveCSS(theme, 'padding-bottom', paddingBottom)}
  ${getSpacingResponsiveCSS(theme, 'padding-left', paddingLeft)}
  ${getSpacingResponsiveCSS(theme, 'padding-right', paddingRight)}
  `;
};

export { paddingCSS };
