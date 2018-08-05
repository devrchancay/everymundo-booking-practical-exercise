import React from "react";
import Direction from "../../components/Common/Direction";
import { mount } from "enzyme";
import data from "../../components/TabContent/data";

describe("Direction Component", () => {
  const wrapper = mount(<Direction items={data} />);
  it("should have two inputs", () => {
    expect(wrapper.find("input")).toHaveLength(2);
  });

  it("should have placeholders", () => {
    expect(wrapper.find('input[placeholder="From"]').exists()).toBe(true);
    expect(wrapper.find('input[placeholder="To"]').exists()).toBe(true);
  });

  it('field "From" should have a selected value', () => {
    expect(wrapper.find('input[placeholder="From"]').props().value).toBe("");
  });

  it('field "To", should have a selected value', () => {
    expect(wrapper.find('input[placeholder="To"]').props().value).toBe("");
  });
});
