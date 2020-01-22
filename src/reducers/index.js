import { combineReducers } from "redux";
import commentsReducers from "reducers/commentsReducer";
import authReducer from "reducers/authReducer";

export default combineReducers({
  comments: commentsReducers,
  auth: authReducer
});
