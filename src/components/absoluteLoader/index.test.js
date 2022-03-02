import React from 'react';
import { shallow } from 'enzyme';
import AbsoluteLoader from '.';

describe('AbsoluteLoader Component', () => {
  let container;

  beforeEach(() => {
    container = shallow(<AbsoluteLoader visible />);
  });

  it('should hide and be null when visible is false', () => {
    expect(container).not.toBeNull();
    container.setProps({ visible: false });
    const view = container.find('View').at(0);
    expect(view).not.toExist();
  });
});
