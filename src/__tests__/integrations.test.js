import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  // intercept the axios request and return fake data
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the fetchComments button by its class name and click it
  wrapped.find(".fetch-comments").simulate("click");
  // introduce a pause to allow moxios to return the fake data
  moxios.wait(() => {
    //update the component with the fake data
    wrapped.update();
    //expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(2);
    // tell Jest to hold on until done() is called to handle the setTimeout
    done();
    // cleanup
    wrapped.unmount();
  });
});
