import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  return (
    // if the initialState is not passed in as props, it will default to an empty object
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};
