import { createRef } from 'react';
import { testA11y, render } from '@interlay/test-utils';

import { RadioGroup } from '../RadioGroup';
import { Radio } from '../Radio';

describe('Radio', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <RadioGroup aria-label='Coin'>
        <Radio value='BTC'>BTC</Radio>
        <Radio isDisabled value='ETH'>
          ETH
        </Radio>
      </RadioGroup>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();
    const radioRef = createRef<HTMLLabelElement>();

    render(
      <RadioGroup ref={ref} aria-label='Coin'>
        <Radio ref={radioRef} value='BTC'>
          BTC
        </Radio>
        <Radio isDisabled value='ETH'>
          ETH
        </Radio>
      </RadioGroup>
    );

    expect(ref.current).not.toBeNull();
    expect(radioRef.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <RadioGroup aria-label='Coin'>
        <Radio value='BTC'>BTC</Radio>
        <Radio isDisabled value='ETH'>
          ETH
        </Radio>
      </RadioGroup>
    );
  });
});
