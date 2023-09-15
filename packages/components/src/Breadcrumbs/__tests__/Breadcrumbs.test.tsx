import { render } from '@testing-library/react';

import { BreadcrumbItem, Breadcrumbs } from '..';

describe('Breadcrumbs', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Breadcrumbs>
        <BreadcrumbItem>page</BreadcrumbItem>
      </Breadcrumbs>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
