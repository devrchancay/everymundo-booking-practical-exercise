import React from "react";
import { render } from "enzyme";

import { defaultState } from "../../store";
import Chooser from "../../components/Common/Passenger/Chooser";

describe("Direction Component", () => {
  const { passengers } = defaultState.booking;

  it("Check default value", () => {
    const wrapper = render(<Chooser passengers={passengers} />);
    expect(wrapper.find("#chooserText").text()).toBe(
      "1 Adult, 0 Child, 0 Infant "
    );
  });

  it("Check open chooser", () => {
    const wrapper = render(<Chooser passengers={passengers} isOpen={true} />);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("#closeChosser")).toHaveLength(1);
  });
});
