import { createRef } from 'react';
import { testA11y, render } from '@interlay/test-utils';

import { HelperText } from '..';

describe('HelperText', () => {
  it('should render correctly', () => {
    const wrapper = render(<HelperText>text</HelperText>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(<HelperText ref={ref}>text</HelperText>);

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<HelperText>text</HelperText>);
  });
});
