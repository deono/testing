import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  // remove the component from the DOM
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the textarea", () => {
  // this code runs before each it() function in this describe() function
  beforeEach(() => {
    // find the textarea element
    // simulate a change event
    // provide a fake event object
    wrapped
      .find("textarea")
      .simulate("change", { target: { name: "comment", value: "hello" } });
    // force the component to re-render
    wrapped.update();
  });
  it("has a text area that users can type in", () => {
    // assert that the text areas value has changed
    expect(wrapped.find("textarea").prop("value")).toEqual("hello");
  });

  it("clears the textarea when the form is submitted", () => {
    // simulate a submit event
    wrapped.find("form").simulate("submit");
    // force component re-render
    wrapped.update();
    // assert the value has been set to empty string
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
