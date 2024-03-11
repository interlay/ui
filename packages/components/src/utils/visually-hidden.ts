import { css } from 'styled-components';

const hideScrollbar = () => css`
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const visuallyHidden = () => css`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%);
  height: 1px;
  margin: 0px -1px -1px 0px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export { hideScrollbar, visuallyHidden };
