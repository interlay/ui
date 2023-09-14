import { render } from '@testing-library/react';

import { CoinIcon } from '..';

describe('CoinIcon', () => {
  it('should render correctly', () => {
    const wrapper = render(<CoinIcon ticker='BTC' />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
