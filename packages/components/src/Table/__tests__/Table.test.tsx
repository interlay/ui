import { render } from '@testing-library/react';
import { testA11y } from '@interlay/test-utils';
import { createRef } from 'react';

import { Table } from '..';

describe('Table', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Table aria-label='table' columns={[{ name: 'text', uid: 'text' }]} rows={[{ id: 1, text: 'Text' }]} />
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLTableElement>();

    render(
      <Table ref={ref} aria-label='table' columns={[{ name: 'text', uid: 'text' }]} rows={[{ id: 1, text: 'Text' }]} />
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Table aria-label='table' columns={[{ name: 'text', uid: 'text' }]} rows={[{ id: 1, text: 'Text' }]} />
    );
  });
});
