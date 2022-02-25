import React from "react";
import { shallow } from "enzyme";
import InfoModal from ".";
import Button from "../button";
import { SCREEN_HEIGHT } from "../../utils/constants";

describe("Screen Title", () => {
  let container;
  let onPressActionSpy;
  const onCloseSpy = jest.fn();

  beforeEach(() => {
    onPressActionSpy = jest.fn();
    container = shallow(
      <InfoModal
        onClose={onCloseSpy}
        title="Test"
        description="Internal error"
        actionName="Got it"
        onPressAction={onPressActionSpy}
        descriptionStyle={{}}
        modalContainerStyle={{}}
        contentContainerCustom={{}}
      />
    );
  });

  it("should render component", () => {
    expect(container).not.toBeNull();
  });

  it("should show close button", async () => {
    container.setProps({ showCloseButton: true, dismissActionText: "Not now", title: null });
    const closeButton = container.find({ testID: "closeButton" });
    closeButton.simulate("press");
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it("should present title", () => {
    const title = container.find("Text").at(0);
    expect(title.props().children).toBe("Test");
  });

  it("should present description", () => {
    const description = container.find("Text").at(1);
    expect(description.props().children).toBe("Internal error");
  });

  it("should have action button if actionName is a non-empty string", () => {
    const button = container.find(Button).at(0);
    expect(button).toExist();
  });

  it("should trigger onPressAction when button is pressed", () => {
    const button = container.find(Button).at(0);
    button.props().onPressIn()
    button.props().onPress()
    button.props().onPressOut()
    expect(onPressActionSpy).toHaveBeenCalledTimes(1);
  });

  it("should should not call on press action if it not a function", () => {
    container.setProps({ onPressAction: "text" });
    const button = container.find(Button).at(0);
    button.simulate("press");
    expect(onPressActionSpy).toHaveBeenCalledTimes(0);
  });

  it("should positionate dialog in the middle of the screen", async () => {
    const dialog = container.find({ testID: "dialog" });
    dialog.simulate("layout", { nativeEvent: { layout: { height: 160 } } });
    const updatedDialog = container.find({ testID: "dialog" });
    expect(updatedDialog.props().style[0].top).toBe(
      SCREEN_HEIGHT * 0.5 - 160 * 0.5
    );
  });

  it("should not have action button if actionName is undefined o an empty string", () => {
    container.setProps({ actionName: undefined });
    const button = container.find(Button).at(0);
    expect(button).not.toExist();
  });
});
