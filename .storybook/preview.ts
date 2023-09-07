import type { Preview } from '@storybook/react';
import "../packages/theme/src/css/theme.interlay.css"

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
  
};

export default preview;
