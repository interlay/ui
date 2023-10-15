import { render, screen, waitFor } from '@testing-library/react';
import { testA11y } from '@interlay/test-utils';
import { Key, createRef, useState } from 'react';
import userEvent from '@testing-library/user-event';

import { Accordion, AccordionItem } from '..';

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Accordion>
        <AccordionItem title='Item'>Content</AccordionItem>
      </Accordion>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Accordion ref={ref}>
        <AccordionItem title='Item'>Content</AccordionItem>
      </Accordion>
    );
    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(
      <Accordion>
        <AccordionItem title='Item'>Content</AccordionItem>
      </Accordion>
    );
  });

  it('should have default expanded key', async () => {
    render(
      <Accordion defaultExpandedKeys={['1']}>
        <AccordionItem key='1' hasChildItems={false} title='Item 1'>
          Content 1
        </AccordionItem>
        <AccordionItem key='2' hasChildItems={false} title='Item 2'>
          Content 2
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByRole('button', { name: /item 1/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('should have disable key', async () => {
    render(
      <Accordion disabledKeys={['1']}>
        <AccordionItem key='1' hasChildItems={false} title='Item 1'>
          Content 1
        </AccordionItem>
        <AccordionItem key='2' hasChildItems={false} title='Item 2'>
          Content 2
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByRole('button', { name: /item 1/i })).toBeDisabled();
  });

  it('should be able to control expanded keys', async () => {
    const Component = () => {
      const [state, setState] = useState<Set<Key>>(new Set(['1']));

      return (
        <Accordion expandedKeys={state} onExpandedChange={setState}>
          <AccordionItem key='1' hasChildItems={false} title='Item 1'>
            Content 1
          </AccordionItem>
          <AccordionItem key='2' hasChildItems={false} title='Item 2'>
            Content 2
          </AccordionItem>
        </Accordion>
      );
    };

    render(<Component />);

    expect(screen.getByRole('button', { name: /item 1/i })).toHaveAttribute('aria-expanded', 'true');

    userEvent.click(screen.getByRole('button', { name: /item 2/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /item 2/i })).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('should emit onExpandedChange', async () => {
    const onExpandedChange = jest.fn();

    render(
      <Accordion onExpandedChange={onExpandedChange}>
        <AccordionItem key='1' hasChildItems={false} title='Item 1'>
          Content 1
        </AccordionItem>
        <AccordionItem key='2' hasChildItems={false} title='Item 2'>
          Content 2
        </AccordionItem>
      </Accordion>
    );

    userEvent.click(screen.getByRole('button', { name: /item 1/i }));

    await waitFor(() => {
      expect(onExpandedChange).toHaveBeenCalledTimes(1);
      expect(onExpandedChange).toHaveBeenCalledWith(new Set(['1']));
    });
  });
});
