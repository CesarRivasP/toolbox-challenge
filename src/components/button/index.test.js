import React from "react";
import { shallow } from "enzyme";
import Button from ".";
import colors from "../../utils/styles/colors";

describe("Button Component", () => {
  let container;
  const onPressSpy = jest.fn();

  beforeEach(() => {
    container = shallow(
      <Button
        title="Test"
        onPressIn={undefined}
        onPress={onPressSpy}
        onPressOut={undefined}
      />);
  });

  it("should render component", () => {
    expect(container).not.toBeNull();
  });

  it("should call press events", () => {
    const text = container.find("Text").at(0);
    expect(text.props().children).toBe("Test");
    container.props().onPressIn();
    container.update();
    expect(container.props().style[0].backgroundColor).toBe(colors.BLUE_40);
    container.props().onPress();
    container.update();
    expect(onPressSpy).toHaveBeenCalledTimes(1);
    container.props().onPressOut();
    container.update();
    expect(container.props().style[0].backgroundColor).toBe(colors.BLUE_0);
  });
});
