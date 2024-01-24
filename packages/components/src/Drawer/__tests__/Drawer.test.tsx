import { render } from '@testing-library/react';
import { createRef } from 'react';
import { testA11y } from '@interlay/test-utils';

import { Drawer } from '..';

describe('Drawer', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Drawer isOpen onClose={jest.fn}>
        content
      </Drawer>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Drawer ref={ref} isOpen onClose={jest.fn}>
        content
      </Drawer>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Drawer isOpen onClose={jest.fn}>
        content
      </Drawer>
    );
  });
});
