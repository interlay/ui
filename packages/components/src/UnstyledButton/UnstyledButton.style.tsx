import styled from 'styled-components';

type StyledButtonProps = {
  $isFocusVisible?: boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 0;
  appearance: none;
  text-align: left;
  text-decoration: none;
  color: inherit;
  touch-action: manipulation;
  outline: ${({ $isFocusVisible }) => !$isFocusVisible && 'none'};
`;

export { StyledButton };
