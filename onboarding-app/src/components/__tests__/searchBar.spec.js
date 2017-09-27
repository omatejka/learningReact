import SearchBar from "../searchBar";
import { shallow } from "enzyme";
import React from "react";

describe("<SearchBar />", () => {
  it("renders a <input>", () => {
    const renderedComponent = shallow(<SearchBar />);
    expect(renderedComponent.find("#searchBar").node).toExist;
  });

  it("simulates change event", () => {
    const onChange = jest.fn();
    const renderedComponent = shallow(<SearchBar  onChange={onChange} />);
    renderedComponent
      .find("#searchBar")
      .simulate("change", "ondrej" );
    expect(onChange).toHaveBeenCalledWith('ondrej');
  });
});
