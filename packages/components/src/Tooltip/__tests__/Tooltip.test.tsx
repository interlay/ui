import { testA11y } from '@interlay/test-utils';
import { render } from '@testing-library/react';
import { createRef } from 'react';

import { Tooltip } from '..';

describe('Tooltip', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Tooltip isOpen label='tooltip content'>
        trigger
      </Tooltip>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Tooltip ref={ref} isOpen label='tooltip content'>
        trigger
      </Tooltip>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Tooltip isOpen label='tooltip content'>
        trigger
      </Tooltip>
    );
  });
});
