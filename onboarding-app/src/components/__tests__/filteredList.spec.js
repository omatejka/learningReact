import FilteredResults from "../filteredList";
import { shallow } from "enzyme";
import React from "react";

describe("<FilteredResults />", () => {
  it("renders a <ul>", () => {
    const renderedComponent = shallow(<FilteredResults />);
    expect(renderedComponent.find("#filteredResults").node).toExist;
  });
});
