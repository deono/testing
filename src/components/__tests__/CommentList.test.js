import React from "react";
import { mount } from "enzyme"; // full DOM rendering

import CommentList from "components/CommentList";
import Root from "Root"; // make redux store accessible

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("show the text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
