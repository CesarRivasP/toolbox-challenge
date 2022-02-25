import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from '.';

describe('Loader Component', () => {
  let container;
  const size = 'small';
  const height = 500;
  const color = '#FFFFFF';

  beforeEach(() => {
    container = shallow(
      <LoadingIndicator
        size={size}
        height={height}
        color={color}
      />
    );
  });

  it('should render', () => {
    expect(container).not.toBeNull();
  });

  it('should have height prop', () => {
    const loadingContainer = container.find({ id: 'loadingContainer' });

    expect(loadingContainer.props().style[1].height).toBe(height);
  });

  it('should have color prop', () => {
    const loadingComponent = container.find({ id: 'loadingComponent' });

    expect(loadingComponent.props().color).toBe(color);
  });

  it('should have size prop', () => {
    const loadingComponent = container.find({ id: 'loadingComponent' });

    expect(loadingComponent.props().size).toBe(size);
  });
});
