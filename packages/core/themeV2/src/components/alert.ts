import { Rounded, Spacing } from '../core';

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

type AlertSatusParams = {
  border: string;
  bg: string;
};

type AlertTheme = {
  padding: Spacing;
  rounded: Rounded;
  status: Record<AlertStatus, AlertSatusParams>;
};

export type { AlertTheme, AlertStatus };
