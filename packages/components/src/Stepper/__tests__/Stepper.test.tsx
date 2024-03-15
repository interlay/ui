import { createRef } from 'react';
import { testA11y, render } from '@interlay/test-utils';

import { Stepper, StepperItem } from '..';

describe('Stepper', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Stepper aria-label='progress'>
        <StepperItem>item</StepperItem>
      </Stepper>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Stepper ref={ref} aria-label='progress'>
        <StepperItem>item</StepperItem>
      </Stepper>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Stepper aria-label='progress'>
        <StepperItem>item</StepperItem>
      </Stepper>
    );
  });
});
