import { render } from '@testing-library/react';
import React from 'react';

import { Overlay } from '..';

describe('Overlay', () => {
  it('should render correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    const wrapper = render(
      <Overlay nodeRef={ref}>
        <div />
      </Overlay>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
