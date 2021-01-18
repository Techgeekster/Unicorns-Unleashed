import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Home from "./home";

let component: ShallowWrapper;

beforeEach(() => {
  // arrange
  component = shallow(<Home />);
});

afterEach(() => {
  component.unmount;
});

describe("should create", () => {
  it("Home component", () => {
    // assert
    expect(component).toBeTruthy();
  });
});
