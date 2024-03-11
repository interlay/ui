type DividerSizes = 's' | 'md' | 'lg';

type DividerTheme = {
  size: Record<DividerSizes, string>;
};

export type { DividerTheme, DividerSizes };
