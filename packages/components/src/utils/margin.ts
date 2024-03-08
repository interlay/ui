import { css } from 'styled-components';

const marginCSS = ({ theme, ...props }: any) => {
  const marginTop = props.$marginTop || props.$marginY;
  const marginBottom = props.$marginBottom || props.$marginY;
  const marginLeft = props.$marginLeft || props.$marginX;
  const marginRight = props.$marginRight || props.$marginX;

  return css`
    margin: ${props.$margin && theme.spacing(props.$margin)};
    margin-top: ${marginTop && theme.spacing(marginTop)};
    margin-bottom: ${marginBottom && theme.spacing(marginBottom)};
    margin-left: ${marginLeft && theme.spacing(marginLeft)};
    margin-right: ${marginRight && theme.spacing(marginRight)};
  `;
};

export { marginCSS };
