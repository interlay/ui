import { StyledObject } from 'styled-components';

type AlertStatus = 'info' | 'success' | 'warning' | 'error';

type AlertVariant = 'filled' | 'outlined' | 'default';

type AlertTheme = {
  base: StyledObject<object>;
  icon: StyledObject<object>;
  title: StyledObject<object>;
  content: StyledObject<object>;
  closeBtn: StyledObject<object>;
  closeBtnWrapper: StyledObject<object>;
  status: Record<
    AlertStatus,
    Record<AlertVariant, { base: StyledObject<object>; icon: StyledObject<object>; title: StyledObject<object> }>
  >;
};

export type { AlertTheme, AlertStatus, AlertVariant };
