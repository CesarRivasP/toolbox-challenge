import React from "react";
import { shallow } from "enzyme";
import AbsoluteLoader from ".";

describe("Screen Title", () => {
  let container;

  beforeEach(() => {
    container = shallow(<AbsoluteLoader visible />);
  });

  it("should render component", () => {
    expect(container).not.toBeNull();
  });

  it("should hide and be null when visible is false", () => {
    container.setProps({ visible: false });
    const view = container.find("View").at(0);
    expect(view).not.toExist();
  });
});
