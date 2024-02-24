import { render, screen, waitFor } from '@testing-library/react';
import { createRef, useState } from 'react';
import { testA11y } from '@interlay/test-utils';
import userEvent from '@testing-library/user-event';

import { Switch } from '..';

describe('Switch', () => {
  it('should render correctly', () => {
    const wrapper = render(<Switch>switch</Switch>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLLabelElement>();

    render(<Switch ref={ref}>switch</Switch>);

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<Switch>switch</Switch>);
  });

  it('should emit onChange and onValueChange', async () => {
    const handleChange = jest.fn();
    const handleValueChange = jest.fn();

    render(
      <Switch onChange={handleChange} onValueChange={handleValueChange}>
        switch
      </Switch>
    );

    userEvent.click(screen.getByRole('switch', { name: /switch/i }));

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleValueChange).toHaveBeenCalledTimes(1);
      expect(handleValueChange).toHaveBeenCalledWith(true);
    });
  });

  it('should control value', async () => {
    const Component = () => {
      const [state, setState] = useState(false);

      return (
        <Switch isSelected={state} onValueChange={(isSelected) => setState(isSelected)}>
          switch
        </Switch>
      );
    };

    render(<Component />);

    expect(screen.getByRole('switch', { name: /switch/i })).not.toBeChecked();

    userEvent.click(screen.getByRole('switch', { name: /switch/i }));

    await waitFor(() => {
      expect(screen.getByRole('switch', { name: /switch/i })).toBeChecked();
    });
  });

  it('should be disabled', async () => {
    render(<Switch isDisabled>switch</Switch>);

    expect(screen.getByRole('switch', { name: /switch/i })).toBeDisabled();
  });

  it('should be read only', async () => {
    render(<Switch isReadOnly>switch</Switch>);

    expect(screen.getByRole('switch', { name: /switch/i })).toHaveAttribute('aria-readonly', 'true');
  });
});
