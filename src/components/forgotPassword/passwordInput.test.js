import React from 'react';
import { shallow } from 'enzyme';
import PasswordInput from './passwordInput';
import Colors from '../../utils/styles/colors';

describe('Forgot password input component', () => {
  let wrapper;
  const valueValidate = '****';
  const placeholderValidate = 'password';
  const onChangeTextValidate = jest.fn();
  const style = {
    color: Colors.BLACK,
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

  it('should return false when pressed', () => {
    expect(wrapper).not.toBeNull();
    const secureTogglePress = wrapper.find({ testID: 'securePasswordStatus' });
    secureTogglePress.simulate('press');
    expect(wrapper.prop('secureTextEntry')).toBeFalsy();
  });
});
