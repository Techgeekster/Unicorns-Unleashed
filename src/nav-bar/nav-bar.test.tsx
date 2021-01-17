import React from 'react';
import NavBar from './nav-bar';
import { shallow, ShallowWrapper } from 'enzyme';

let component: ShallowWrapper;

beforeEach(() => {
  // arrange
  component = shallow(<NavBar />);
});

afterEach(() => {
  component.unmount;
});

it("should create NavBar component", () => {
  // assert
  expect(component).toBeTruthy();
});

it("should render 'Unicorns Unleashed' link", () => {
  // arrange
  const h1Text: string = component.find("h1").text();

  // assert
  expect(h1Text).toEqual("Unicorns Unleashed");
});
