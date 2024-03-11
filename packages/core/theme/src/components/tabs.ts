import { StyledObject } from 'styled-components';

type TabsSize = 's' | 'md' | 'lg';

type TabsTheme = {
  base: StyledObject<object>;
  item: {
    base: StyledObject<object>;
    hover: StyledObject<object>;
    focus: StyledObject<object>;
    selected: StyledObject<object>;
  };
  size: Record<
    TabsSize,
    {
      base: StyledObject<object>;
      item: StyledObject<object>;
    }
  >;
};

export type { TabsSize, TabsTheme };
