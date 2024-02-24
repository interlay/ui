import { render, screen, waitFor } from '@testing-library/react';
import { Key, createRef, useState } from 'react';
import { testA11y } from '@interlay/test-utils';
import userEvent from '@testing-library/user-event';

import { Tabs, TabsItem } from '..';

describe('Tabs', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Tabs>
        <TabsItem key='1' title='Title'>
          item
        </TabsItem>
      </Tabs>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Tabs ref={ref}>
        <TabsItem key='1' title='Title'>
          item
        </TabsItem>
      </Tabs>
    );

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Tabs>
        <TabsItem key='1' title='Title'>
          item
        </TabsItem>
      </Tabs>
    );
  });

  it('should display default selected key', async () => {
    render(
      <Tabs defaultSelectedKey='2'>
        <TabsItem key='1' title='Title 1'>
          item 1
        </TabsItem>
        <TabsItem key='2' title='Title 2'>
          item 2
        </TabsItem>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: /title 2/i })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent(/item 2$/i);
  });

  it('should be able to control open tab', async () => {
    const Component = () => {
      const [state, setState] = useState<Key>('2');

      return (
        <Tabs selectedKey={state} onSelectionChange={setState}>
          <TabsItem key='1' title='Title 1'>
            item 1
          </TabsItem>
          <TabsItem key='2' title='Title 2'>
            item 2
          </TabsItem>
        </Tabs>
      );
    };

    render(<Component />);

    expect(screen.getByRole('tab', { name: /title 2/i })).toHaveAttribute('aria-selected', 'true');

    userEvent.click(screen.getByRole('tab', { name: /title 1/i }));

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /title 1/i })).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('should disabled tab', async () => {
    render(
      <Tabs disabledKeys={['1']}>
        <TabsItem key='1' title='Title 1'>
          item 1
        </TabsItem>
        <TabsItem key='2' title='Title 2'>
          item 2
        </TabsItem>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: /title 1/i })).toHaveAttribute('aria-disabled', 'true');
  });
});
