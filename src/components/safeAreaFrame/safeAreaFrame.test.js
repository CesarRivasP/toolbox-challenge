import React from 'react';
import { shallow } from 'enzyme';
import SafeAreaFrame from './index';

describe('SafeAreaFrame component', () => {
  let container;

  const loadWrapper = (isComplete) => {
    container = shallow(
      <SafeAreaFrame
        title='Test'
        completeScreen={isComplete}
      />
    );
  };

  it('Buttons rendering component test', () => {
    loadWrapper(false);
    expect(container).not.toBeNull();
  });

  it('Buttons rendering component test', () => {
    loadWrapper(true);
    expect(container).not.toBeNull();
  });
});
