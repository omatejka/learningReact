import Button from "../button";
import { shallow } from "enzyme";
import React from "react";


describe("<Button />", () => {
  it("renders a <button>", () => {
    const renderedComponent = shallow(<Button />);

    expect(renderedComponent.find("button").node).toExist;
  });

  it("renders text", () => {
    const text = "Search";
    const renderedComponent = shallow(<Button>{text}</Button>);

    expect(renderedComponent.contains(text)).toEqual(true);
  });


  it("simulates click events", () => {
    const onClick = jest.fn();
    const renderedComponent = shallow(<Button search={onClick} />);
    renderedComponent.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
