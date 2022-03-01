import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Button Component", () => {
  let container;
  let onPressSpy;

  beforeEach(() => {
    onPressSpy = jest.fn();
    container = shallow(
      <Button
        title="Test"
        disabled={false}
        onPress={onPressSpy}
      />
    );
  });

  it("should call press events", () => {
    expect(container).not.toBeNull();
    const text = container.find("Text").at(0);
    expect(text.props().children).toBe("Test");
    container.props().onPress();
    container.update();
    expect(onPressSpy).toHaveBeenCalledTimes(1);
  });
});
