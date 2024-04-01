import { StyledObject } from 'styled-components';

type SwitchSize = 's' | 'md' | 'lg';

type SwitchTheme = {
  base: StyledObject<object>;
  checked: StyledObject<object>;
  size: Record<
    SwitchSize,
    { base: StyledObject<object>; indicator: StyledObject<object>; checked: { indicator: StyledObject<object> } }
  >;
  focusVisible: string;
  indicator: StyledObject<object>;
};

export type { SwitchTheme, SwitchSize };
