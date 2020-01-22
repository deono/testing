import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  // console.log("action: ", response);
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

// change the authentication state
export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
