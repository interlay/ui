import type { Preview } from '@storybook/react';

import React from 'react';

import { InterlayUIProvider } from '../packages/core/system/src';
import { CSSReset } from '../packages/components/src';
import '../packages/core/theme/src/temp/css/theme.interlay.css';
import { bobTheme } from '../packages/core/theme/src';
import './style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: bobTheme.color('dark')
        },
        {
          name: 'light',
          value: bobTheme.color('light')
        }
      ]
    }
  },
  decorators: [
    (Story, { globals: { locale } }) => {
      const direction =
        // @ts-ignore
        locale && new Intl.Locale(locale)?.textInfo?.direction === 'rtl' ? 'rtl' : undefined;

      return (
        <InterlayUIProvider locale={locale} theme={bobTheme}>
          <CSSReset />
          <div dir={direction} lang={locale}>
            <Story />
          </div>
        </InterlayUIProvider>
      );
    }
  ]
};

export default preview;
