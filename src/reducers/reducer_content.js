import { FETCH_CONTENT, FETCH_STORIES } from "../actions";

export default function(state = { content: null, stories: null }, action) {
  switch (action.type) {
    case FETCH_CONTENT:
      return { ...state, content: action.payload.content };

    case FETCH_STORIES:
      return { ...state, stories: action.payload };

    default:
      return state;
  }
}
