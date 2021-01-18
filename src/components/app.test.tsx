import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./app";

let component: ShallowWrapper;

beforeEach(() => {
  // arrange
  component = shallow(<App />);
});

afterEach(() => {
  component.unmount;
});

describe("should create", () => {
  it("App component", () => {
    // assert
    expect(component).toBeTruthy();
  });
});
