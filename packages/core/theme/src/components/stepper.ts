import { StyledObject } from 'styled-components';

type StepperTheme = {
  step: {
    base: StyledObject<object>;
    active: StyledObject<object>;
    incomplete: StyledObject<object>;
    complete: StyledObject<object>;
  };
  divider: {
    active: StyledObject<object>;
    incomplete: StyledObject<object>;
    complete: StyledObject<object>;
  };
};

export type { StepperTheme };
