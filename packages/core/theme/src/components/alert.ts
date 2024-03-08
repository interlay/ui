import { StyledObject } from 'styled-components';

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

type AlertTheme = {
  base: StyledObject<object>;
  status: Record<AlertStatus, StyledObject<object>>;
};

export type { AlertTheme, AlertStatus };
