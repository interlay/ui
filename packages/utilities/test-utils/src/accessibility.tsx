import '@testing-library/jest-dom';
import { RenderOptions } from '@testing-library/react';
import { axe, toHaveNoViolations, JestAxeConfigureOptions } from 'jest-axe';
import * as React from 'react';

import { InterlayUIProvider } from '../../../components/src';
import { bobTheme } from '../../../core/theme/src';

import { render } from './render';

const Provider = (props: any) => <InterlayUIProvider {...props} theme={bobTheme} />;

export interface InterlayRenderOptions extends RenderOptions {
  withProvider?: boolean;
}

expect.extend(toHaveNoViolations);

export async function testA11y(
  ui: React.ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions; withProvider?: boolean } = { withProvider: true }
) {
  const { axeOptions } = options;
  const container = React.isValidElement(ui)
    ? render(ui, { wrapper: options.withProvider ? Provider : undefined }).container
    : ui;
  const results = await axe(container as HTMLElement, axeOptions);

  expect(results).toHaveNoViolations();
}
