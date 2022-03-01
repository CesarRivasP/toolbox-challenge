import React from "react";
import { shallow } from "enzyme";
import InfoModal from ".";
import Button from "../button";
import { SCREEN_HEIGHT } from "../../utils/constants";

describe("Screen Title", () => {
  let container;
  let onPressActionSpy;
  let onCloseSpy;

  beforeEach(() => {
    onPressActionSpy = jest.fn();
    onCloseSpy = jest.fn();
    container = shallow(
      <InfoModal
        title="Test"
        onClose={onCloseSpy}
        description="Internal error"
        actionName="Got it"
        onPressAction={onPressActionSpy}
        descriptionStyle={{}}
        modalContainerStyle={{}}
        contentContainerCustom={{}}
      />
    );
  });

  it("should show close button", async () => {
    expect(container).not.toBeNull();
    container.setProps({ showCloseButton: true, dismissActionText: "Not now", title: null });
    container.update();
    const closeButton = container.find({ testID: "closeButton" });
    closeButton.simulate("press");
    container.update();
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it("should present title", () => {
    const title = container.find("Text").at(0);
    const description = container.find("Text").at(1);
    const button = container.find(Button).at(0);
    expect(title.props().children).toBe("Test");
    expect(description.props().children).toBe("Internal error");
    expect(button).toExist();
  });

  it("should trigger onPressAction when button is pressed", () => {
    const button = container.find(Button).at(0);
    button.props().onPress();
    container.update();
    expect(onPressActionSpy).toHaveBeenCalledTimes(1);
  });

  it("should should not call on press action if it not a function", () => {
    container.setProps({ onPressAction: "text" });
    container.update();
    const button = container.find(Button).at(0);
    button.simulate("press");
    container.update();
    expect(onPressActionSpy).toHaveBeenCalledTimes(0);
  });

  it("should not have action button if actionName is undefined o an empty string", () => {
    container.setProps({ actionName: undefined });
    const button = container.find(Button).at(0);
    expect(button).not.toExist();
  });
});
