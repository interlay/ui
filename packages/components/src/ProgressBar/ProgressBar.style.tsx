import styled, { css } from 'styled-components';
import { Color, ProgressBarSize } from '@interlay/theme';

type StyledTrackProps = {
  $size: ProgressBarSize;
};

type StyledFillProps = {
  $color?: Color;
  $size: ProgressBarSize;
};

const StyledTrack = styled.div<StyledTrackProps>`
  overflow: hidden;
  z-index: 1;
  width: 100%;
  min-width: ${({ theme }) => theme.spacing('2xl')};

  ${({ theme, $size }) => css`
    min-width: ${theme.spacing('2xl')};
    ${theme.progressBar.track}
    ${theme.progressBar.size[$size].track}
  `}
`;

const StyledFill = styled.div<StyledFillProps>`
  border: none;
  transition: width 100ms;
  will-change: width;

  ${({ theme, $size, $color }) => {
    const { backgroundColor, ...fillCss } = theme.progressBar.fill;

    return css`
      background: ${($color && theme.color($color)) || backgroundColor};
      ${fillCss}
      ${theme.progressBar.size[$size].fill}
    `;
  }}
`;

export { StyledFill, StyledTrack };
