import type { ModalProviderProps } from '@react-aria/overlays';

import { I18nProvider, I18nProviderProps } from '@react-aria/i18n';
import { OverlayProvider } from '@react-aria/overlays';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface InterlayUIProviderProps extends Omit<ModalProviderProps, 'children'> {
  children: React.ReactNode;
  /**
   * The locale to apply to the children.
   * @default "en-US"
   */
  locale?: I18nProviderProps['locale'];
  // TODO: make required
  theme?: DefaultTheme;
}

const InterlayUIProvider: React.FC<InterlayUIProviderProps> = ({
  children,
  locale = 'en-US',
  theme = {} as DefaultTheme,
  ...otherProps
}) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nProvider locale={locale}>
        <OverlayProvider {...otherProps}>
          <div style={{ isolation: 'isolate' }}>{children}</div>
        </OverlayProvider>
      </I18nProvider>
    </ThemeProvider>
  );
};

export { InterlayUIProvider };
export type { InterlayUIProviderProps };
