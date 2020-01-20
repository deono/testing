import React from "react";
import { shallow } from "enzyme"; // render an instance of a component and none of its children
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
// this runs before each test - so this code does not have to be repeated
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // expectation
  // find() returns an array - the length of the array should be 1
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
