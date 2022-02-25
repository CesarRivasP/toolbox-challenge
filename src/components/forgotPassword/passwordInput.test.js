import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './passwordInput';

describe('Forgot password', () => {
  let wrapper;
  const valueValidate = '****';
  const placeholderValidate = 'password';
  const onChangeTextValidate = jest.fn();
  const style = {
    color: '#000',
  };

  beforeEach(() => {
    wrapper = shallow(
      <PasswordInput
        value={valueValidate}
        placeholder={placeholderValidate}
        onChangeText={onChangeTextValidate}
        textStyle={style}
      />,
    );
  });

  it('should render', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should return false when pressed', () => {
    const secureTogglePress = wrapper.find({ id: 'securePasswordStatus' });
    secureTogglePress.simulate('press');
    expect(wrapper.prop('secureTextEntry')).toBeFalsy();
  });
});
