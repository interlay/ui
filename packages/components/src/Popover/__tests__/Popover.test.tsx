import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { createRef } from 'react';
import { testA11y } from '@interlay/test-utils';
import userEvent from '@testing-library/user-event';

import { Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from '..';
import { CTA } from '../../CTA';

describe('Popover', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Popover isOpen>
        <PopoverTrigger>
          <button>trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Popover ref={ref} isOpen>
        <PopoverTrigger>
          <button>trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Popover isOpen>
        <PopoverTrigger>
          <button>trigger</button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );
  });

  it('should able to open by using trigger', async () => {
    render(
      <Popover>
        <PopoverTrigger>
          <CTA>trigger</CTA>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    userEvent.click(screen.getByRole('button', { name: /trigger/i }));

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /header/i }));
    });
  });

  it('should able to close popover by using ESC', async () => {
    render(
      <Popover>
        <PopoverTrigger>
          <CTA>trigger</CTA>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    userEvent.click(screen.getByRole('button', { name: /trigger/i }));

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /header/i }));
    });

    userEvent.keyboard('{Escape}');

    await waitForElementToBeRemoved(screen.getByRole('dialog', { name: /header/i }));
  });

  it('should able to close popover by clicking outside of the component', async () => {
    render(
      <Popover>
        <PopoverTrigger>
          <CTA>trigger</CTA>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    userEvent.click(screen.getByRole('button', { name: /trigger/i }));

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /header/i }));
    });

    userEvent.click(document.body);

    await waitForElementToBeRemoved(screen.getByRole('dialog', { name: /header/i }));
  });

  it('should emit onOpenChange', async () => {
    const handleOpenChange = jest.fn();

    render(
      <Popover onOpenChange={handleOpenChange}>
        <PopoverTrigger>
          <CTA>trigger</CTA>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    userEvent.click(screen.getByRole('button', { name: /trigger/i }));

    await waitFor(() => {
      expect(screen.getByRole('dialog', { name: /header/i }));
    });

    expect(handleOpenChange).toHaveBeenCalledTimes(1);
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it('should be default open', async () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>
          <CTA>trigger</CTA>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>header</PopoverHeader>
          <PopoverBody>body</PopoverBody>
          <PopoverFooter>footer</PopoverFooter>
        </PopoverContent>
      </Popover>
    );

    expect(screen.getByRole('dialog', { name: /header/i }));
  });
});
