import commentsReducer from "reducers/commentsReducer";
import { SAVE_COMMENT } from "actions/types";

// test SAVE_COMMENT type
it("handles actions of type SAVE_COMMENT", () => {
  // fake an action
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };
  // get state from reducer
  const newState = commentsReducer([], action);
  // assert that the new state matches the action payload
  expect(newState).toEqual(["New comment"]);
});

// test an unknown action type (empty obj)
it("handles action with unknown type", () => {
  const newState = commentsReducer([], {});
  // assert that the reducer returns an empty array
  expect(newState).toEqual([]);
});
