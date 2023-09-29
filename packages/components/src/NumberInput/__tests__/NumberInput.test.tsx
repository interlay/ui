import { render } from '@testing-library/react';
import { createRef } from 'react';
import { testA11y } from '@interlay/test-utils';

import { NumberInput } from '..';

describe('NumberInput', () => {
  it('should render correctly', () => {
    const wrapper = render(<NumberInput label='label' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLInputElement>();

    render(<NumberInput ref={ref} label='label' />);

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<NumberInput label='label' />);
  });
});
