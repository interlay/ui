import '@testing-library/jest-dom';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { InterlayUIProvider } from '../../../components/src';
import { bobTheme } from '../../../core/theme/src';

const Provider = (props: any) => <InterlayUIProvider {...props} theme={bobTheme} />;

export interface InterlayRenderOptions extends RenderOptions {
  withProvider?: boolean;
}

expect.extend(toHaveNoViolations);

export function render(
  ui: React.ReactElement,
  { withProvider, ...options }: InterlayRenderOptions = {
    withProvider: true
  }
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  if (withProvider) {
    options.wrapper = Provider;
  }

  const user = userEvent.setup();

  const result = rtlRender(ui, options);

  return { user, ...result };
}
