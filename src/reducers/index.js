import { combineReducers } from "redux";
import commentsReducers from "reducers/commentsReducer";

export default combineReducers({
  comments: commentsReducers
});
