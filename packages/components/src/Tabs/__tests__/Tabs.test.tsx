import { render } from '@testing-library/react';

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
});
