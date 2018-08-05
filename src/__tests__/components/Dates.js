import React from "react";
import { WrapperDatePicker } from "../../components/Common/Dates";
import { mount } from "enzyme";
import moment from "moment";

const outBoundFlight = moment().add(1, "day");
const returnFlight = moment().add(8, "days");

describe("Direction Component", () => {
  const wrapper = mount(
    <WrapperDatePicker
      outBoundFlight={outBoundFlight}
      returnFlight={returnFlight}
    />
  );

  it("should have two inputs", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should have placeholders", () => {
    expect(wrapper.find('input[placeholder="Outbound flight"]').exists()).toBe(
      true
    );
    expect(wrapper.find('input[placeholder="Return flight"]').exists()).toBe(
      true
    );
  });

  it('field "Outbound flight" should have a selected value', () => {
    expect(
      wrapper.find('input[placeholder="Outbound flight"]').props().value
    ).toBe(outBoundFlight.format("MM/DD/YYYY"));
  });

  it('field "Return flight" should have a selected value', () => {
    expect(
      wrapper.find('input[placeholder="Return flight"]').props().value
    ).toBe(returnFlight.format("MM/DD/YYYY"));
  });
});
