import { render } from '@testing-library/react';

import { Table } from '..';

describe('Table', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Table aria-label='table' columns={[{ name: 'text', uid: 'text' }]} rows={[{ id: 1, text: 'Text' }]} />
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
