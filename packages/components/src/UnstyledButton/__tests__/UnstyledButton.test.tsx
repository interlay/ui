import { createRef } from 'react';
import { testA11y, render } from '@interlay/test-utils';

import { UnstyledButton } from '..';

describe('UnstyledButton', () => {
  it('should render correctly', () => {
    const wrapper = render(<UnstyledButton>Button</UnstyledButton>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<UnstyledButton ref={ref}>Button</UnstyledButton>);

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<UnstyledButton>Button</UnstyledButton>);
  });
});
