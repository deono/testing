import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default (state = [], action) => {
  const { type, payload } = action;
  // console.log("reducer: ", payload);
  switch (type) {
    case SAVE_COMMENT:
      return [...state, payload];
    case FETCH_COMMENTS:
      // return an array of names
      const comments = payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
};
