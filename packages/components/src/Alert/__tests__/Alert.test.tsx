import { render, testA11y } from '@interlay/test-utils';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Alert } from '..';

describe('Alert', () => {
  it('should render correctly', () => {
    const wrapper = render(<Alert>Alert</Alert>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should pass a11y', async () => {
    await testA11y(<Alert>Alert</Alert>);
  });

  it.skip('should emit close event', () => {
    const handleClose = jest.fn();

    render(<Alert onClose={handleClose}>Alert</Alert>);

    userEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
