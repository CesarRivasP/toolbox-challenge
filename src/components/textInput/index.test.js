import React from 'react';
import { TextInput as Input } from 'react-native';
import { shallow } from 'enzyme';
import TextInput from '.';

describe('Text Input', () => {
  let container;
  const onChangeSpy = jest.fn()

  beforeEach(() => {
    container = shallow(
      <TextInput
        label="Test"
        placeholder="Plac"
        onChangeText={onChangeSpy}
        error="Invalid input"
        />
      );
  });

  it('should present label', () => {
    expect(container).not.toBeNull();
    const text = container.find('Text').at(0);
    expect(text.props().children).toBe('Test');
  });
  it('should present placeholder', () => {
    const input = container.find(Input).at(0);
    expect(input.props().placeholder).toBe('Plac');
  });
  it('should trigger on change', () => {
    const input = container.find(Input).at(0);
    input.simulate('changeText', "1234");
    expect(onChangeSpy).toBeCalledWith('1234');
  });
  it('should render error message', () => {
    const errorText = container.find('Text').at(1);
    expect(errorText.props().children).toBe("Invalid input");
  });
});
