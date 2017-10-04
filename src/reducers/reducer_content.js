import { FETCH_CONTENT } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return action.payload.content;

    default:
      return state;
  }
}
