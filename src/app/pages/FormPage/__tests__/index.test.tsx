import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { FormPage } from '..';

const shallowRenderer = createRenderer();

describe('<FormPage />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<FormPage />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
