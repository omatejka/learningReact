import FilterBar from "../filterResultsBar";
import { shallow } from "enzyme";
import React from "react";

describe("<FilterBar />", () => {
  it("renders a <input>", () => {
    const renderedComponent = shallow(<FilterBar />);
    expect(renderedComponent.find("#filterBar").node).toExist;
  });

  it("simulates change event", () => {
    const onChange = jest.fn();
    const renderedComponent = shallow(<FilterBar onChange={onChange} />);
    renderedComponent
      .find("#filterBar")
      .simulate("change", "ondrej");
      expect(onChange).toHaveBeenCalledWith("ondrej");
  });
});
