import { render } from '@testing-library/react';

import { TokenStack } from '..';

describe('TokenStack', () => {
  it('should render correctly', () => {
    const wrapper = render(<TokenStack tickers={['BTC']} />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
