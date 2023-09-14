import type { Preview } from '@storybook/react';
import React from 'react';
import { InterlayUIProvider } from "../packages/core/system/src";
import "../packages/core/theme/src/css/theme.interlay.css";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, {globals: {locale}}) => {
      const direction =
        // @ts-ignore
        locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "rtl" : undefined;

      return (
        <InterlayUIProvider locale={locale}>
          <div lang={locale} dir={direction}>
            <Story />
          </div>
        </InterlayUIProvider>
      );
    },
  ]
};

export default preview;
